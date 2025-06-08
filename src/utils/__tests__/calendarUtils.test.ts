import {
  getLeapYearType,
  getMoonPhase,
  convertMoonPhaseToIndex,
  isLeapYear,
} from "../calendarUtils";

describe("Calendar Utilities", () => {
  describe("getLeapYearType", () => {
    it("should return the correct leap year type for 1368 DR", () => {
      const year = 1368;
      const result = getLeapYearType(year);
      expect(result).toBe(1); // Type 1 leap year
    });

    it("should return the correct leap year type for 1369 DR", () => {
      const year = 1369;
      const result = getLeapYearType(year);
      expect(result).not.toBe(1); // Not a Type 1 leap year
    });
  });

  describe("isLeapYear", () => {
    it("should return true for leap years", () => {
      expect(isLeapYear(1368)).toBe(true);
      expect(isLeapYear(1372)).toBe(true);
      expect(isLeapYear(1376)).toBe(true);
    });

    it("should return false for non-leap years", () => {
      expect(isLeapYear(1369)).toBe(false);
      expect(isLeapYear(1370)).toBe(false);
      expect(isLeapYear(1371)).toBe(false);
    });
  });

  describe("getMoonPhase", () => {
    describe("Hammer 1368 DR Moon Phases", () => {
      const year = 1368;
      const month = 1; // Hammer

      it("should show full moon on day 1", () => {
        const result = getMoonPhase(year, month, 1);
        expect(result).toBe(8); // Full moon
        expect(convertMoonPhaseToIndex(result)).toBe(4); // Full moon index
      });

      it("should show last quarter on day 8", () => {
        const result = getMoonPhase(year, month, 8);
        expect(result).toBe(11); // Last quarter
        expect(convertMoonPhaseToIndex(result)).toBe(6); // Last quarter index
      });

      it("should show new moon on day 16", () => {
        const result = getMoonPhase(year, month, 16);
        expect(result).toBe(0); // New moon
        expect(convertMoonPhaseToIndex(result)).toBe(0); // New moon index
      });

      it("should show first quarter on day 23", () => {
        const result = getMoonPhase(year, month, 23);
        expect(result).toBe(3); // First quarter
        expect(convertMoonPhaseToIndex(result)).toBe(2); // First quarter index
      });

      it("should show correct phase progression through the month", () => {
        // Days 1-7: Full Moon to Last Quarter
        expect(getMoonPhase(year, month, 1)).toBe(8); // Full moon
        expect(getMoonPhase(year, month, 4)).toBe(9); // Waning gibbous
        expect(getMoonPhase(year, month, 7)).toBe(10); // Waning gibbous

        // Days 8-15: Last Quarter to New Moon
        expect(getMoonPhase(year, month, 8)).toBe(11); // Last quarter
        expect(getMoonPhase(year, month, 12)).toBe(13); // Waning crescent
        expect(getMoonPhase(year, month, 15)).toBe(15); // Waning crescent

        // Days 16-22: New Moon to First Quarter
        expect(getMoonPhase(year, month, 16)).toBe(0); // New moon
        expect(getMoonPhase(year, month, 19)).toBe(1); // Waxing crescent
        expect(getMoonPhase(year, month, 22)).toBe(2); // Waxing crescent

        // Days 23-30: First Quarter to Full Moon
        expect(getMoonPhase(year, month, 23)).toBe(3); // First quarter
        expect(getMoonPhase(year, month, 26)).toBe(5); // Waxing gibbous
        expect(getMoonPhase(year, month, 30)).toBe(7); // Almost full
      });
    });
  });

  describe("convertMoonPhaseToIndex", () => {
    it("should convert moon phase numbers to user-friendly indices", () => {
      // New Moon
      expect(convertMoonPhaseToIndex(0)).toBe(0);

      // Waxing Crescent
      expect(convertMoonPhaseToIndex(1)).toBe(1);
      expect(convertMoonPhaseToIndex(2)).toBe(1);

      // First Quarter
      expect(convertMoonPhaseToIndex(3)).toBe(2);
      expect(convertMoonPhaseToIndex(4)).toBe(2);

      // Waxing Gibbous
      expect(convertMoonPhaseToIndex(5)).toBe(3);
      expect(convertMoonPhaseToIndex(6)).toBe(3);

      // Full Moon
      expect(convertMoonPhaseToIndex(7)).toBe(4);
      expect(convertMoonPhaseToIndex(8)).toBe(4);

      // Waning Gibbous
      expect(convertMoonPhaseToIndex(9)).toBe(5);
      expect(convertMoonPhaseToIndex(10)).toBe(5);

      // Last Quarter
      expect(convertMoonPhaseToIndex(11)).toBe(6);
      expect(convertMoonPhaseToIndex(12)).toBe(6);

      // Waning Crescent
      expect(convertMoonPhaseToIndex(13)).toBe(7);
      expect(convertMoonPhaseToIndex(16)).toBe(7);
    });
  });

  describe("Full Moon on 1 Hammer 1368 DR", () => {
    it("should be a full moon on 1 Hammer 1368 DR", () => {
      const year = 1368;
      const month = 1; // Hammer
      const day = 1;

      const moonPhase = getMoonPhase(year, month, day);
      const moonPhaseIndex = convertMoonPhaseToIndex(moonPhase);

      // Phase 8 converts to index 4 (full moon)
      expect(moonPhaseIndex).toBe(4);
    });

    it("should return correct phases for mid-month in 1368 DR", () => {
      const year = 1368;
      const month = 1; // Hammer

      // Day 8 should be last quarter (phase 11)
      const day8Phase = getMoonPhase(year, month, 8);
      expect(day8Phase).toBe(11);

      // Day 24 should be waxing gibbous (phase 5)
      const day24Phase = getMoonPhase(year, month, 24);
      expect(day24Phase).toBe(5);

      // Verify the phase indices
      expect(convertMoonPhaseToIndex(day8Phase)).toBe(6); // Last quarter
      expect(convertMoonPhaseToIndex(day24Phase)).toBe(3); // Waxing gibbous
    });
  });
});
