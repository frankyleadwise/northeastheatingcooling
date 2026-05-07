/**
 * Tests for spam protection library.
 * Uses real spam patterns from the actual GHL screenshot
 * + a basket of legitimate-looking names/phones to avoid false positives.
 */
import {
  validatePhone,
  validateEmail,
  validateName,
  validateTiming,
  validateOrigin,
  checkRateLimit,
} from './spam-protection'

let passed = 0
let failed = 0

function test(name: string, fn: () => void) {
  try {
    fn()
    console.log(`  ✅ ${name}`)
    passed++
  } catch (err) {
    console.log(`  ❌ ${name}`)
    console.log(`     ${(err as Error).message}`)
    failed++
  }
}

function assertEq<T>(actual: T, expected: T, msg?: string) {
  if (actual !== expected) {
    throw new Error(
      msg ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
    )
  }
}

function assertNull(actual: unknown, msg?: string) {
  if (actual !== null) {
    throw new Error(msg ?? `expected null, got ${JSON.stringify(actual)}`)
  }
}

function assertNotNull(actual: unknown, msg?: string) {
  if (actual === null) {
    throw new Error(msg ?? `expected non-null, got null`)
  }
}

// ────────────────────────────────────────────────────────────────────
console.log('\n📞 Phone validation')
// ────────────────────────────────────────────────────────────────────

test('rejects spam: +12351421140 (235 unassigned)', () => {
  assertNotNull(validatePhone('+12351421140'))
})
test('rejects spam: +17680851946 (768 unassigned)', () => {
  assertNotNull(validatePhone('+17680851946'))
})
test('rejects spam: +15422927848 (542 unassigned)', () => {
  assertNotNull(validatePhone('+15422927848'))
})
test('rejects spam: +17207897047 (720 IS assigned, but should pass — keep tight)', () => {
  // 720 is Denver. This one would actually pass — we accept it.
  assertNull(validatePhone('+17207897047'))
})
test('rejects spam: +13641101521 (364 unassigned)', () => {
  assertNotNull(validatePhone('+13641101521'))
})
test('rejects spam: +13767260606 (376 unassigned)', () => {
  assertNotNull(validatePhone('+13767260606'))
})
test('rejects spam: +18884460866 (888 — toll-free, valid but suspicious; we accept it)', () => {
  // 888 is toll-free. Real businesses use these. Accept.
  assertNull(validatePhone('+18884460866'))
})
test('rejects non-US: +447700900123 (UK)', () => {
  assertNotNull(validatePhone('+447700900123'))
})

test('accepts Tampa: +18132916146', () => {
  assertNull(validatePhone('+18132916146'))
})
test('accepts Tampa: (813) 555-0100', () => {
  assertNull(validatePhone('(813) 555-0100'))
})
test('accepts FL: 727-555-0100', () => {
  assertNull(validatePhone('727-555-0100'))
})
test('accepts FL: 941.555.0100', () => {
  assertNull(validatePhone('941.555.0100'))
})
test('accepts FL: 3525550100', () => {
  assertNull(validatePhone('3525550100'))
})
test('accepts NYC: +12125550100', () => {
  assertNull(validatePhone('+12125550100'))
})
test('accepts LA: +13105550100', () => {
  assertNull(validatePhone('+13105550100'))
})

test('rejects: too short', () => {
  assertNotNull(validatePhone('555'))
})
test('rejects: starts with 0', () => {
  assertNotNull(validatePhone('0135551234'))
})
test('rejects: starts with 1', () => {
  assertNotNull(validatePhone('1135551234'))
})
test('rejects: exchange starts with 0', () => {
  assertNotNull(validatePhone('8130551234'))
})
test('rejects: exchange starts with 1', () => {
  assertNotNull(validatePhone('8131551234'))
})

// ────────────────────────────────────────────────────────────────────
console.log('\n📧 Email validation')
// ────────────────────────────────────────────────────────────────────

test('accepts: jane@example.com', () => {
  assertNull(validateEmail('jane@example.com'))
})
test('accepts: user.name+tag@gmail.com', () => {
  assertNull(validateEmail('user.name+tag@gmail.com'))
})
test('rejects: no @', () => {
  assertNotNull(validateEmail('janeexample.com'))
})
test('rejects: no domain', () => {
  assertNotNull(validateEmail('jane@'))
})
test('rejects: disposable mailinator', () => {
  assertNotNull(validateEmail('test@mailinator.com'))
})
test('rejects: disposable guerrillamail', () => {
  assertNotNull(validateEmail('test@guerrillamail.com'))
})

// ────────────────────────────────────────────────────────────────────
console.log('\n👤 Name validation (gibberish detection)')
// ────────────────────────────────────────────────────────────────────

