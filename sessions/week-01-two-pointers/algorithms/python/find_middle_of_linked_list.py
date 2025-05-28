class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

# Example usage
def build_linked_list(values):
    head = Node(values[0])
    current = head
    for val in values[1:]:
        current.next = Node(val)
        current = current.next
    return head

head = build_linked_list([1, 2, 3, 4, 5])
middle = find_middle(head)
print("Middle node value:", middle.value)
