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

  // For debugging
  console.log(
    `Year: ${year}, tYear: ${tYear}, aYear: ${aYear}, qYear: ${qYear}`
  );

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
 * @param year The year
 * @param month The month (1-12)
 * @param day The day (1-30)
 * @returns A number from 0-16 representing the moon phase
 */
export function getMoonPhase(year: number, month: number, day: number): number {
  // These arrays contain the moon phase data for different leap year types
  // The original code had these as global arrays, but we're encapsulating them here

  // Leap year moon phases (Type 1)
  // Each month follows the pattern:
  // Days 1-7: Full Moon to Last Quarter (phases 8-10)
  // Days 8-15: Last Quarter to New Moon (phases 11-15)
  // Days 16-22: New Moon to First Quarter (phases 0-2)
  // Days 23-30: First Quarter to Full Moon (phases 3-7)
  const monthPattern = [
    // Days 1-7: Full Moon to Last Quarter
    0, 8, 8, 9, 9, 10, 10, 10,
    // Days 8-15: Last Quarter to New Moon
    11, 12, 12, 13, 13, 14, 15, 15,
    // Days 16-22: New Moon to First Quarter
    0, 0, 1, 1, 2, 2, 3,
    // Days 23-30: First Quarter to Full Moon
    3, 4, 5, 5, 6, 6, 7, 7,
    // Extra days for array indexing (to match original array length)
    7, 8,
  ];

  // Create the full array by repeating the pattern for each month
  const leapYearMoonPhases = Array(12)
    .fill(null)
    .flatMap(() => monthPattern);

  // Non-leap year moon phases (Type 2)
  const nonLeapYearMoonPhases2 = [
    0, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12,
    13, 14, 14, 15, 15, 16, 16, 1, 2, 0, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8,
    9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 1, 0, 0, 2,
    2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14,
    14, 15, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8,
    9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15, 16, 16, 16, 0, 1, 2,
    2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14,
    15, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9,
    10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3,
    3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14,
    15, 15, 16, 16, 16, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10,
    11, 11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4,
    4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 14, 15,
    15, 16, 16, 16, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11,
    11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4, 4, 5,
    6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15, 16,
    16, 16, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12,
    12, 13, 14, 14, 15, 15, 15, 16, 16, 1, 0, 0,
  ];

  // Non-leap year moon phases (Type 3)
  const nonLeapYearMoonPhases3 = [
    0, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12,
    13, 14, 14, 15, 15, 16, 16, 1, 2, 0, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8,
    8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 1, 0, 0, 2, 2,
    3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14,
    14, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9,
    10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15, 16, 16, 16, 0, 1, 2, 2, 3,
    4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15,
    15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10,
    11, 11, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 0, 0, 1, 2, 2, 3, 3, 4,
    4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 15,
    15, 16, 16, 16, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11,
    11, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 0, 0, 1, 2, 2, 3, 3, 4, 4,
    5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15,
    16, 16, 16, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11,
    11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 1, 0, 0, 2, 2, 3, 3, 3, 4, 4, 5, 6,
    6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15, 16, 16,
    16, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12,
    12, 13, 14, 14, 15, 15, 16, 16, 1, 0, 0,
  ];

  // Non-leap year moon phases (Type 4)
  const nonLeapYearMoonPhases4 = [
    0, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12,
    13, 14, 14, 14, 15, 15, 16, 16, 16, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7,
    8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 16, 1, 0, 0, 2,
    2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13,
    14, 14, 15, 15, 15, 16, 16, 0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8,
    8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15, 16, 16, 16, 0, 1, 2,
    2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14,
    14, 15, 15, 16, 16, 1, 0, 0, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9,
    10, 10, 11, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 0, 0, 1, 2, 2, 3, 3,
    4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15,
    15, 15, 16, 16, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10,
    11, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 0, 0, 1, 2, 2, 3, 3, 4, 4,
    5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15, 15,
    15, 16, 16, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11,
    11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6,
    6, 7, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 14, 15, 15, 16, 16,
    16, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12,
    12, 13, 14, 14, 15, 15, 15, 16, 16, 0, 0,
  ];

  // Determine which moon phase array to use based on leap year type
  const leapYearType = getLeapYearType(year);
  let moonPhaseArray;

  switch (leapYearType) {
    case 1:
      moonPhaseArray = leapYearMoonPhases;
      break;
    case 2:
      moonPhaseArray = nonLeapYearMoonPhases2;
      break;
    case 3:
      moonPhaseArray = nonLeapYearMoonPhases3;
      break;
    case 4:
      moonPhaseArray = nonLeapYearMoonPhases4;
      break;
    default:
      moonPhaseArray = leapYearMoonPhases; // Default to leap year phases
  }

  // Calculate the index in the moon phase array
  const index = (month - 1) * 32 + day;

  // Return the moon phase
  return moonPhaseArray[index];
}

/**
 * Converts a moon phase number to a more user-friendly index (0-7)
 * @param moonPhase The moon phase number (0-16)
 * @returns A number from 0-7 representing the moon phase
 */
export function convertMoonPhaseToIndex(moonPhase: number): number {
  // The original code used a complex mapping system
  // We'll simplify it to map the 0-16 range to 0-7
  if (moonPhase >= 0 && moonPhase <= 16) {
    // Map the 0-16 range to 0-7
    // 0 -> 0 (New Moon)
    // 1-2 -> 1 (Waxing Crescent)
    // 3-4 -> 2 (First Quarter)
    // 5-6 -> 3 (Waxing Gibbous)
    // 7-8 -> 4 (Full Moon)
    // 9-10 -> 5 (Waning Gibbous)
    // 11-12 -> 6 (Last Quarter)
    // 13-16 -> 7 (Waning Crescent)

    if (moonPhase === 0) return 0;
    if (moonPhase <= 2) return 1;
    if (moonPhase <= 4) return 2;
    if (moonPhase <= 6) return 3;
    if (moonPhase <= 8) return 4;
    if (moonPhase <= 10) return 5;
    if (moonPhase <= 12) return 6;
    return 7;
  }

  return 0; // Default to new moon
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
