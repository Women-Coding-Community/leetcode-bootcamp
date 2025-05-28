class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Example usage
def create_cycle_list():
    head = Node(1)
    second = Node(2)
    third = Node(3)
    fourth = Node(4)
    head.next = second
    second.next = third
    third.next = fourth
    fourth.next = second  # cycle here
    return head

head = create_cycle_list()
print("Cycle detected?" , has_cycle(head))
