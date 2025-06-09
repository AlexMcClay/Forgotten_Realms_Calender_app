# Forgotten Realms Calendar App

A modern Next.js implementation of the classic Wizards of the Coast Forgotten Realms Calendar tool from 2005.

## Features

- Full calendar system for the Forgotten Realms setting
- Accurate moon phase calculations for Selûne
- Support for leap years and special days
- Historical and personal notes
- Modern, responsive interface built with Next.js and Tailwind CSS

## Documentation

- [Moon Phases Guide](./docs/MOON_PHASES.md) - Detailed explanation of moon phases with images

## Technical Details

### Stack

- Next.js with TypeScript
- Tailwind CSS for styling
- Jest for testing

### Key Components

- `calendarUtils.ts` - Core calendar calculations and moon phase logic
- `MoonPhaseDisplay.tsx` - Moon phase visualization component
- `CalendarGrid.tsx` - Main calendar display
- `CalendarControls.tsx` - Navigation and control interface

### Moon Phase System

The calendar uses a sophisticated moon phase system that accurately tracks the phases of Selûne throughout the year. See the [Moon Phases Guide](./docs/MOON_PHASES.md) for detailed information about:

- How moon phases are calculated
- What each phase number means
- How phases are displayed
- The relationship between phase numbers and visual representations

## Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

## Credits

Original 2005 Calendar Tool © Wizards of the Coast, Inc., a subsidiary of Hasbro, Inc.
Modern implementation by Alex McClay

## License

This project is a fan-made tool and is not affiliated with or endorsed by Wizards of the Coast.
All Forgotten Realms content and materials are © Wizards of the Coast.
