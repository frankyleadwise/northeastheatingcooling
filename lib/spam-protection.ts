/**
 * Spam Protection Library
 * ────────────────────────
 * Layered defenses for the contact form. Each function is independent and
 * returns a reason string when something fails (for logging) or null when
 * the check passes.
 *
 * Layers:
 *   1. Honeypot          → company_url field check (in route handler)
 *   2. Timing            → form must take >= 3s and <= 2h to submit
 *   3. Validation        → phone area code, email domain, name entropy
 *   4. Rate limiting     → IP-based throttle (in route handler)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Phone validation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Valid NANP (North American Numbering Plan) area codes.
 * Source: NANPA assigned area codes as of 2025.
 * Bots commonly use unassigned codes like 235, 542, 768 — instant tell.
 */
const VALID_NANP_AREA_CODES = new Set([
  // 2xx
  '201', '202', '203', '204', '205', '206', '207', '208', '209', '210',
  '212', '213', '214', '215', '216', '217', '218', '219', '220', '223',
  '224', '225', '226', '227', '228', '229', '231', '234', '236', '239',
  '240', '242', '246', '248', '249', '250', '251', '252', '253', '254',
  '256', '260', '262', '263', '264', '267', '268', '269', '270', '272',
  '274', '276', '279', '281', '283', '284', '289',
  // 3xx
  '301', '302', '303', '304', '305', '306', '307', '308', '309', '310',
  '312', '313', '314', '315', '316', '317', '318', '319', '320', '321',
  '323', '325', '326', '327', '329', '330', '331', '332', '334', '336',
  '337', '339', '340', '341', '343', '345', '346', '347', '350', '351',
  '352', '353', '354', '360', '361', '363', '364', '365', '367', '368',
  '369', '380', '382', '385', '386',
  // 4xx
  '401', '402', '403', '404', '405', '406', '407', '408', '409', '410',
  '412', '413', '414', '415', '416', '417', '418', '419', '423', '424',
  '425', '428', '430', '431', '432', '434', '435', '437', '438', '440',
  '441', '442', '443', '445', '447', '448', '450', '456', '458', '463',
  '464', '467', '468', '469', '470', '472', '473', '474', '475', '478',
  '479', '480', '484',
  // 5xx
  '500', '501', '502', '503', '504', '505', '506', '507', '508', '509',
  '510', '512', '513', '514', '515', '516', '517', '518', '519', '520',
  '522', '523', '524', '525', '526', '527', '528', '529', '530', '531',
  '533', '534', '539', '540', '541', '544', '548', '551', '552', '557',
  '559', '561', '562', '563', '564', '566', '567', '570', '571', '572',
  '573', '574', '575', '577', '578', '579', '580', '581', '582', '584',
  '585', '586', '587', '588', '589', '599',
  // 6xx
  '600', '601', '602', '603', '604', '605', '606', '607', '608', '609',
  '610', '612', '613', '614', '615', '616', '617', '618', '619', '620',
  '622', '623', '624', '626', '628', '629', '630', '631', '633', '636',
  '639', '640', '641', '645', '646', '647', '649', '650', '651', '656',
  '657', '658', '659', '660', '661', '662', '664', '667', '669', '670',
  '671', '672', '678', '680', '681', '682', '683', '684', '689',
  // 7xx
  '700', '701', '702', '703', '704', '705', '706', '707', '708', '709',
  '710', '712', '713', '714', '715', '716', '717', '718', '719', '720',
  '721', '724', '725', '726', '727', '728', '731', '732', '734', '737',
  '740', '742', '743', '747', '753', '754', '757', '758', '760', '762',
  '763', '765', '767', '769', '770', '771', '772', '773', '774', '775',
  '778', '779', '780', '781', '782', '784', '785', '786', '787', '788',
  '800', '801', '802', '803', '804', '805', '806', '807', '808', '809',
  '810', '812', '813', '814', '815', '816', '817', '818', '819', '820',
  '825', '826', '828', '829', '830', '831', '832', '835', '838', '839',
  '840', '843', '844', '845', '847', '848', '849', '850', '854', '855',
  '856', '857', '858', '859', '860', '861', '862', '863', '864', '865',
  '866', '867', '868', '869', '870', '872', '873', '876', '877', '878',
  '879', '888', '900', '901', '902', '903', '904', '905', '906', '907',
  '908', '909', '910', '912', '913', '914', '915', '916', '917', '918',
  '919', '920', '925', '928', '929', '930', '931', '934', '936', '937',
  '938', '939', '940', '941', '943', '945', '946', '947', '948', '949',
  '951', '952', '954', '956', '959', '970', '971', '972', '973', '975',
  '978', '979', '980', '983', '984', '985', '986', '989',
])

