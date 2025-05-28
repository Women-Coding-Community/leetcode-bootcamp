class Node {
    int value;
    Node next;
    Node(int value) {
        this.value = value;
    }
}

public class DetectCycleInLinkedList {
    public static boolean hasCycle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        Node fourth = new Node(4);
        head.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = second;  // create cycle

        System.out.println("Cycle detected? " + hasCycle(head));
    }
}
