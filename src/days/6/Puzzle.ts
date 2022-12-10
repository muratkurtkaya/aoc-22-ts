import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    const data: string = this.input;
    let scanCount = 0;
    const repeatRegex = /(.).*\1/;
    const MARKER_COUNT = 4; //how many character should scan
    for (let i = 0; i < data.length - MARKER_COUNT - 1; i++) {
      const candidateMarket = data.slice(i, i + MARKER_COUNT);
      if (!candidateMarket.match(repeatRegex)) {
        scanCount = i + MARKER_COUNT;
        break;
      }
    }

    return 'day 1 solution 1 ' + scanCount;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    const data: string = this.input;
    let scanCount = 0;
    const repeatRegex = /(.).*\1/;
    const MARKER_COUNT = 14; //how many character should scan
    for (let i = 0; i < data.length - MARKER_COUNT - 1; i++) {
      const candidateMarket = data.slice(i, i + MARKER_COUNT);
      if (!candidateMarket.match(repeatRegex)) {
        scanCount = i + MARKER_COUNT;
        break;
      }
    }

    return 'day 1 solution 2 ' + scanCount;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
