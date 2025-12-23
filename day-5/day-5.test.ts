import { expect, test } from "bun:test";
import { run as part1 } from "./part-1.ts";
import { run as part2 } from "./part-2.ts";
import { SIMPLE_INPUT, MAIN_INPUT } from "../utils/constants.ts";

test('day-5 part 1, with simple input', async () => {
    const result = await part1(SIMPLE_INPUT)
    expect(result).toBe(3)
})

test('day-5 part 1, with main input', async () => {
    const result = await part1(MAIN_INPUT)
    expect(result).toBe(848)
})

test('day-5 part 2, with simple input', async () => {
    const result = await part2(SIMPLE_INPUT)
    expect(result).toBe(14)
})


test('day-5 part 2, with main input', async () => {
    const result = await part2(MAIN_INPUT)
    expect(result).toBe(334714395325710)
})
