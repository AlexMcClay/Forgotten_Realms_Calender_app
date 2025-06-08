/**
 * Calendar utility functions for the Forgotten Realms calendar
 */

interface MonthPhases {
  fullMoonDays: number[]; // Days with phase 1
  lastQuarterDays: number[]; // Days with phase 5
  newMoonDays: number[]; // Days with phase 9
  firstQuarterDays: number[]; // Days with phase 13
}

interface YearPhases {
  [month: number]: MonthPhases;
}

interface MoonPhaseData {
  [year: number]: YearPhases;
}

// Moon phase ranges and their corresponding image numbers
const MOON_PHASES = {
  FULL_MOON: 1,
  WANING_GIBBOUS: { start: 2, end: 4 },
  LAST_QUARTER: 5,
  WANING_CRESCENT: { start: 6, end: 8 },
  NEW_MOON: 9,
  WAXING_CRESCENT: { start: 10, end: 12 },
  FIRST_QUARTER: 13,
  WAXING_GIBBOUS: { start: 14, end: 16 },
} as const;

// Moon phase data for years 1372-1375 DR
const moonPhaseData: MoonPhaseData = {
  1372: {
    // Hammer
    1: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Alturiak
    2: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Ches
    3: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Tarsakh
    4: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [24],
    },
    // Mirtul
    5: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Kythorn
    6: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [24],
    },
    // Flamerule
    7: {
      fullMoonDays: [1],
      lastQuarterDays: [9],
      newMoonDays: [16],
      firstQuarterDays: [24],
    },
    // Eleasis
    8: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
    // Eleint
    9: {
      fullMoonDays: [30],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Marpenoth
    10: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
    // Uktar
    11: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Nightal
    12: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
  },
  1373: {
    // Hammer
    1: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Alturiak
    2: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [14],
      firstQuarterDays: [22],
    },
    // Ches
    3: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
    // Tarsakh
    4: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Mirtul
    5: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
    // Kythorn
    6: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Flamerule
    7: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Eleasis
    8: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
    // Eleint
    9: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Marpenoth
    10: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Uktar
    11: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Nightal
    12: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
  },
  1374: {
    // Hammer
    1: {
      fullMoonDays: [30],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Alturiak
    2: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [22],
    },
    // Ches
    3: {
      fullMoonDays: [30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Tarsakh
    4: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Mirtul
    5: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Kythorn
    6: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Flamerule
    7: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Eleasis
    8: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Eleint
    9: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Marpenoth
    10: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Uktar
    11: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Nightal
    12: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
  },
  1375: {
    // Hammer
    1: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Alturiak
    2: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [7],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Ches
    3: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Tarsakh
    4: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Mirtul
    5: {
      fullMoonDays: [1, 30],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Kythorn
    6: {
      fullMoonDays: [],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Flamerule
    7: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [24],
    },
    // Eleasis
    8: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Eleint
    9: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [24],
    },
    // Marpenoth
    10: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
    // Uktar
    11: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [16],
      firstQuarterDays: [23],
    },
    // Nightal
    12: {
      fullMoonDays: [1],
      lastQuarterDays: [8],
      newMoonDays: [15],
      firstQuarterDays: [23],
    },
  },
};

/**
 * Gets the moon phase for a specific day in a month and year
 * @param year The year (1372-1375 DR)
 * @param month The month (1-12)
 * @param day The day (1-32)
 * @returns A number from 1-16 representing the moon phase, or undefined for non-existent days
 */
