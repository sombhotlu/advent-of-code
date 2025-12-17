const inputStr = await Bun.file('./day-1/input.txt').text()

function count(params: string[]) {
    let num = 50
    let count = 0

    for (const dial of params) {
        if (!dial) continue

        const dir = dial[0]
        const n = Number(dial.slice(1))
        if (!n) continue

        const delta = (dir === 'L' ? -n : n)
        const start = num
        const end = start + delta

        // count how many multiples of 100 lie strictly between start and end (inclusive of end)
        const a = Math.min(start, end)
        const b = Math.max(start, end)
        count += Math.floor(b / 100) - Math.floor(a / 100)

        // normalize position into 1..100 (treat 0 as 100 to match original behavior)
        let wrapped = ((end % 100) + 100) % 100
        if (wrapped === 0) wrapped = 100
        num = wrapped
    }

    return count
}

console.log(count(inputStr.split(/\r?\n/)))

export { }
