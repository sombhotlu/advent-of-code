// write test caeses for day-2 parts 1
import { expect, test } from "bun:test";
import { run as part1 } from "./part-1.ts";
import { run as part2 } from "./part-2.ts";
import { run as part2Copilot } from "./part-2-copilot-solution.ts";
import { SIMPLE_INPUT, MAIN_INPUT } from "../utils/constants.ts";

test('day-2 part 1, with simple input', async () => {
    const result = await part1(SIMPLE_INPUT)
    expect(result).toBe(1227775554)
})

test('day-2 part 1, with main input', async () => {
    const result = await part1(MAIN_INPUT)
    expect(result).toBe(24157613387)
})


test('day-2 part 2, with simple input', async () => {
    const result = await part2(SIMPLE_INPUT)
    expect(result).toBe(4174379265)
})

test('day-2 part 2, with main input', async () => {
    const result = await part2(MAIN_INPUT)
    expect(result).toBe(33832678380)
})
