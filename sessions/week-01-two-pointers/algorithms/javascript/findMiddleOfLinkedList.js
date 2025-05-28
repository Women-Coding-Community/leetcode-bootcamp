class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Example usage
function buildLinkedList(values) {
    const head = new Node(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
    }
    return head;
}

const head = buildLinkedList([1, 2, 3, 4, 5]);
const middle = findMiddle(head);
console.log("Middle node value:", middle.value);
