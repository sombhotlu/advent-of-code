/**
 * Processes an array of string ranges, merges overlapping or adjacent ranges, and returns a count.
 *
 * The function expects each line to represent a range in the format "start-end".
 * It splits the input at the first empty line, parses the ranges, sorts them, and merges any that overlap or are directly adjacent.
 *
 * The `+ 1` in `lastRange[1] + 1` ensures that ranges which are directly adjacent (e.g., [1, 5] and [6, 10]) are also merged,
 * treating them as a continuous block rather than separate ranges.
 *
 * @param lines - Array of strings, each representing a range in the format "start-end".
 * @returns A number representing the result after merging ranges (implementation incomplete).
 */
function checkCount(lines: string[]): number {
    let ranges: [number, number][] = []
    let emptyLineIndex
    // split the lines from the the empty line
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) {
            emptyLineIndex = i
            break;
        }
        let [startStr, endStr] = line.split('-')
        let start = parseInt(startStr)
        let end = parseInt(endStr)
        ranges.push([start, end])
    }

    console.log(ranges); 

    // sort the ranges based on the start value
    ranges.sort((a, b) => a[0] - b[0])

    // merge overlapping ranges
    let mergedRanges: [number, number][] = []
    for (let range of ranges) {
        if (mergedRanges.length === 0) {
            mergedRanges.push(range)
        } else {
            let lastRange = mergedRanges[mergedRanges.length - 1]
            if (range[0] <= lastRange[1] + 1) {
                // overlap, merge the ranges
                lastRange[1] = Math.max(lastRange[1], range[1])
            } else {
                mergedRanges.push(range)
            }
        }
    }

    console.log("Merged ranges ", mergedRanges,emptyLineIndex);
    

    if (emptyLineIndex === undefined)
        return 0

    console.log(lines);
    

    let ids = lines.slice(emptyLineIndex+1).map(strNum => parseInt(strNum))

    console.log("IDs", ids);
    
    // Loop over the IDs and check if the ID is present in the range. If yes, add to the main count. 
    let count = 0
    for (let id of ids) {
        for (let range of mergedRanges) {
            if (id >= range[0] && id <= range[1]) {
                count++
            }
        }
    }
        
    return count
}

async function run(filePath: string): Promise<number> {
    const samplePath = new URL(filePath, import.meta.url).pathname;
    const inputStr = await Bun.file(samplePath).text();
    let lines = inputStr.split('\n')
    return checkCount(lines)
} 

export {run}