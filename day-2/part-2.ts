function getCommonDivisors(n: number): number[] {
    let divisors: number[] = []
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            divisors.push(i)
        }
    }
    return divisors
}

function checkRepeatingCharsFormingString(str: string): number {
    let ranges = str.split(',')
    let sum = 0
    for (let range of ranges) {
        let [startStr, endStr] = range.split('-')
        let start = Number(startStr)
        let end = Number(endStr)
        for (let i = 0; i <= (end - start); i++) {
            let strNum = String(start + i)
            // find common divisors of length of strNum
            let len = strNum.length
            let divisors = getCommonDivisors(len)
            /*
              Loop over the divisors and divide the string with the divider. See if those parts are equal. If yes, add that total string to my sum and continue the process. 
            */
            for (let div of divisors) {
                let segment = strNum.slice(0, div)
                let repeated = segment.repeat(len / div)
                if (repeated === strNum) {
                    sum += Number(strNum)
                    break
                }
            }
        }
    }
    return sum
}

async function run(filePath: string) {
    const samplePath = new URL(filePath, import.meta.url).pathname;
    const inputStr = await Bun.file(samplePath).text();
    return checkRepeatingCharsFormingString(inputStr)
}

export {run}