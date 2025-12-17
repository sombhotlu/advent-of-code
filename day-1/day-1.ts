
function count(params) {
    let num = 50
    let prevNum
    let count = 0
    let char
    let digits
    let n

    for (let dial of params) {
        char = dial.substring(0, 1)
        digits = dial.slice(1)
        count += Math.floor(parseInt(digits) / 100)
        n = parseInt(dial.slice(1)) % 100
        if (!n) continue

        prevNum = num
        num +=  (char == 'L' ? -n : n)

        if (num % 100 == 0)
            count += 1   
        else if (num < 0 || num > 100) {
            if (prevNum % 100 != 0)
                count++
            // normalize negative to positive over dial
            num = (100 + num) % 100 
        }
    }

    return count
}


async function run(filePath: string) {
    const samplePath = new URL(filePath, import.meta.url).pathname;
    const inputStr = await Bun.file(samplePath).text()
    return count(inputStr.split('\n'))
}

export { run }