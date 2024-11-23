class Node {
  constructor(coordinates, previous = null, next = null) {
    this.coordinates = coordinates;
    this.previous = previous;
    this.next = next;
  }
}

function getAllMoves(x, y) {
  let moveArray = [
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x + 1, y + 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x + 2, y - 1],
    [x + 2, y + 1],
  ];
  //filter the illegal moves by checking if coordinates exceed 8 or go below 0
  moveArray = moveArray.filter((item) => {
    if (item[0] > 8 || item[0] < 0 || item[1] > 8 || item[1] < 0) return false;
    else return true;
  });

  return moveArray;
}

function knightMoves(start, end) {
  return;
}

console.log(getAllMoves(2, 1));