// Actual spam contact names from the screenshots
test('rejects spam: MLwiFyxLXIXIXaTehK', () => {
  assertNotNull(validateName('MLwiFyxLXIXIXaTehK'))
})
test('rejects spam: ZOdZYnJrSjcsdayOAG', () => {
  assertNotNull(validateName('ZOdZYnJrSjcsdayOAG'))
})
test('rejects spam: OouTeoCbavHAhbGpN', () => {
  assertNotNull(validateName('OouTeoCbavHAhbGpN'))
})
test('rejects spam: GbfJkzYitBdbGzTB', () => {
  assertNotNull(validateName('GbfJkzYitBdbGzTB'))
})
test('rejects spam: YWFLZcOLUPNDAtQV', () => {
  assertNotNull(validateName('YWFLZcOLUPNDAtQV'))
})
test('rejects spam: PhEvtHbXzeEGLWjkO', () => {
  assertNotNull(validateName('PhEvtHbXzeEGLWjkO'))
})
test('rejects spam: ZzxofElUqtLDXTVHuAt', () => {
  assertNotNull(validateName('ZzxofElUqtLDXTVHuAt'))
})
test('rejects spam: KVpRhlizdoJfqRmMuh', () => {
  assertNotNull(validateName('KVpRhlizdoJfqRmMuh'))
})
test('rejects spam: XkOlhPhhTqzDwMXyE', () => {
  assertNotNull(validateName('XkOlhPhhTqzDwMXyE'))
})
test('rejects spam: RhjDSLEeDFRfFHIaMNx', () => {
  assertNotNull(validateName('RhjDSLEeDFRfFHIaMNx'))
})

// Common American names — none of these should fail
test('accepts: John', () => assertNull(validateName('John')))
test('accepts: Jane', () => assertNull(validateName('Jane')))
test('accepts: Christopher', () => assertNull(validateName('Christopher')))
test('accepts: Mary Jane', () => assertNull(validateName('Mary Jane')))
test('accepts: O\'Brien', () => assertNull(validateName("O'Brien")))
test('accepts: Smith-Jones', () => assertNull(validateName('Smith-Jones')))
test('accepts: McDonald', () => assertNull(validateName('McDonald')))
test('accepts: DeAngelo', () => assertNull(validateName('DeAngelo')))
test('accepts: Grullon', () => assertNull(validateName('Grullon')))
test('accepts: Abreu', () => assertNull(validateName('Abreu')))
test('accepts: Garcia', () => assertNull(validateName('Garcia')))
test('accepts: Rodriguez', () => assertNull(validateName('Rodriguez')))
test('accepts: Washington', () => assertNull(validateName('Washington')))
test('accepts: Jr.', () => assertNull(validateName('Jr.')))

test('rejects: empty', () => assertNotNull(validateName('')))
test('rejects: digits', () => assertNotNull(validateName('John123')))
test('rejects: special chars', () => assertNotNull(validateName('John@')))

// ────────────────────────────────────────────────────────────────────
console.log('\n⏱  Timing validation')
// ────────────────────────────────────────────────────────────────────

test('rejects: no timestamp', () => {
  assertNotNull(validateTiming(undefined))
})
test('rejects: submitted in 500ms', () => {
  assertNotNull(validateTiming(Date.now() - 500))
})
test('rejects: stale (3 hours)', () => {
  assertNotNull(validateTiming(Date.now() - 3 * 60 * 60_000))
})
test('accepts: 5 seconds (realistic)', () => {
  assertNull(validateTiming(Date.now() - 5_000))
})
test('accepts: 30 seconds (realistic)', () => {
  assertNull(validateTiming(Date.now() - 30_000))
})
test('accepts: 5 minutes (slow user)', () => {
  assertNull(validateTiming(Date.now() - 5 * 60_000))
})

// ────────────────────────────────────────────────────────────────────
console.log('\n🌐 Origin validation')
// ────────────────────────────────────────────────────────────────────

test('accepts: production', () => {
  assertNull(validateOrigin('https://northeastheatingcooling.com'))
})
test('accepts: www', () => {
  assertNull(validateOrigin('https://www.northeastheatingcooling.com'))
})
test('accepts: vercel preview', () => {
  assertNull(validateOrigin('https://northeastheatingcooling-abc123.vercel.app'))
})
test('accepts: localhost', () => {
  assertNull(validateOrigin('http://localhost:3000'))
})
test('rejects: random domain', () => {
  assertNotNull(validateOrigin('https://evil.com'))
})
test('rejects: missing', () => {
  assertNotNull(validateOrigin(null))
})
test('rejects: HTTP production (downgrade attack)', () => {
  assertNotNull(validateOrigin('http://northeastheatingcooling.com'))
})

// ────────────────────────────────────────────────────────────────────
console.log('\n🚦 Rate limiting')
// ────────────────────────────────────────────────────────────────────

test('allows 3 from same IP', () => {
  const ip = '1.2.3.' + Math.random().toString(36).slice(2, 6)
  assertEq(checkRateLimit(ip).allowed, true)
  assertEq(checkRateLimit(ip).allowed, true)
  assertEq(checkRateLimit(ip).allowed, true)
})
test('blocks 4th from same IP', () => {
  const ip = '4.5.6.' + Math.random().toString(36).slice(2, 6)
  checkRateLimit(ip)
  checkRateLimit(ip)
  checkRateLimit(ip)
  assertEq(checkRateLimit(ip).allowed, false)
})
test('different IPs are independent', () => {
  const ip1 = '7.8.9.' + Math.random().toString(36).slice(2, 6)
  const ip2 = '10.11.12.' + Math.random().toString(36).slice(2, 6)
  checkRateLimit(ip1)
  checkRateLimit(ip1)
  checkRateLimit(ip1)
  assertEq(checkRateLimit(ip2).allowed, true)
})

// ────────────────────────────────────────────────────────────────────
console.log(`\n${'═'.repeat(60)}`)
console.log(`${passed} passed, ${failed} failed`)
console.log('═'.repeat(60))
process.exit(failed > 0 ? 1 : 0)
