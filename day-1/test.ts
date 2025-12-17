import { expect, test } from "bun:test";
import { run as part1 } from "./part-1.ts";
import { run as part2 } from "./part-2.ts";
import { SIMPLE_INPUT, MAIN_INPUT } from "../utils/constants.ts";


test.only('day-1 part 1, with simple input', async () => {
    const result = await part1(SIMPLE_INPUT)
    expect(result).toBe(3)
})

test('day-1 part 2, with simple input', async () => {
    const result = await part2(SIMPLE_INPUT)
    expect(result).toBe(6)
})

test('day-1 part 2, with main input', async () => {
    const result = await part2(MAIN_INPUT)
    expect(result).toBe(6223)
})


