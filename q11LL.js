// CYCLE DETECTION

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

let curr = linkedList,
  cycleNode;
while (curr.next !== null) {
  if (curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;

// NAIVE SOLUTION
const findCycle = function (head) {
  const seenNodes = new Set();
  let currentNode = head;

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false;
    }

    seenNodes.add(currentNode);

    currentNode = currentNode.next;
  }

  return currentNode;
};

console.log(findCycle(linkedList));

// OPTIMISED SOLUTION
const findCycle1 = function (head) {
  if (!head) return null;

  let tortoise = head,
    hare = head;

  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;

    if (hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }

    if (tortoise === hare) break;
  }

  let p1 = head,
    p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};

console.log(findCycle1(linkedList));
