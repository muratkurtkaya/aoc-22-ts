import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const data = this.input.split('\r\n');
    let maxCal = 0;
    let currCals = 0;
    data.forEach(line => {
      if (line !== '') {
        currCals += Number(line);
        currCals > maxCal && (maxCal = currCals);
      } else {
        currCals = 0;
      }
    })

    return `day 1 solution 1 ${maxCal}`;
  }
  public solveSecond(): string {
    const data = this.input.split('\r\n');
    let currCals = 0;
    const totalCals: number[] = [];

    data.forEach(line => {
      if (line != "") {
        currCals += Number(line);
      } else {
        totalCals.push(currCals);
        currCals = 0;
      }
    })

    totalCals.sort((a, b) => b - a);
    const sum = totalCals.slice(0, 3).reduce((a, b) => a + b, 0);

    return `day 1 solution 2 ${sum}`;
  }

  public getFirstExpectedResult(): string {
    return 'day 1 solution 1';
  }
  public getSecondExpectedResult(): string {
    return 'day 1 solution 2';
  }
}
