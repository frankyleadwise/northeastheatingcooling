/**
 * Single source of truth for Google review stats — FOR THIS SITE.
 *
 * Update REVIEW_COUNT here whenever the Google Business Profile total
 * changes — every page (visible copy + JSON-LD schema) reads from this
 * one constant, so the number can never drift out of sync WITHIN this site.
 *
 * It still drifts against the LeadWise platform, which now reads Chris's
 * live count from his workspace (Aug 4 2026): this site is a separate
 * Vercel project and cannot see that data without a deliberate fetch.
 * Until that's wired, this constant has to be bumped by hand.
 *
 * Last verified against the live Google listing: 59 reviews, 5.0 average
 * (Aug 4 2026, confirmed in the LeadWise workspace after a connector refresh).
 */
export const REVIEW_COUNT = 59
export const REVIEW_RATING = '5.0'

/** The count as a string, for JSON-LD schema reviewCount fields. */
export const REVIEW_COUNT_STR = String(REVIEW_COUNT)
