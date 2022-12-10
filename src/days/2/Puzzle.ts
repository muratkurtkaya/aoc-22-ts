import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  selectPoints: Record<string, number> = {
    "X": 1,
    "Y": 2,
    "Z": 3,

  }

  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    const data = this.input.split("\r\n");
    let totalPoints = 0;
    data.forEach((line) => {
      let tmpPoints = 0;

      let arr = line.split(" ");
      let en = arr[0];
      let me = arr[1];

      tmpPoints += this.selectPoints[me];

      if ((en === "A" && me === "X") || (en === "B" && me === "Y") || (en === "C" && me === "Z")) {
        tmpPoints += 3;
      } else if ((en === "A" && me === "Y") || (en === "B" && me === "Z") || (en === "C" && me === "X")) {
        tmpPoints += 6;
      }

      totalPoints += tmpPoints;
    })
    return 'day 1 solution 1 ' + totalPoints;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    const data = this.input.split("\r\n");
    let totalPoints = 0;
    const sol2Points: Record<string, number> = {
      "A": 1,
      "B": 2,
      "C": 3,
      "X": 0,
      "Y": 3,
      "Z": 6,
    }

    data.forEach((line) => {
      let tmpPoints = 0;

      let arr = line.split(" ");
      let en = arr[0];
      let me = arr[1];

      tmpPoints += sol2Points[me];


      if (tmpPoints === 0) { //lose
        if (en === "A") {
          tmpPoints += sol2Points["C"]
        } else if (en === "B") {
          tmpPoints += sol2Points["A"]
        } else {
          tmpPoints += sol2Points["B"]

        }
      } else if (tmpPoints === 3) { //draw
        tmpPoints += sol2Points[en];
      } else { //win
        if (en === "A") {
          tmpPoints += sol2Points["B"]
        } else if (en === "B") {
          tmpPoints += sol2Points["C"]
        } else {
          tmpPoints += sol2Points["A"]

        }
      }

      totalPoints += tmpPoints;
    })

    return 'day 1 solution 2 ' + totalPoints;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
