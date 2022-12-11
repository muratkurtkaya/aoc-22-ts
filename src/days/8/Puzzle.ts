import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {

  lines: string[];

  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    this.lines = this.input.split("\r\n")
    // console.log(this.lines)

    const trees: number[][] = [];
    let dim = this.lines.length;
    let treesCount = Array(dim).fill(0).map(() => Array(dim).fill(0));

    for (const line of this.lines) {
      let arr = [];
      for (const tree of line.split("")) {
        arr.push(parseInt(tree));
      }
      trees.push(arr);
    }

    for (let i = 0; i < dim; i++) {
      for (let k = 0; k < dim; k++) {
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          treesCount[i][k] = 1;
        }
      }
    }

    //left to right
    let maxTree: number = 0;
    for (let i = 0; i < dim; i++) {
      for (let k = 0; k < dim; k++) {
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          maxTree = trees[i][k];
          continue;
        }
        if (trees[i][k] > maxTree) {
          treesCount[i][k] = 1;
          maxTree = trees[i][k];
        }
      }
    }


    maxTree = 0;
    //right to left
    for (let i = 0; i < dim; i++) {
      for (let k = dim - 1; k > 0; k--) {
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          maxTree = trees[i][k];
          continue;
        }
        if (trees[i][k] > maxTree) {
          treesCount[i][k] = 1;
          maxTree = trees[i][k];
        }
      }
    }

    maxTree = 0;
    //down to up
    for (let i = 0; i < dim; i++) {
      for (let k = 0; k < dim; k++) {
        // console.log(trees[dim - k - 1][i]);
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          maxTree = trees[dim - k - 1][i];
          continue;
        }
        if (trees[dim - k - 1][i] > maxTree) {
          treesCount[dim - k - 1][i] = 1;
          maxTree = trees[dim - k - 1][i];
        }
      }
    }

    maxTree = 0;
    //up to down
    for (let i = 0; i < dim; i++) {
      for (let k = 0; k < dim; k++) {
        // console.log(trees[k][dim - i - 1]);
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          maxTree = trees[k][dim - i - 1];
          continue;
        }
        if (trees[k][dim - i - 1] > maxTree) {
          treesCount[k][dim - i - 1] = 1;
          maxTree = trees[k][dim - i - 1];
        }
      }
    }

    let sum = treesCount.reduce(function (a, b) { return a.concat(b) })
      .reduce(function (a, b) { return a + b })

    return 'day 1 solution 1 ' + sum;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    this.lines = this.input.split("\r\n")
    // console.log(this.lines)

    const trees: number[][] = [];
    let dim = this.lines.length;
    let treesCount = Array(dim).fill(0).map(() => Array(dim).fill(0));

    for (const line of this.lines) {
      let arr = [];
      for (const tree of line.split("")) {
        arr.push(parseInt(tree));
      }
      trees.push(arr);
    }

    for (let i = 0; i < dim; i++) {
      for (let k = 0; k < dim; k++) {
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          treesCount[i][k] = 1;
        }
      }
    }


    let [leftCount, rightCount, upCount, downCount, maxScore] = [0, 0, 0, 0, 0];

    for (let i = 0; i < dim; i++) {
      for (let k = 0; k < dim; k++) {
        if (i === 0 || i === dim - 1 || k === 0 || k === dim - 1) {
          //score at edge equal to 0.
          [leftCount, rightCount, upCount, downCount] = [0, 0, 0, 0];
          continue;
        }

        //for each three look at left,right,up and down.

        //look left
        for (let j = k - 1; j >= 0; j--) {
          let tmpTree = trees[i][j];
          let treeHouse = trees[i][k];
          if (treeHouse > tmpTree) {
            leftCount++;
          } else {
            leftCount++;
            break;
          }
        }

        //look right
        for (let j = k + 1; j < dim; j++) {
          let tmpTree = trees[i][j];
          let treeHouse = trees[i][k];
          if (treeHouse > tmpTree) {
            rightCount++;
          } else {
            rightCount++;
            break;
          }
        }

        //look up
        for (let j = i - 1; j >= 0; j--) {
          let tmpTree = trees[j][k];
          let treeHouse = trees[i][k];
          if (treeHouse > tmpTree) {
            upCount++;
          } else {
            upCount++;
            break;
          }
        }

        //look down
        for (let j = i + 1; j < dim; j++) {
          let tmpTree = trees[j][k];
          let treeHouse = trees[i][k];
          if (treeHouse > tmpTree) {
            downCount++;
          } else {
            downCount++;
            break;
          }
        }

        let tmpScore = leftCount * rightCount * downCount * upCount;
        [leftCount, rightCount, upCount, downCount] = [0, 0, 0, 0]; //reset
        if (tmpScore > maxScore) {
          maxScore = tmpScore;
        }
      }
    }

    return 'day 1 solution 2 ' + maxScore;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
