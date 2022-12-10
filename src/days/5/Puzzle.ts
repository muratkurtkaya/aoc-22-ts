import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {

  data: string[];
  orders: string[];
  stackLines: string[][];

  private createStackLines(): string[][] {
    const lines: string[] = this.data[0].split("\r\n");

    const stackLines: string[][] = [[]];
    for (let i = 0; i < 8; i++) { //todo: hardcoded?
      stackLines.push([]);
    }

    for (let i = 0; i < lines.length - 1; i++) {
      for (let k = 0; k < lines[i].length; k++) {
        if (lines[i][k] === "[") {
          let index = k / 4;
          // console.log(i, index, k + 1)
          stackLines[index].unshift(lines[i][k + 1])
        }
      }
    }

    return stackLines;
  }

  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    this.data = this.input.split("\r\n\r\n");
    this.stackLines = this.createStackLines();
    this.orders = this.data[1].split("\r\n");
    this.orders.forEach(order => {
      let numRegex = /\d+/g;
      let [moveCount, from, to] = order.match(numRegex); //unpacking orders

      for (let count = 0; count < Number(moveCount); count++) {
        this.stackLines[Number(to) - 1].push(this.stackLines[Number(from) - 1].pop())
      }
    })

    let result = "";
    for (let i = 0; i < this.stackLines.length; i++) {
      result += this.stackLines[i][this.stackLines[i].length - 1]
    }
    return 'day 1 solution 1 ' + result;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    this.stackLines = this.createStackLines();
    // console.log(this.stackLines)

    this.orders.forEach(order => {
      let numRegex = /\d+/g;
      let [moveCount, from, to] = order.match(numRegex); //unpacking orders
      const blocks: string[] = [];

      for (let count = 0; count < Number(moveCount); count++) {
        blocks.push(this.stackLines[Number(from) - 1].pop());
      }

      while (blocks.length !== 0) {
        this.stackLines[Number(to) - 1].push(blocks.pop())
      }

    })
    
    let result = "";
    for (let i = 0; i < this.stackLines.length; i++) {
      result += this.stackLines[i][this.stackLines[i].length - 1]
    }
    return 'day 1 solution 2 ' + result;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
