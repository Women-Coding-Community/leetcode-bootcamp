class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

// Example usage
function createCycleList() {
    const head = new Node(1);
    const second = new Node(2);
    const third = new Node(3);
    const fourth = new Node(4);
    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = second;  // cycle here
    return head;
}

const head = createCycleList();
console.log("Cycle detected?", hasCycle(head));
