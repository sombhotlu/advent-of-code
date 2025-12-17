
Advent of Code — Solutions (2025)
=================================

Purpose
-------
- This repository contains my Advent of Code solutions organized by day. Each day is a small TypeScript program that reads puzzle input and prints answers for part 1 and part 2.

Repository Layout
-----------------
- Top-level folders: one folder per day (e.g., `day-1`, `2024/day-2`).
- Each day folder contains:
	- `day-X.ts` — primary solution file for that day (export or run both parts)
	- `day-X.test.ts` — tests that exercise the solution (optional)
	- `input.txt` — the full puzzle input (DO NOT commit personal inputs to public repos)
	- `simple-input.txt` — a small/example input used for quick testing

Filenames & Conventions
-----------------------
- Day folder: `day-N` or `YYYY/day-N` for other years.
- Solution file: `day-N.ts` where `N` is the day number.
- Test file (optional): `day-N.test.ts` for automated tests.
- Main input: `input.txt` — real puzzle input used when submitting answers.
- Example input: `simple-input.txt` — small input for development and tests.

How To Run
----------
Prerequisites: Bun, and a TypeScript toolchain if running TypeScript directly.

Run a single day's solution (using Bun):

```bash
bun test ./day-1/day-1.test.ts
```

Tips for Development
--------------------
- Use `simple-input.txt` while developing to get fast feedback.
- Ensure your solution accepts input from `input.txt` (or from stdin) so runners and tests can use it consistently.
- Export helper functions so tests can import and validate behavior without reading files.

Git & Personal Inputs
---------------------
- Do not commit your personal puzzle input to public repositories. Add a `.gitignore` entry for any files you want to keep private, for example:

```gitignore
# ignore personal puzzle inputs
**/input.txt
```

- If you prefer to keep committed example inputs, only commit `simple-input.txt` and keep full inputs ignored locally.

Contributing
------------
- This repo is primarily a personal coding exercise. Feel free to open issues or suggest improvements.

License
-------
- Use as you like; no warranty provided.