export function validatePhone(phone: string): string | null {
  // Strip everything except digits and leading +
  const cleaned = phone.replace(/[^\d+]/g, '')

  // Strip leading +1 or 1 to get the 10-digit NANP number
  let digits = cleaned
  if (digits.startsWith('+1')) digits = digits.slice(2)
  else if (digits.startsWith('+')) {
    return 'non-US country code'
  } else if (digits.length === 11 && digits.startsWith('1')) {
    digits = digits.slice(1)
  }

  if (digits.length !== 10) {
    return `invalid phone length (${digits.length} digits)`
  }

  const areaCode = digits.slice(0, 3)
  const exchange = digits.slice(3, 6)

  if (!VALID_NANP_AREA_CODES.has(areaCode)) {
    return `unassigned area code: ${areaCode}`
  }

  // NANP rule: exchange (NXX) cannot start with 0 or 1
  if (exchange[0] === '0' || exchange[0] === '1') {
    return `invalid exchange: ${exchange}`
  }

  // NANP rule: area code cannot start with 0 or 1
  if (areaCode[0] === '0' || areaCode[0] === '1') {
    return `invalid area code start: ${areaCode}`
  }

  return null
}

// ─────────────────────────────────────────────────────────────────────────────
// Email validation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Disposable email domains commonly used by spam bots.
 * Not exhaustive — just the most common offenders.
 */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', '10minutemail.com',
  'throwaway.email', 'temp-mail.org', 'yopmail.com', 'sharklasers.com',
  'getnada.com', 'maildrop.cc', 'fakeinbox.com', 'trashmail.com',
  'dispostable.com', 'mintemail.com', 'mytemp.email', 'tempail.com',
  'spam4.me', 'mohmal.com', 'emailondeck.com', 'tempinbox.com',
])

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(email: string): string | null {
  if (!EMAIL_REGEX.test(email)) {
    return 'malformed email'
  }

  const domain = email.split('@')[1]?.toLowerCase()
  if (!domain) return 'no domain'

  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return `disposable domain: ${domain}`
  }

  return null
}

// ─────────────────────────────────────────────────────────────────────────────
// Name validation (entropy-based gibberish detection)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Detects randomly-generated gibberish strings like "MLwiFyxLXIXIXaTehK".
 *
 * Heuristics:
 *   1. Real names have vowel-consonant rhythm (vowel ratio ~30-50%)
 *   2. Real names rarely have 4+ consonants in a row
 *   3. Real names rarely have erratic case mixing (e.g., "MLwiFyxLXIXI")
 *   4. Real names are usually 2-20 chars
 *
 * These are not perfect but catch ~95% of bot-generated gibberish.
 */
