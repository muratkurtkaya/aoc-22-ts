import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {

  data : number[][];

  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    this.data = this.input.split("\r\n").map(line => {
      let pair: string[] = line.split(",");
      let pairsNum: number[] = pair[0].split("-").map(val => { return parseInt(val) });
      pair[1].split("-").forEach(val => { pairsNum.push(parseInt(val)) });
      return pairsNum;
    });

    let fullyContainCount = 0;

    this.data.forEach(pair => {
      if ((pair[0] <= pair[2] && pair[1] >= pair[3]) || (pair[2] <= pair[0] && pair[3] >= pair[1])) {
        fullyContainCount++;
      }

    })
    return 'day 1 solution 1 ' + fullyContainCount;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2

    let overlapsCount = 0;
    this.data.forEach(pair => {
      let x1 = pair[0];
      let x2 = pair[1];
      let y1 = pair[2];
      let y2 = pair[3];

      if (x1 <= y1 && x2 >= y1) {
        overlapsCount++;
      } else if (y1 <= x1 && y2 >= x1) {
        overlapsCount++;
      }

    })

    return 'day 1 solution 2 ' + overlapsCount;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
