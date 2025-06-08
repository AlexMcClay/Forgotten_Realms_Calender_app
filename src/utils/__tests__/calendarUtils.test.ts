import {
  getMoonPhase,
  isLeapYear,
  formatYear,
  getYearName,
} from "../calendarUtils";

describe("Calendar Utilities", () => {
  describe("1372 DR Moon Phases", () => {
    const year = 1372;

    describe("Hammer", () => {
      const month = 1;

      test("Full Moon (Day 1)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(1);
      });

      test("Waning Gibbous (Days 2-7)", () => {
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(4);
        expect(getMoonPhase(year, month, 5)).toBe(2);
        expect(getMoonPhase(year, month, 6)).toBe(3);
        expect(getMoonPhase(year, month, 7)).toBe(4);
      });

      test("Last Quarter (Day 8)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Waning Crescent (Days 9-15)", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
        expect(getMoonPhase(year, month, 15)).toBe(6);
      });

      test("New Moon (Day 16)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(9);
      });

      test("Waxing Crescent (Days 17-22)", () => {
        expect(getMoonPhase(year, month, 17)).toBe(10);
        expect(getMoonPhase(year, month, 18)).toBe(11);
        expect(getMoonPhase(year, month, 19)).toBe(12);
        expect(getMoonPhase(year, month, 20)).toBe(10);
        expect(getMoonPhase(year, month, 21)).toBe(11);
        expect(getMoonPhase(year, month, 22)).toBe(12);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous (Days 24-31)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(14);
        expect(getMoonPhase(year, month, 31)).toBe(15); // Midwinter
      });
    });

    describe("Alturiak", () => {
      const month = 2;

      test("Full Moon (Day 1)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(1);
      });

      test("Waning Gibbous (Days 2-7)", () => {
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(4);
        expect(getMoonPhase(year, month, 5)).toBe(2);
        expect(getMoonPhase(year, month, 6)).toBe(3);
        expect(getMoonPhase(year, month, 7)).toBe(4);
      });

      test("Last Quarter (Day 8)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Waning Crescent (Days 9-14)", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
      });

      test("New Moon (Day 15)", () => {
        expect(getMoonPhase(year, month, 15)).toBe(9);
      });

      test("Waxing Crescent (Days 16-22)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(10);
        expect(getMoonPhase(year, month, 17)).toBe(11);
        expect(getMoonPhase(year, month, 18)).toBe(12);
        expect(getMoonPhase(year, month, 19)).toBe(10);
        expect(getMoonPhase(year, month, 20)).toBe(11);
        expect(getMoonPhase(year, month, 21)).toBe(12);
        expect(getMoonPhase(year, month, 22)).toBe(10);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous and Full Moon (Days 24-30)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(1);
      });
    });

    describe("Special Cases", () => {
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

  describe("1373 DR Moon Phases", () => {
    const year = 1373;

    describe("Hammer", () => {
      const month = 1;

      test("Waning Gibbous (Days 1-6)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(2);
        expect(getMoonPhase(year, month, 2)).toBe(3);
        expect(getMoonPhase(year, month, 3)).toBe(4);
        expect(getMoonPhase(year, month, 4)).toBe(2);
        expect(getMoonPhase(year, month, 5)).toBe(3);
        expect(getMoonPhase(year, month, 6)).toBe(4);
      });

      test("Last Quarter (Day 7)", () => {
        expect(getMoonPhase(year, month, 7)).toBe(5);
      });

      test("Waning Crescent (Days 8-14)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(6);
        expect(getMoonPhase(year, month, 9)).toBe(7);
        expect(getMoonPhase(year, month, 10)).toBe(8);
        expect(getMoonPhase(year, month, 11)).toBe(6);
        expect(getMoonPhase(year, month, 12)).toBe(7);
        expect(getMoonPhase(year, month, 13)).toBe(8);
        expect(getMoonPhase(year, month, 14)).toBe(6);
      });

      test("New Moon (Day 15)", () => {
        expect(getMoonPhase(year, month, 15)).toBe(9);
      });

      test("Waxing Crescent (Days 16-22)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(10);
        expect(getMoonPhase(year, month, 17)).toBe(11);
        expect(getMoonPhase(year, month, 18)).toBe(12);
        expect(getMoonPhase(year, month, 19)).toBe(10);
        expect(getMoonPhase(year, month, 20)).toBe(11);
        expect(getMoonPhase(year, month, 21)).toBe(12);
        expect(getMoonPhase(year, month, 22)).toBe(10);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous and Full Moon (Days 24-31)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(1);
        expect(getMoonPhase(year, month, 31)).toBe(2); // Midwinter
      });
    });

    describe("Alturiak", () => {
      const month = 2;

      test("Waning Gibbous (Days 1-6)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(2);
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(3);
        expect(getMoonPhase(year, month, 5)).toBe(4);
        expect(getMoonPhase(year, month, 6)).toBe(4);
      });

      test("Last Quarter (Day 7)", () => {
        expect(getMoonPhase(year, month, 7)).toBe(5);
      });

      test("Waning Crescent (Days 8-13)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(6);
        expect(getMoonPhase(year, month, 9)).toBe(7);
        expect(getMoonPhase(year, month, 10)).toBe(8);
        expect(getMoonPhase(year, month, 11)).toBe(6);
        expect(getMoonPhase(year, month, 12)).toBe(7);
        expect(getMoonPhase(year, month, 13)).toBe(8);
      });

      test("New Moon (Day 14)", () => {
        expect(getMoonPhase(year, month, 14)).toBe(9);
      });

      test("Waxing Crescent (Days 15-21)", () => {
        expect(getMoonPhase(year, month, 15)).toBe(10);
        expect(getMoonPhase(year, month, 16)).toBe(11);
        expect(getMoonPhase(year, month, 17)).toBe(12);
        expect(getMoonPhase(year, month, 18)).toBe(10);
        expect(getMoonPhase(year, month, 19)).toBe(11);
        expect(getMoonPhase(year, month, 20)).toBe(12);
        expect(getMoonPhase(year, month, 21)).toBe(10);
      });

      test("First Quarter (Day 22)", () => {
        expect(getMoonPhase(year, month, 22)).toBe(13);
      });

      test("Waxing Gibbous and Full Moon (Days 23-30)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(14);
        expect(getMoonPhase(year, month, 24)).toBe(15);
        expect(getMoonPhase(year, month, 25)).toBe(16);
        expect(getMoonPhase(year, month, 26)).toBe(14);
        expect(getMoonPhase(year, month, 27)).toBe(15);
        expect(getMoonPhase(year, month, 28)).toBe(16);
        expect(getMoonPhase(year, month, 29)).toBe(14);
        expect(getMoonPhase(year, month, 30)).toBe(1);
      });
    });
  });

  describe("1374 DR Moon Phases", () => {
    const year = 1374;

    describe("Hammer", () => {
      const month = 1;

      test("Waning Gibbous (Days 1-7)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(2);
        expect(getMoonPhase(year, month, 2)).toBe(3);
        expect(getMoonPhase(year, month, 3)).toBe(4);
        expect(getMoonPhase(year, month, 4)).toBe(2);
        expect(getMoonPhase(year, month, 5)).toBe(3);
        expect(getMoonPhase(year, month, 6)).toBe(4);
        expect(getMoonPhase(year, month, 7)).toBe(2);
      });

      test("Last Quarter (Day 8)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Waning Crescent (Days 9-14)", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
      });

      test("New Moon (Day 15)", () => {
        expect(getMoonPhase(year, month, 15)).toBe(9);
      });

      test("Waxing Crescent (Days 16-22)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(10);
        expect(getMoonPhase(year, month, 17)).toBe(11);
        expect(getMoonPhase(year, month, 18)).toBe(12);
        expect(getMoonPhase(year, month, 19)).toBe(10);
        expect(getMoonPhase(year, month, 20)).toBe(11);
        expect(getMoonPhase(year, month, 21)).toBe(12);
        expect(getMoonPhase(year, month, 22)).toBe(10);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous and Full Moon (Days 24-31)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(1);
        expect(getMoonPhase(year, month, 31)).toBe(2); // Midwinter
      });
    });

    describe("Flamerule", () => {
      const month = 7;

      test("Full Moon (Day 1)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(1);
      });

      test("Waning Gibbous (Days 2-7)", () => {
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(4);
        expect(getMoonPhase(year, month, 5)).toBe(2);
        expect(getMoonPhase(year, month, 6)).toBe(4);
        expect(getMoonPhase(year, month, 7)).toBe(2);
      });

      test("Last Quarter (Day 8)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Waning Crescent (Days 9-15)", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
        expect(getMoonPhase(year, month, 15)).toBe(6);
      });

      test("New Moon (Day 16)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(9);
      });

      test("Waxing Crescent (Days 17-22)", () => {
        expect(getMoonPhase(year, month, 17)).toBe(10);
        expect(getMoonPhase(year, month, 18)).toBe(11);
        expect(getMoonPhase(year, month, 19)).toBe(12);
        expect(getMoonPhase(year, month, 20)).toBe(10);
        expect(getMoonPhase(year, month, 21)).toBe(11);
        expect(getMoonPhase(year, month, 22)).toBe(12);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous (Days 24-31)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(14);
        expect(getMoonPhase(year, month, 31)).toBe(15); // Midsummer
      });
    });
  });

  describe("1375 DR Moon Phases", () => {
    const year = 1375;

    describe("Hammer", () => {
      const month = 1;

      test("Waning Gibbous (Days 1-7)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(2);
        expect(getMoonPhase(year, month, 2)).toBe(3);
        expect(getMoonPhase(year, month, 3)).toBe(4);
        expect(getMoonPhase(year, month, 4)).toBe(2);
        expect(getMoonPhase(year, month, 5)).toBe(3);
        expect(getMoonPhase(year, month, 6)).toBe(4);
        expect(getMoonPhase(year, month, 7)).toBe(2);
      });

      test("Last Quarter (Day 8)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(5);
      });

      test("Waning Crescent (Days 9-14)", () => {
        expect(getMoonPhase(year, month, 9)).toBe(6);
        expect(getMoonPhase(year, month, 10)).toBe(7);
        expect(getMoonPhase(year, month, 11)).toBe(8);
        expect(getMoonPhase(year, month, 12)).toBe(6);
        expect(getMoonPhase(year, month, 13)).toBe(7);
        expect(getMoonPhase(year, month, 14)).toBe(8);
      });

      test("New Moon (Day 15)", () => {
        expect(getMoonPhase(year, month, 15)).toBe(9);
      });

      test("Waxing Crescent (Days 16-22)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(10);
        expect(getMoonPhase(year, month, 17)).toBe(11);
        expect(getMoonPhase(year, month, 18)).toBe(12);
        expect(getMoonPhase(year, month, 19)).toBe(10);
        expect(getMoonPhase(year, month, 20)).toBe(11);
        expect(getMoonPhase(year, month, 21)).toBe(12);
        expect(getMoonPhase(year, month, 22)).toBe(10);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous (Days 24-31)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(14);
        expect(getMoonPhase(year, month, 31)).toBe(15); // Midwinter
      });
    });

    describe("Alturiak", () => {
      const month = 2;

      test("Full Moon (Day 1)", () => {
        expect(getMoonPhase(year, month, 1)).toBe(1);
      });

      test("Waning Gibbous (Days 2-6)", () => {
        expect(getMoonPhase(year, month, 2)).toBe(2);
        expect(getMoonPhase(year, month, 3)).toBe(3);
        expect(getMoonPhase(year, month, 4)).toBe(4);
        expect(getMoonPhase(year, month, 5)).toBe(2);
        expect(getMoonPhase(year, month, 6)).toBe(4);
      });

      test("Last Quarter (Day 7)", () => {
        expect(getMoonPhase(year, month, 7)).toBe(5);
      });

      test("Waning Crescent (Days 8-14)", () => {
        expect(getMoonPhase(year, month, 8)).toBe(6);
        expect(getMoonPhase(year, month, 9)).toBe(7);
        expect(getMoonPhase(year, month, 10)).toBe(8);
        expect(getMoonPhase(year, month, 11)).toBe(6);
        expect(getMoonPhase(year, month, 12)).toBe(7);
        expect(getMoonPhase(year, month, 13)).toBe(8);
        expect(getMoonPhase(year, month, 14)).toBe(6);
      });

      test("New Moon (Day 15)", () => {
        expect(getMoonPhase(year, month, 15)).toBe(9);
      });

      test("Waxing Crescent (Days 16-22)", () => {
        expect(getMoonPhase(year, month, 16)).toBe(10);
        expect(getMoonPhase(year, month, 17)).toBe(11);
        expect(getMoonPhase(year, month, 18)).toBe(12);
        expect(getMoonPhase(year, month, 19)).toBe(10);
        expect(getMoonPhase(year, month, 20)).toBe(11);
        expect(getMoonPhase(year, month, 21)).toBe(12);
        expect(getMoonPhase(year, month, 22)).toBe(10);
      });

      test("First Quarter (Day 23)", () => {
        expect(getMoonPhase(year, month, 23)).toBe(13);
      });

      test("Waxing Gibbous and Full Moon (Days 24-30)", () => {
        expect(getMoonPhase(year, month, 24)).toBe(14);
        expect(getMoonPhase(year, month, 25)).toBe(15);
        expect(getMoonPhase(year, month, 26)).toBe(16);
        expect(getMoonPhase(year, month, 27)).toBe(14);
        expect(getMoonPhase(year, month, 28)).toBe(15);
        expect(getMoonPhase(year, month, 29)).toBe(16);
        expect(getMoonPhase(year, month, 30)).toBe(1);
      });
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

  describe("formatYear", () => {
    test("should format years with DR suffix", () => {
      expect(formatYear(1372)).toBe("1372 DR");
      expect(formatYear(1373)).toBe("1373 DR");
      expect(formatYear(1374)).toBe("1374 DR");
      expect(formatYear(1375)).toBe("1375 DR");
    });
  });

  describe("getYearName", () => {
    test("should return the name of the year", () => {
      expect(getYearName(1372)).toBe("The Year of 1372");
      expect(getYearName(1373)).toBe("The Year of 1373");
      expect(getYearName(1374)).toBe("The Year of 1374");
      expect(getYearName(1375)).toBe("The Year of 1375");
    });
  });
});