export function getMoonPhase(
  year: number,
  month: number,
  day: number
): number | undefined {
  // Check if we have data for this year
  if (!moonPhaseData[year]) {
    // For years we don't have data for, fall back to the next cycle
    // (every 4 years the pattern repeats)
    const cycleYear = year - Math.floor((year - 1372) / 4) * 4;
    return getMoonPhase(cycleYear, month, day);
  }

  const monthData = moonPhaseData[year][month];
  if (!monthData) return undefined;

  // Check for full moon
  if (monthData.fullMoonDays.includes(day)) {
    return MOON_PHASES.FULL_MOON;
  }

  // Check for last quarter
  if (monthData.lastQuarterDays.includes(day)) {
    return MOON_PHASES.LAST_QUARTER;
  }

  // Check for new moon
  if (monthData.newMoonDays.includes(day)) {
    return MOON_PHASES.NEW_MOON;
  }

  // Check for first quarter
  if (monthData.firstQuarterDays.includes(day)) {
    return MOON_PHASES.FIRST_QUARTER;
  }

  // Get all phase transition days in order
  const transitions = [
    ...monthData.fullMoonDays.map((d) => ({ day: d, type: "full" })),
    ...monthData.lastQuarterDays.map((d) => ({ day: d, type: "last" })),
    ...monthData.newMoonDays.map((d) => ({ day: d, type: "new" })),
    ...monthData.firstQuarterDays.map((d) => ({ day: d, type: "first" })),
  ].sort((a, b) => a.day - b.day);

  // Find the phases before and after the given day
  const prevTransition = transitions.filter((t) => t.day <= day).pop();
  const nextTransition = transitions.find((t) => t.day > day);

  // If we don't have a previous transition and the month doesn't start with a full moon,
  // assume we're starting with waning gibbous
  if (!prevTransition) {
    if (nextTransition && nextTransition.type === "last") {
      const daysToNext = nextTransition.day - day;
      const totalDays = nextTransition.day;
      const progress = 1 - daysToNext / totalDays;
      const range =
        MOON_PHASES.WANING_GIBBOUS.end - MOON_PHASES.WANING_GIBBOUS.start;
      return Math.round(MOON_PHASES.WANING_GIBBOUS.start + progress * range);
    }
    return undefined;
  }

  // If we don't have a next transition, handle end of month cases
  if (!nextTransition) {
    // If the last transition was a first quarter, interpolate waxing gibbous
    if (prevTransition.type === "first") {
      const daysFromPrev = day - prevTransition.day;
      const totalDays = 30 - prevTransition.day; // Assume standard month length
      const progress = daysFromPrev / totalDays;
      const range =
        MOON_PHASES.WAXING_GIBBOUS.end - MOON_PHASES.WAXING_GIBBOUS.start;
      return Math.min(
        16, // Clamp to maximum moon phase
        Math.round(MOON_PHASES.WAXING_GIBBOUS.start + progress * range)
      );
    }
    // If the last transition was a full moon, assume remaining days are waxing gibbous
    if (prevTransition.type === "full") {
      return MOON_PHASES.WAXING_GIBBOUS.end; // Return maximum waxing gibbous (16)
    }
    return undefined;
  }

  // Calculate progress between transitions
  const totalDays = nextTransition.day - prevTransition.day;
  const daysFromPrev = day - prevTransition.day;
  const progress = daysFromPrev / totalDays;

  // Helper function to interpolate between phases
  const interpolatePhase = (start: number, end: number, progress: number) => {
    const range = end - start;
    return Math.min(16, Math.round(start + progress * range));
  };

  // Handle transitions between major phases
  if (prevTransition.type === "full" && nextTransition.type === "last") {
    // Waning gibbous
    return interpolatePhase(
      MOON_PHASES.WANING_GIBBOUS.start,
      MOON_PHASES.WANING_GIBBOUS.end,
      progress
    );
  }

  if (prevTransition.type === "last" && nextTransition.type === "new") {
    // Waning crescent
    return interpolatePhase(
      MOON_PHASES.WANING_CRESCENT.start,
      MOON_PHASES.WANING_CRESCENT.end,
      progress
    );
  }

  if (prevTransition.type === "new" && nextTransition.type === "first") {
    // Waxing crescent
    return interpolatePhase(
      MOON_PHASES.WAXING_CRESCENT.start,
      MOON_PHASES.WAXING_CRESCENT.end,
      progress
    );
  }

  if (prevTransition.type === "first" && nextTransition.type === "full") {
    // Waxing gibbous
    return interpolatePhase(
      MOON_PHASES.WAXING_GIBBOUS.start,
      MOON_PHASES.WAXING_GIBBOUS.end,
      progress
    );
  }

  return undefined;
}

/**
 * Checks if a given year is a leap year
 * @param year The year to check
 * @returns True if it's a leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  return year % 4 === 0;
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
  return `The Year of ${year}`;
}
