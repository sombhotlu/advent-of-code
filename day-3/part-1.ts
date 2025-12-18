function getMaxValueAndIndex([maxVal, maxIdx], curr, idx): [number, number] {
    return  (curr > maxVal ? [curr, idx] : [maxVal, maxIdx])
}


function greatestNumbers(nums: string[]): number { 
    let sum = 0
    for (let strNum of nums) {
        let numsArray = strNum.split('').map(ch => Number(ch))
        let [firstMaxNum, firstMaxIdx] = numsArray.slice(0,-1).reduce(getMaxValueAndIndex, [Number.NEGATIVE_INFINITY, -1])
        let [secondMaxNum] = numsArray.slice(firstMaxIdx + 1).reduce(getMaxValueAndIndex, [Number.NEGATIVE_INFINITY, -1])
        sum += (firstMaxNum *10 + secondMaxNum)
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