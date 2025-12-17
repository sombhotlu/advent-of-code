import { expect, test } from "bun:test";
import { run } from "./day-1.ts";
import { SIMPLE_INPUT, MAIN_INPUT } from "../utils/constants.ts";


test('day-1, with simple input', async () => {
    const result = await run(SIMPLE_INPUT)
    expect(result).toBe(6)
})

test('day-1, with main input', async () => {
    const result = await run(MAIN_INPUT)
    expect(result).toBe(6223)
})


