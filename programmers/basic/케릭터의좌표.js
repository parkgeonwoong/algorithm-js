function solution(keyinput, board) {
  let map = [(board[0] - 1) / 2, (board[1] - 1) / 2];
  let x = 0;
  let y = 0;

  console.log("map: ", map);

  for (let i of keyinput) {
    switch (i) {
      case "left":
        x--;
        Math.abs(x) > map[0] ? (x = map[0] * -1) : x;
        break;
      case "right":
        x++;
        Math.abs(x) > map[0] ? (x = map[0]) : x;
        break;
      case "up":
        y++;
        Math.abs(y) > map[1] ? (y = map[1]) : y;
        break;
      case "down":
        y--;
        Math.abs(y) > map[1] ? (y = map[1] * -1) : y;
        break;
    }
  }

  console.log("x: ", x, " y: ", y);

  return [x, y];
}

// solution(["left", "right", "up", "right", "right"], [11, 11]);
// solution(["down", "down", "down", "down", "down"], [7, 9]);

solution(["left", "left", "left", "right"], [3, 3]);
solution(["up", "up", "up", "down"], [3, 3]);
