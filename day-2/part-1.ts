function checkRepeatingCharsFormingString(str: string): number {
    let ranges = str.split(',')
    let sum = 0
    for (let range of ranges) {
        let [startStr, endStr] = range.split('-')
        let start = Number(startStr)
        let end = Number(endStr)
        for (let i = 0; i <= (end - start); i++) {
            let strNum = String(start + i)
            // split strNum from the middle and check if both halves are repeating chars
            let len = strNum.length
            if(len % 2 !== 0) continue; // only even length numbers can have repeating halves
            let mid = Math.floor(len / 2)
            let firstHalf = strNum.slice(0, mid)
            let secondHalf = strNum.slice(mid)
            if (firstHalf && secondHalf && firstHalf === secondHalf) {
                sum += Number(strNum)
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

export {run }