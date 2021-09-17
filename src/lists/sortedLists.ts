// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let newNode = new ListNode(-1);
  const result = newNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      newNode.next = new ListNode(l1.val);
      newNode = newNode.next;
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      newNode.next = new ListNode(l2.val);
      newNode = newNode.next;
      l2 = l2.next;
    } else {
      newNode.next = new ListNode(l1.val);
      newNode = newNode.next;
      l1 = l1.next;

      newNode.next = new ListNode(l2.val);
      newNode = newNode.next;
      l2 = l2.next;
    }
  }
  if (l1) {
    newNode.next = l1;
  }
  if (l2) {
    newNode.next = l2;
  }

  return result.next;
}