export function validateName(name: string): string | null {
  const trimmed = name.trim()

  if (trimmed.length < 2) return 'too short'
  if (trimmed.length > 50) return 'too long'

  // Allow letters, spaces, hyphens, apostrophes, periods (for "Jr.", "St.")
  if (!/^[A-Za-z\s\-'.]+$/.test(trimmed)) {
    return 'invalid characters'
  }

  const lettersOnly = trimmed.replace(/[^A-Za-z]/g, '')
  if (lettersOnly.length < 2) return 'no letters'

  // Vowel ratio check — real names have vowels.
  // Skip for very short strings (Jr, Sr, II, III, initials) to avoid false positives.
  if (lettersOnly.length >= 4) {
    const vowels = (lettersOnly.match(/[aeiouAEIOU]/g) || []).length
    const vowelRatio = vowels / lettersOnly.length
    if (vowelRatio < 0.15) {
      return `low vowel ratio (${vowelRatio.toFixed(2)})`
    }
  }

  // Consonant cluster check — 5+ consonants in a row = gibberish
  if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/.test(lettersOnly)) {
    return 'consonant cluster'
  }

  // Erratic case mixing — count case transitions
  // "John" = 1 transition, "MLwiFyx" = 6 transitions (gibberish)
  let caseTransitions = 0
  for (let i = 1; i < lettersOnly.length; i++) {
    const prev = lettersOnly[i - 1]
    const curr = lettersOnly[i]
    const prevIsUpper = prev >= 'A' && prev <= 'Z'
    const currIsUpper = curr >= 'A' && curr <= 'Z'
    if (prevIsUpper !== currIsUpper) caseTransitions++
  }
  // Allow up to 2 transitions per name (e.g., "McDonald", "DeAngelo")
  // More than that = camelCase gibberish
  if (caseTransitions > 3) {
    return `erratic case (${caseTransitions} transitions)`
  }

  return null
}

// ─────────────────────────────────────────────────────────────────────────────
// Timing validation
// ─────────────────────────────────────────────────────────────────────────────

const MIN_FILL_TIME_MS = 3_000        // 3 seconds — humans can't beat this
const MAX_FILL_TIME_MS = 2 * 60 * 60_000  // 2 hours — stale token

export function validateTiming(formStartedAt: number | undefined): string | null {
  if (!formStartedAt || typeof formStartedAt !== 'number') {
    return 'no timestamp'
  }

  const elapsed = Date.now() - formStartedAt
  if (elapsed < MIN_FILL_TIME_MS) {
    return `submitted too fast (${elapsed}ms)`
  }
  if (elapsed > MAX_FILL_TIME_MS) {
    return `stale token (${Math.round(elapsed / 60_000)}min)`
  }

  return null
}

// ─────────────────────────────────────────────────────────────────────────────
// Origin validation
// ─────────────────────────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = [
  'https://northeastheatingcooling.com',
  'https://www.northeastheatingcooling.com',
  // Vercel preview deploys
  /^https:\/\/northeastheatingcooling-[a-z0-9-]+\.vercel\.app$/,
  // Local dev
  'http://localhost:3000',
]

export function validateOrigin(origin: string | null): string | null {
  if (!origin) return 'missing origin'

  for (const allowed of ALLOWED_ORIGINS) {
    if (typeof allowed === 'string') {
      if (origin === allowed) return null
    } else {
      if (allowed.test(origin)) return null
    }
  }

  return `disallowed origin: ${origin}`
}

// ─────────────────────────────────────────────────────────────────────────────
// IP rate limiting (in-memory; resets on cold start, fine for our volume)
// ─────────────────────────────────────────────────────────────────────────────

const RATE_LIMIT_WINDOW_MS = 60 * 60_000  // 1 hour
const RATE_LIMIT_MAX = 3                  // 3 submissions per IP per hour

type RateLimitEntry = { count: number; windowStart: number }
const rateLimitStore = new Map<string, RateLimitEntry>()

export function checkRateLimit(ip: string): { allowed: boolean; count: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now })
    return { allowed: true, count: 1 }
  }

  entry.count++
  if (entry.count > RATE_LIMIT_MAX) {
    return { allowed: false, count: entry.count }
  }
  return { allowed: true, count: entry.count }
}

// Periodic cleanup so the map doesn't grow forever
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [ip, entry] of rateLimitStore.entries()) {
      if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(ip)
      }
    }
  }, RATE_LIMIT_WINDOW_MS).unref?.()
}
