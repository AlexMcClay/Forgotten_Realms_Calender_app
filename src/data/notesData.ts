import { Note } from "../types/calendar";

// Historical notes from the original app
export const HISTORICAL_NOTES: Note[] = [
  {
    id: "hp13720101",
    year: 1372,
    month: 1,
    day: 1,
    content:
      "For information on adding your own historic notes see the notes.txt file.",
  },
  {
    id: "hp137213X",
    year: 1372,
    month: 13, // Special month code for notes that show up in the master list but not on monthly calendar
    day: "X", // Special day code for notes that don't have a specific day
    content:
      "1372 Year of Wild Magic: By the midpoint of the year, several events have signaled a shift in the balance of power for all of Faerun.",
  },
];

// Personal notes from the original app
export const PERSONAL_NOTES: Note[] = [
  {
    id: "pp13720101",
    year: 1372,
    month: 1,
    day: 1,
    content:
      "For information on adding your own personal notes see the notes.txt file.",
  },
];

/**
 * Gets historical notes for a specific date
 * @param year The year
 * @param month The month (1-12)
 * @param day The day (1-30) or special day code
 * @returns Array of notes for the specified date
 */
export function getHistoricalNotes(
  year: number,
  month: number,
  day: number | string
): Note[] {
  return HISTORICAL_NOTES.filter(
    (note) =>
      note.year === year &&
      note.month === month &&
      (note.day === day || note.day === "X")
  );
}

/**
 * Gets personal notes for a specific date
 * @param year The year
 * @param month The month (1-12)
 * @param day The day (1-30) or special day code
 * @returns Array of notes for the specified date
 */
export function getPersonalNotes(
  year: number,
  month: number,
  day: number | string
): Note[] {
  return PERSONAL_NOTES.filter(
    (note) =>
      note.year === year &&
      note.month === month &&
      (note.day === day || note.day === "X")
  );
}

/**
 * Gets all notes for a specific date
 * @param year The year
 * @param month The month (1-12)
 * @param day The day (1-30) or special day code
 * @returns Array of all notes for the specified date
 */
export function getAllNotes(
  year: number,
  month: number,
  day: number | string
): Note[] {
  return [
    ...getHistoricalNotes(year, month, day),
    ...getPersonalNotes(year, month, day),
  ];
}

/**
 * Gets all notes for a specific year
 * @param year The year
 * @returns Array of all notes for the specified year
 */
export function getYearNotes(year: number): Note[] {
  return [
    ...HISTORICAL_NOTES.filter((note) => note.year === year),
    ...PERSONAL_NOTES.filter((note) => note.year === year),
  ];
}

/**
 * Adds a new historical note
 * @param note The note to add
 */
export function addHistoricalNote(note: Note): void {
  HISTORICAL_NOTES.push(note);
}

/**
 * Adds a new personal note
 * @param note The note to add
 */
export function addPersonalNote(note: Note): void {
  PERSONAL_NOTES.push(note);
}

/**
 * Generates a note ID based on the note type and date
 * @param isHistorical Whether the note is historical or personal
 * @param year The year
 * @param month The month (1-12)
 * @param day The day (1-30) or special day code
 * @returns A note ID string
 */
export function generateNoteId(
  isHistorical: boolean,
  year: number,
  month: number,
  day: number | string
): string {
  const prefix = isHistorical ? "hp" : "pp";
  const yearStr = year < 0 ? `n${Math.abs(year)}` : year.toString();
  const monthStr = month.toString().padStart(2, "0");
  const dayStr =
    typeof day === "number" ? day.toString().padStart(2, "0") : day;

  return `${prefix}${yearStr}${monthStr}${dayStr}`;
}
