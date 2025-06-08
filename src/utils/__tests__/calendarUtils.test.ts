import {
  getMoonPhase,
  getLeapYearType,
  isLeapYear,
  convertMoonPhaseToIndex,
} from "../calendarUtils";

describe("Calendar Utilities", () => {
  describe("getMoonPhase", () => {
    describe("Hammer 1372 DR", () => {
      const year = 1372;
      const month = 1; // Hammer

      test("Day 1 should be Full Moon", () => {
        expect(getMoonPhase(year, month, 1)).toBe(1);
      });

      test("Days 2-7 should be Waning Gibbous", () => {
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(4);
        expect(getMoonPhase(year, month, 5)).toBe(2);
        expect(getMoonPhase(year, month, 6)).toBe(3);
        expect(getMoonPhase(year, month, 7)).toBe(4);
      });

      test("Day 8 should be Last Quarter", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Days 9-15 should be Waning Crescent", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
        expect(getMoonPhase(year, month, 15)).toBe(6);
      });

      test("Day 16 should be New Moon", () => {
        expect(getMoonPhase(year, month, 16)).toBe(9);
      });

      test("Days 17-22 should be Waxing Crescent", () => {
        expect(getMoonPhase(year, month, 17)).toBe(10);
        expect(getMoonPhase(year, month, 18)).toBe(11);
        expect(getMoonPhase(year, month, 19)).toBe(12);
        expect(getMoonPhase(year, month, 20)).toBe(10);
        expect(getMoonPhase(year, month, 21)).toBe(11);
        expect(getMoonPhase(year, month, 22)).toBe(12);
      });

      test("Day 23 should be First Quarter", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Days 24-30 should be Waxing Gibbous", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(14);
      });

      test("Midwinter (Day 31) should be Waxing Gibbous", () => {
        expect(getMoonPhase(year, month, 31)).toBe(15);
      });
    });

    describe("Alturiak 1372 DR", () => {
      const year = 1372;
      const month = 2; // Alturiak

      test("Day 1 should be Full Moon", () => {
        expect(getMoonPhase(year, month, 1)).toBe(1);
      });

      test("Days 2-7 should be Waning Gibbous", () => {
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(4);
        expect(getMoonPhase(year, month, 5)).toBe(2);
        expect(getMoonPhase(year, month, 6)).toBe(3);
        expect(getMoonPhase(year, month, 7)).toBe(4);
      });

      test("Day 8 should be Last Quarter", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Days 9-14 should be Waning Crescent", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
      });

      test("Day 15 should be New Moon", () => {
        expect(getMoonPhase(year, month, 15)).toBe(9);
      });

      test("Days 16-22 should be Waxing Crescent", () => {
        expect(getMoonPhase(year, month, 16)).toBe(10);
        expect(getMoonPhase(year, month, 17)).toBe(11);
        expect(getMoonPhase(year, month, 18)).toBe(12);
        expect(getMoonPhase(year, month, 19)).toBe(10);
        expect(getMoonPhase(year, month, 20)).toBe(11);
        expect(getMoonPhase(year, month, 21)).toBe(12);
        expect(getMoonPhase(year, month, 22)).toBe(10);
      });

      test("Day 23 should be First Quarter", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Days 24-29 should be Waxing Gibbous", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
      });

      test("Day 30 should be Full Moon", () => {
        expect(getMoonPhase(year, month, 30)).toBe(1);
      });
    });

    describe("Special cases", () => {
      test("Shieldmeet (Day 32 after Flamerule in leap years)", () => {
        expect(getMoonPhase(1372, 7, 32)).toBe(16); // 1372 is a leap year
        expect(getMoonPhase(1373, 7, 32)).toBeUndefined(); // 1373 is not a leap year
      });

      test("Non-existent days should return undefined", () => {
        expect(getMoonPhase(1372, 1, 32)).toBeUndefined(); // No day 32 in Hammer
        expect(getMoonPhase(1372, 3, 31)).toBeUndefined(); // No day 31 in Ches
      });
    });
  });

  describe("convertMoonPhaseToIndex", () => {
    test("should convert moon phases to correct indices", () => {
      expect(convertMoonPhaseToIndex(9)).toBe(0); // New Moon
      expect(convertMoonPhaseToIndex(10)).toBe(1); // Waxing Crescent
      expect(convertMoonPhaseToIndex(13)).toBe(2); // First Quarter
      expect(convertMoonPhaseToIndex(14)).toBe(3); // Waxing Gibbous
      expect(convertMoonPhaseToIndex(1)).toBe(4); // Full Moon
      expect(convertMoonPhaseToIndex(2)).toBe(5); // Waning Gibbous
      expect(convertMoonPhaseToIndex(5)).toBe(6); // Last Quarter
      expect(convertMoonPhaseToIndex(6)).toBe(7); // Waning Crescent
    });

    test("should handle undefined input", () => {
      // @ts-expect-error - Testing undefined input
      expect(convertMoonPhaseToIndex(undefined)).toBeUndefined();
    });
  });

  describe("getLeapYearType", () => {
    test("should correctly identify leap year types", () => {
      expect(getLeapYearType(1372)).toBe(1); // Type 1 leap year
      expect(getLeapYearType(1373)).toBe(2); // Type 2
      expect(getLeapYearType(1374)).toBe(3); // Type 3
      expect(getLeapYearType(1375)).toBe(4); // Type 4
    });
  });

  describe("isLeapYear", () => {
    test("should correctly identify leap years", () => {
      expect(isLeapYear(1372)).toBe(true);
      expect(isLeapYear(1373)).toBe(false);
      expect(isLeapYear(1374)).toBe(false);
      expect(isLeapYear(1375)).toBe(false);
      expect(isLeapYear(1376)).toBe(true);
    });
  });
});
