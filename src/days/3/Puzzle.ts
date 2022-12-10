import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {

  lowerBaseCode = "a".charCodeAt(0);

  private toNum(x: string): number {
    let ret = 0;
    for (const c of Array.from(x)) {
      ret *= 26;
      ret += (c.charCodeAt(0) - this.lowerBaseCode);
    }
    return ret;
  }

  sumChars(chars: string[]): number {
    let totalPoint = 0;
    chars.forEach((chr) => {
      let tmpVal = this.toNum(chr);
      if (tmpVal < 0) {
        totalPoint += tmpVal + 59;
      } else {
        totalPoint += tmpVal + 1;
      }
    })

    return totalPoint;
  }

  public solveFirst(): string {
    const data = this.input.split("\r\n");
    let firstCommonChars = new Array();
    data.forEach((line) => {
      let firstPart = line.substring(0, line.length / 2)
      let secondPart = line.substring(line.length / 2)
      let firstPartSet = new Set(firstPart.split(""));
      firstPartSet.forEach((chr) => {
        if (secondPart.includes(chr)) {
          firstCommonChars.push(chr);
        }
      }
      )
    })
    return 'day 1 solution 1 ' + this.sumChars(firstCommonChars);
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    const data = this.input.split("\r\n");
    let secondCommonChars = new Array();
    for (let i = 0; i < data.length; i += 3) {
      let firtsLine: string = data[i];
      let secondLine = data[i + 1];
      let thirdLine = data[i + 2];

      let firstPartSet = new Set(firtsLine.split(""))

      firstPartSet.forEach((chr) => {
        if (secondLine.includes(chr) && thirdLine.includes(chr)) {
          secondCommonChars.push(chr);
        }
      })

    }
    return 'day 1 solution 2 ' + this.sumChars(secondCommonChars);
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
