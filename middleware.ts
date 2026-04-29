import { NextRequest, NextResponse } from 'next/server'

/**
 * Parasite SEO Cleanup Middleware
 * ────────────────────────────────
 * The previous WordPress install on Hostinger was compromised and used as a
 * spam redirect host. Google indexed dozens of short-form URLs like
 * /T1Fn, /DpIP, /aLy2, /SX5B, /sKad, /SLg1, /YScz, /6pU2 — each redirecting
 * to unrelated spam content (fake pawn shops, cosplay listings, hair salons,
 * pirated movies, etc.). The WordPress install has been deleted, but Google
 * is still crawling these URLs and bleeding crawl signal into spam keywords,
 * which damages the site's topical authority.
 *
 * This middleware intercepts those exact patterns and any 4-character
 * mixed-case alphanumeric paths (the format the spam used) and returns
 * HTTP 410 Gone. Per Google's documentation, 410 is a stronger signal
 * than 404 for permanent removal — Google reduces re-crawl frequency
 * faster on 410 responses and removes them from the index sooner.
 *
 * The pattern matches:
 *   /T1Fn, /DpIP, /aLy2, /SX5B, /sKad, /SLg1, /YScz, /6pU2 — known spam paths
 *   /[A-Za-z0-9]{4} where the path contains both upper and lower case
 *     (legitimate site routes are slugs with hyphens or single segments,
 *      never short mixed-case opaque strings)
 *
 * Test cases:
 *   ✅ /T1Fn          → 410
 *   ✅ /DpIP          → 410
 *   ✅ /XyZ9          → 410 (matches mixed-case 4-char pattern)
 *   ❌ /tampa         → passes (lowercase, semantic slug)
 *   ❌ /about         → passes (lowercase, semantic slug)
 *   ❌ /services      → passes
 *   ❌ /api/anything  → passes (API route)
 *   ❌ /_next/...     → passes (Next.js internals)
 */

// Known spam paths from the old WP hack (case-sensitive)
const KNOWN_PARASITE_PATHS = new Set([
  '/T1Fn',
  '/DpIP',
  '/aLy2',
  '/SX5B',
  '/sKad',
  '/SLg1',
  '/YScz',
  '/6pU2',
])

// Mixed-case 4-character alphanumeric pattern (catches future spam variants)
const PARASITE_PATTERN = /^\/[A-Za-z0-9]{3,5}$/

function isParasiteUrl(pathname: string): boolean {
  if (KNOWN_PARASITE_PATHS.has(pathname)) {
    return true
  }
  // Catch-all: short opaque mixed-case paths that aren't legitimate slugs.
  // Legitimate slugs are lowercase with hyphens, never short mixed-case strings.
  if (PARASITE_PATTERN.test(pathname)) {
    const slug = pathname.slice(1)
    const hasUpper = /[A-Z]/.test(slug)
    const hasLower = /[a-z]/.test(slug)
    const hasDigit = /[0-9]/.test(slug)
    // Mixed case (upper + lower) OR mixed alphanumeric (letter + digit) = parasite
    if ((hasUpper && hasLower) || (hasLower && hasDigit) || (hasUpper && hasDigit)) {
      return true
    }
  }
  return false
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isParasiteUrl(pathname)) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>410 Gone — North East Heating &amp; Cooling</title>
<meta name="robots" content="noindex">
<style>body{font-family:system-ui,sans-serif;max-width:600px;margin:80px auto;padding:0 20px;color:#0f1620;line-height:1.6}h1{color:#c8330a}a{color:#c8330a}</style>
</head>
<body>
<h1>410 — This page is gone</h1>
<p>This URL is no longer part of our site. It was created by a compromised WordPress install that has since been removed.</p>
<p>You're probably looking for one of these instead:</p>
<ul>
<li><a href="https://northeastheatingcooling.com/">Tampa AC repair &amp; HVAC services</a></li>
<li><a href="https://northeastheatingcooling.com/services">All services</a></li>
<li><a href="https://northeastheatingcooling.com/contact">Contact us</a></li>
</ul>
<p>Or call us anytime at <a href="tel:8132916146">(813) 291-6146</a>.</p>
</body>
</html>`,
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=86400, immutable',
        },
      }
    )
  }

  return NextResponse.next()
}

// Limit middleware to root-level paths — skip _next, api, and static files
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes
     * - _next (Next.js internals)
     * - favicon, robots, sitemap, image files
     * - file paths (anything with a dot extension)
     */
    '/((?!api|_next/static|_next/image|favicon|robots|sitemap|.*\\.).*)',
  ],
}
