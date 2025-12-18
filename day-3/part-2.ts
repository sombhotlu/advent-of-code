function getMaxValueAndIndex([maxVal, maxIdx], curr, idx): [number, number] {
    return  (curr > maxVal ? [curr, idx] : [maxVal, maxIdx])
}


function greatestNumbers(nums: string[]): number { 
    let digitsToFind = 12
    let sum = 0
    let prevMaxIdx = -1
    for (let strNum of nums) {
        let currSum = 0 
        let numsArray = strNum.split('').map(ch => Number(ch))
        let numsArrayLength = numsArray.length
        for (let i = digitsToFind - 1; i >= 0; i--) {
            let [nextMaxNum, nextMaxIdx] = numsArray.slice(prevMaxIdx + 1, numsArrayLength - i).reduce(getMaxValueAndIndex, [Number.NEGATIVE_INFINITY, -1])
            currSum = (currSum*10 + nextMaxNum)
            // Update prevMaxIdx to the index of the found max number, adjusted for the slice offset
            prevMaxIdx += (nextMaxIdx + 1)
        }
        sum += currSum
        prevMaxIdx = -1
    }
    
    return sum        
}

async function run(filePath: string) {
    const samplePath = new URL(filePath, import.meta.url).pathname;
    const inputStr = await Bun.file(samplePath).text();
    const lines = inputStr.split('\n')
    return greatestNumbers(lines)
}


export {run}