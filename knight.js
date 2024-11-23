class Node {
  constructor(coordinates, previous = null, next = null) {
    this.coordinates = coordinates;
    this.previous = previous;
    this.next = next;
  }
}

function getAllMoves(x, y, end) {
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
  //filter the illegal moves by checking if coordinates exceed 7 or go below 0
  moveArray = moveArray.filter((item) => {
    if (item[0] > 7 || item[0] < 0 || item[1] > 7 || item[1] < 0) return false;
    else return true;
  });

  moveArray = moveArray.filter((item) => {
    if (Math.abs(x - end[0]) <= 1 && Math.abs(y - end[1]) <= 1) return true;
    if (
      Math.abs(x - end[0]) > Math.abs(item[0] - end[0]) ||
      Math.abs(y - end[1]) > Math.abs(item[1] - end[1])
    )
      return true;
    else return false;
  });

  return moveArray;
}

let count = 0;

function knightMoves(start, end) {
  let adjacencyList = [];
  let queue = [new Node(start)];

  //if the first element in queue matches end coordinates then break the loop cause we reached our destination
  while (
    queue[0].coordinates[0] !== end[0] ||
    queue[0].coordinates[1] !== end[1]
  ) {
    console.log(queue[0].coordinates);
    count++;
    let currentPosition = queue.shift();

    //get all possible moves of current position and then turn them into nodes with their previous property set to current position node
    for (let coordinates of getAllMoves(
      currentPosition.coordinates[0],
      currentPosition.coordinates[1],
      end
    )) {
      queue.push(new Node(coordinates, currentPosition));
    }

    //push the current position node into list so it doesn't get garbage collected
    adjacencyList.push(currentPosition);
  }

  let path = [];
  let currentPosition = queue[0];

  //get path by traversing the previous property of nodes
  while (true) {
    path.push(currentPosition.coordinates);
    if (currentPosition.previous === null) break;
    else currentPosition = currentPosition.previous;
  }

  return path.reverse();
}

console.log(knightMoves([3, 3], [3, 2]));
console.log(count);
