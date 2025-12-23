import { expect, test } from "bun:test";
import { run as part1 } from "./part-1.ts";
import { SIMPLE_INPUT, MAIN_INPUT } from "../utils/constants.ts";

test('day-6 part 1, with simple input', async () => {
    const result = await part1(SIMPLE_INPUT)
    expect(result).toBe(4277556)
})

test('day-6 part 1, with main input', async () => {
    const result = await part1(MAIN_INPUT)
    expect(result).toBe(566783568154733)
})