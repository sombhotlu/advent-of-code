function add(lines, operations): number {
    let sum = 0
    console.log(lines, operations);
    
    for (let column = 0; column < lines[0].length; column++) {
        let totalColVal
        for (let row = 0; row < lines.length; row++) {
            let digit = parseInt(lines[row][column], 10)
            if (isNaN(digit)) continue
            if (totalColVal == undefined) {
                totalColVal = digit
                continue
            }
            
            console.log(digit, operations[column]);
            

            switch (operations[column]) {
                case '+':
                    totalColVal += digit
                    break
                case '-':
                    totalColVal -= digit
                    break
                case '*':
                    totalColVal *= digit
                    break
                default:
                    totalColVal += digit
            }
            console.log(`Column ${column} total: ${totalColVal}`);
        }
        sum += totalColVal
    }

    return sum

}

async function run(filePath: string): Promise<number> {
    const samplePath = new URL(filePath, import.meta.url).pathname;
    const inputStr = await Bun.file(samplePath).text();
    let lines = inputStr.split('\n').map(line => line.trim().split(' ').filter(Boolean));
    return add(lines.slice(0, -1), lines.at(-1));
} 

export {run}