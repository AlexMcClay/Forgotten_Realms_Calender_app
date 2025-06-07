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
    it("should return the correct moon phase for 1 Hammer 1368 DR", () => {
      const year = 1368;
      const month = 1; // Hammer
      const day = 1;
      const result = getMoonPhase(year, month, day);

      // The original code indicates this should be a full moon (phase 8)
      expect(result).toBe(8);
    });

    it("should return a new moon for 16 Hammer 1368 DR", () => {
      const year = 1368;
      const month = 1; // Hammer
      const day = 16;
      const result = getMoonPhase(year, month, day);

      // Should be phase 0 (new moon)
      expect(result).toBe(0);

      const moonPhaseIndex = convertMoonPhaseToIndex(result);
      // Should be index 0 (new moon)
      expect(moonPhaseIndex).toBe(0);
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

      // Day 8 should be waning crescent (phase 15)
      const day8Phase = getMoonPhase(year, month, 8);
      expect(day8Phase).toBe(15);

      // Day 24 should be waxing gibbous (phase 7)
      const day24Phase = getMoonPhase(year, month, 24);
      expect(day24Phase).toBe(7);

      // Verify the phase indices
      expect(convertMoonPhaseToIndex(day8Phase)).toBe(7); // Waning crescent
      expect(convertMoonPhaseToIndex(day24Phase)).toBe(4); // Full moon
    });
  });
});
