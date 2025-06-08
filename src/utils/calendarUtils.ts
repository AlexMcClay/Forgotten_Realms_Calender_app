/**
 * Calendar utility functions for the Forgotten Realms calendar
 */

/**
 * Determines the leap year type based on the year
 * @param year The year to check
 * @returns A number from 1-4 representing the leap year type
 */
export function getLeapYearType(year: number): number {
  // Exactly match the original code's leap year calculation
  // to avoid any floating-point precision issues
  const tYear = year * 0.25;
  const aYear = Math.round(tYear);
  const qYear = tYear - aYear;

  // Use the same logic as the original code
  if (Math.abs(tYear - aYear) < 0.0001) {
    return 1; // Type 1 leap year
  } else if (Math.abs(qYear - 0.25) < 0.0001) {
    return 2; // Type 2 leap year
  } else if (Math.abs(qYear + 0.5) < 0.0001) {
    return 3; // Type 3 leap year
  } else if (Math.abs(qYear + 0.25) < 0.0001) {
    return 4; // Type 4 leap year
  }

  return 0; // Not a leap year (should never happen)
}

/**
 * Checks if a given year is a leap year
 * @param year The year to check
 * @returns True if it's a leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  return getLeapYearType(year) === 1;
}

/**
 * Gets the moon phase for a specific day in a month and year
 * Based on the original calendar's moon phase pattern:
 * - Day 1: Full Moon (phase 1)
 * - Days 2-7: Waning Gibbous (phases 2-4)
 * - Day 8: Last Quarter (phase 5)
 * - Days 9-15: Waning Crescent (phases 6-8)
 * - Day 16: New Moon (phase 9)
 * - Days 17-22: Waxing Crescent (phases 10-12)
 * - Day 23: First Quarter (phase 13)
 * - Days 24-30/31: Waxing Gibbous (phases 14-16)
 */
export function getMoonPhase(
  year: number,
  month: number,
  day: number
): number | undefined {
  // Handle regular days (1-30)
  if (day === 1) return 1; // Full Moon
  if (day >= 2 && day <= 7) return 2 + ((day - 2) % 3); // Waning Gibbous
  if (day === 8) return 5; // Last Quarter
  if (day >= 9 && day <= 15) return 6 + ((day - 9) % 3); // Waning Crescent
  if (day === 16) return 9; // New Moon
  if (day >= 17 && day <= 22) return 10 + ((day - 17) % 3); // Waxing Crescent
  if (day === 23) return 13; // First Quarter
  if (day >= 24 && day <= 30) return 14 + ((day - 24) % 3); // Waxing Gibbous

  // Handle holidays (day 31)
  if (day === 31) return 15; // Waxing Gibbous

  // Handle Shieldmeet (day 32 in leap years)
  if (day === 32 && isLeapYear(year) && month === 7) return 16; // Almost Full Moon

  // Return undefined for non-existent days
  return undefined;
}

/**
 * Converts a moon phase number to a user-friendly index (0-7)
 * @param moonPhase The moon phase number (1-16)
 * @returns A number from 0-7 representing the moon phase
 */
export function convertMoonPhaseToIndex(moonPhase: number): number | undefined {
  if (typeof moonPhase === "undefined") return undefined;

  // Map moon phase numbers to indices based on the Moon_X.jpg images
  if (moonPhase === 9) return 0; // New Moon
  if (moonPhase >= 10 && moonPhase <= 12) return 1; // Waxing Crescent
  if (moonPhase === 13) return 2; // First Quarter
  if (moonPhase >= 14 && moonPhase <= 16) return 3; // Waxing Gibbous
  if (moonPhase === 1) return 4; // Full Moon
  if (moonPhase >= 2 && moonPhase <= 4) return 5; // Waning Gibbous
  if (moonPhase === 5) return 6; // Last Quarter
  if (moonPhase >= 6 && moonPhase <= 8) return 7; // Waning Crescent

  return undefined;
}

/**
 * Formats a year with "DR" suffix
 * @param year The year to format
 * @returns Formatted year string
 */
export function formatYear(year: number): string {
  return `${year} DR`;
}

/**
 * Gets the name of a year
 * @param year The year
 * @returns The name of the year
 */
export function getYearName(year: number): string {
  // This would normally look up the year name from a database
  // For now, we'll return a placeholder
  // In a real implementation, this would use the year.js data
  return `The Year of ${year}`;
}
