class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

function buildLinkedList(values) {
    const head = new Node(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
    }
    return head;
}

function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.value + " -> ");
        current = current.next;
    }
    console.log("null");
}

const head = buildLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printList(head);

const reversedHead = reverseLinkedList(head);
console.log("Reversed list:");
printList(reversedHead);
