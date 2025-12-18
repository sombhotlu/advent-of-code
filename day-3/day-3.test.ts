import { expect, test } from "bun:test";
import { run as part1 } from "./part-1.ts";
import { run as part2 } from "./part-2.ts";
import { SIMPLE_INPUT, MAIN_INPUT } from "../utils/constants.ts";

test('day-3, with simple input', async () => {
    const result = await part1(SIMPLE_INPUT)
    expect(result).toBe(357)
})

test('day-3, with simple input', async () => {
    const result = await part2(SIMPLE_INPUT)
    expect(result).toBe(3121910778619)
})

test('day-3, with main input (part 1)', async () => {
    const result = await part1(MAIN_INPUT)
    expect(result).toBe(17085)
})

test('day-3, with main input (part 2)', async () => {
    const result = await part2(MAIN_INPUT)
    expect(result).toBe(169408143086082)
})
