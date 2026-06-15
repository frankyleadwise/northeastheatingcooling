/**
 * Single source of truth for Google review stats.
 *
 * Update REVIEW_COUNT here whenever the Google Business Profile total
 * changes — every page (visible copy + JSON-LD schema) reads from this
 * one constant, so the number can never drift out of sync again.
 *
 * Last verified against the live Google listing: 52 reviews, 5.0 average.
 */
export const REVIEW_COUNT = 52
export const REVIEW_RATING = '5.0'

/** "52" as a string, for JSON-LD schema reviewCount fields. */
export const REVIEW_COUNT_STR = String(REVIEW_COUNT)
