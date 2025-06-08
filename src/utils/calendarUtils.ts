/**
 * Calendar utility functions for the Forgotten Realms calendar
 */

interface MonthPhases {
  [day: number]: number;
}

interface YearPhases {
  [month: number]: MonthPhases;
}

interface MoonPhaseData {
  [year: number]: YearPhases;
}

// Moon phase data for years 1372-1375 DR
const moonPhaseData: MoonPhaseData = {
  1372: {
    // Hammer
    1: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3,
      7: 4, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous (including Midwinter)
    },
    // Alturiak
    2: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3,
      7: 4, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Ches
    3: {
      1: 14,
      2: 15,
      3: 16,
      4: 14,
      5: 15,
      6: 16,
      7: 14, // Waxing gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Tarsakh
    4: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3,
      7: 4, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12,
      23: 10, // Waxing crescent
      24: 13, // First quarter
      25: 14,
      26: 15,
      27: 16,
      28: 14,
      29: 15,
      30: 16,
      31: 15, // Waxing gibbous (including Greengrass)
    },
    // Mirtul
    5: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3,
      7: 4, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Kythorn
    6: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3,
      7: 4, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12,
      23: 10, // Waxing crescent
      24: 13, // First quarter
      25: 14,
      26: 15,
      27: 16,
      28: 14,
      29: 15,
      30: 16, // Waxing gibbous
    },
    // Flamerule
    7: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3,
      7: 4,
      8: 4, // Waning gibbous
      9: 5, // Last quarter
      10: 6,
      11: 7,
      12: 8,
      13: 6,
      14: 7,
      15: 8, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12,
      23: 10, // Waxing crescent
      24: 13, // First quarter
      25: 14,
      26: 15,
      27: 16,
      28: 14,
      29: 15,
      30: 16,
      31: 15,
      32: 16, // Waxing gibbous (including Midsummer and Shieldmeet)
    },
    // Eleasis
    8: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 3, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
    // Eleint
    9: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1,
      31: 2, // Waxing gibbous + Full moon + Highharvestide
    },
    // Marpenoth
    10: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
    // Uktar
    11: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1,
      31: 2, // Waxing gibbous + Full moon + Feast of the Moon
    },
    // Nightal
    12: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
  },
  1373: {
    // Hammer
    1: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1,
      31: 2, // Waxing gibbous + Full moon + Midwinter
    },
    // Alturiak
    2: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8, // Waning crescent
      14: 9, // New moon
      15: 10,
      16: 11,
      17: 12,
      18: 10,
      19: 11,
      20: 12,
      21: 10, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
    // Ches
    3: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
    // Tarsakh
    4: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 10,
      18: 11,
      19: 11,
      20: 12,
      21: 12,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 14,
      26: 14,
      27: 15,
      28: 15,
      29: 16,
      30: 16, // Waxing gibbous
      31: 16, // Waxing gibbous
    },
    // Mirtul
    5: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
    // Kythorn
    6: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Flamerule
    7: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Midsummer
    },
    // Eleasis
    8: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Eleint
    9: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Highharvestide
    },
    // Marpenoth
    10: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Uktar
    11: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Feast of the Moon
    },
    // Nightal
    12: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
  },
  1374: {
    // Hammer
    1: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1,
      31: 2, // Waxing gibbous + Full moon + Midwinter
    },
    // Alturiak
    2: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12, // Waxing crescent
      22: 13, // First quarter
      23: 14,
      24: 15,
      25: 16,
      26: 14,
      27: 15,
      28: 16,
      29: 14,
      30: 1, // Waxing gibbous + Full moon
    },
    // Ches
    3: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Tarsakh
    4: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Greengrass
    },
    // Mirtul
    5: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Kythorn
    6: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Flamerule
    7: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Midsummer
    },
    // Eleasis
    8: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Eleint
    9: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
      31: 16, // Waxing gibbous + Highharvestide
    },
    // Marpenoth
    10: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Uktar
    11: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
      31: 16, // Waxing gibbous
    },
    // Nightal
    12: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
  },
  1375: {
    // Hammer
    1: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Midwinter
    },
    // Alturiak
    2: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4, // Waning gibbous
      7: 5, // Last quarter
      8: 6,
      9: 7,
      10: 8,
      11: 6,
      12: 7,
      13: 8,
      14: 6, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Ches
    3: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Tarsakh
    4: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Greengrass
    },
    // Mirtul
    5: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 1, // Waxing gibbous + Full moon
    },
    // Kythorn
    6: {
      1: 2,
      2: 3,
      3: 4,
      4: 2,
      5: 3,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Flamerule
    7: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12,
      23: 10, // Waxing crescent
      24: 13, // First quarter
      25: 14,
      26: 15,
      27: 16,
      28: 14,
      29: 15,
      30: 16,
      31: 15, // Waxing gibbous + Midsummer
    },
    // Eleasis
    8: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Eleint
    9: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12,
      23: 10, // Waxing crescent
      24: 13, // First quarter
      25: 14,
      26: 15,
      27: 16,
      28: 14,
      29: 15,
      30: 16,
      31: 15, // Waxing gibbous + Highharvestide
    },
    // Marpenoth
    10: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
    },
    // Uktar
    11: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8,
      15: 6, // Waning crescent
      16: 9, // New moon
      17: 10,
      18: 11,
      19: 12,
      20: 10,
      21: 11,
      22: 12, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14,
      31: 15, // Waxing gibbous + Feast of the Moon
    },
    // Nightal
    12: {
      1: 1, // Full moon
      2: 2,
      3: 3,
      4: 4,
      5: 2,
      6: 4,
      7: 2, // Waning gibbous
      8: 5, // Last quarter
      9: 6,
      10: 7,
      11: 8,
      12: 6,
      13: 7,
      14: 8, // Waning crescent
      15: 9, // New moon
      16: 10,
      17: 11,
      18: 12,
      19: 10,
      20: 11,
      21: 12,
      22: 10, // Waxing crescent
      23: 13, // First quarter
      24: 14,
      25: 15,
      26: 16,
      27: 14,
      28: 15,
      29: 16,
      30: 14, // Waxing gibbous
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
    return moonPhaseData[cycleYear]?.[month]?.[day];
  }

  return moonPhaseData[year]?.[month]?.[day];
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
