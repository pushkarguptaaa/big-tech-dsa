// M,N REVERSALS

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

var reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 2, 4));
// S = O(1)
// T = O(N)
