const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("\n").map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  heapifyUP() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) break;

      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let largest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
        largest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex;
      }
      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUP();
  }

  pop() {
    if (this.isEmpty()) return 0;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }
    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(input) {
  const [n, ...arr] = input;
  const maxHeap = new MaxHeap();
  const answer = [];

  for (let x of arr) {
    if (x === 0) answer.push(maxHeap.pop());
    else maxHeap.push(x);
  }
  return answer.join("\n");
}

console.log(solution(input));
