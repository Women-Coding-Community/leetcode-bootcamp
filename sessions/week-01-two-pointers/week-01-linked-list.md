# 🔗 Linked List Lecture

## 🧠 1. Introduction
A **Linked List** is a linear data structure where each element (node) contains a **value** and a **reference to the next node**. It differs from arrays in that elements are not stored in contiguous memory locations. Linked lists are dynamic in nature and efficient at insertions and deletions.

---

## 📚 2. Lecture: Core Operations

### 🧱 Node Definition (Python)
```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

### 🔍 Search
```python
def search(head, target):
    current = head
    while current:
        if current.value == target:
            return True
        current = current.next
    return False
```

### ➕ Insert at Head
```python
def insert_at_head(head, value):
    new_node = Node(value)
    new_node.next = head
    return new_node
```

### ➕ Insert at Tail
```python
def insert_at_tail(head, value):
    new_node = Node(value)
    if not head:
        return new_node
    current = head
    while current.next:
        current = current.next
    current.next = new_node
    return head
```

### ➕ Insert at Index
```python
def insert_at_index(head, index, value):
    if index == 0:
        return insert_at_head(head, value)
    new_node = Node(value)
    current = head
    for _ in range(index - 1):
        if not current:
            return head  # index out of range
        current = current.next
    new_node.next = current.next
    current.next = new_node
    return head
```

### ❌ Delete by Value
```python
def delete_by_value(head, value):
    if not head:
        return head
    if head.value == value:
        return head.next
    current = head
    while current.next and current.next.value != value:
        current = current.next
    if current.next:
        current.next = current.next.next
    return head
```

### ❌ Delete at Index
```python
def delete_at_index(head, index):
    if index == 0 and head:
        return head.next
    current = head
    for _ in range(index - 1):
        if not current:
            return head  # index out of range
        current = current.next
    if current and current.next:
        current.next = current.next.next
    return head
```

---

## ⚔️ 3. ArrayList vs LinkedList
| Feature         | ArrayList           | LinkedList        |
|----------------|---------------------|-------------------|
| Memory         | Contiguous          | Non-contiguous    |
| Access         | O(1)                | O(n)              |
| Insert/Delete  | O(n) (worst-case)   | O(1) at ends      |
| Resizing       | May require copy    | Dynamic           |
| Cache Friendly | Yes                 | No                |

---

## 💡 4. Tips & Pitfalls
- ✅ Always check for `None` before accessing `.next`
- ⚠️ Watch for edge cases like empty list or single-node list
- 🔁 Infinite loop risk if pointers are mishandled
- 🧼 Clear up memory in languages that require manual management

---

## 🏋️‍♂️ 5. Top Practice Problems
- LeetCode 206: Reverse Linked List
- LeetCode 21: Merge Two Sorted Lists
- LeetCode 141: Linked List Cycle
- LeetCode 160: Intersection of Two Linked Lists
- LeetCode 876: Middle of the Linked List
- LeetCode 19: Remove N-th Node From End of List

---

## 🏫 6. In-Class Work: Reverse a Linked List
```python
def reverse_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev
```
**Explanation:** Reverses the `.next` pointers one by one until the list is flipped.

---

## 🏡 7. Homework

**Implement and test all major Linked List operations:**
- Insert (head, tail, index)
- Delete (by value, by index)
- Search
- Reverse
- Traverse and print
- Find length

📌 Practice building from scratch and manipulating nodes directly.

---

## 🎯 Conclusion
Linked Lists are foundational data structures that form the basis of many advanced systems. Understanding how to traverse, manipulate, and optimize linked lists builds strong core programming skills.
