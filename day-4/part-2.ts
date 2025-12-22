
function count(input: string[][]): number {
	let col = input[0].length
	let row = input.length
	let count = 0
    let locations: [number, number][] = []
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
            let adjCount = 0

            // Check all 8 directions for '@'
            if (input[i][j] === '.') continue;
            
			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					if (x === 0 && y === 0) continue // Skip the current cell
					let newRow = i + x
					let newCol = j + y
					if (newRow >= 0 && newRow < row && newCol >= 0 && newCol < col) {
						if (input[newRow][newCol] === '@') {
                            adjCount++
                            
						}
					}
				}
            }
            
            if (adjCount < 4 && input[i][j] === '@') {
                count++
                locations.push([i,j] as [number, number])
            }
		}
    }

    for (let [i, j] of locations) {
        input[i][j] = '.'   
    }
    
    return count
}

async function run(filePath: string) {
    const samplePath = new URL(filePath, import.meta.url).pathname;
    const inputStr = await Bun.file(samplePath).text();
    let matrix = inputStr.split('\n').map(line => line.split(''));

    let globalCount;
    let currentCount = 0;
    while (globalCount !== currentCount) {
        globalCount = currentCount;
        currentCount += count(matrix);
    }

    return currentCount;
}

console.log(await run('simple-input.txt'))

export { run };