class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def reverse_linked_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

# Example usage
def build_linked_list(values):
    head = Node(values[0])
    current = head
    for val in values[1:]:
        current.next = Node(val)
        current = current.next
    return head

def print_list(head):
    while head:
        print(head.value, end=" -> ")
        head = head.next
    print("None")

head = build_linked_list([1, 2, 3, 4, 5])
print("Original list:")
print_list(head)

reversed_head = reverse_linked_list(head)
print("Reversed list:")
print_list(reversed_head)
