# 🏃‍♂️🏃 Fast and Slow Pointers Lecture

## 🧠 1. Introduction
The **Fast and Slow Pointers** technique (also known as the tortoise and hare algorithm) is used to solve problems related to **loop detection**, **middle point detection**, and **cycle length** in linked lists or similar structures. It utilizes two pointers that move through the structure at different speeds.

---

## 📚 2. Lecture: Core Concept

### 🚀 How it Works
- **Slow pointer** advances one step at a time.
- **Fast pointer** advances two steps at a time.
- If there's a **cycle**, they will meet.
- To find the **middle**, the fast pointer reaching the end means slow is at the center.

---

## 💡 3. Tips
- Use while loops carefully: `while fast and fast.next`
- This technique is best for problems involving **linked lists**, **arrays with repeated patterns**, or **circular dependencies**.
- Don’t forget to check for null before accessing `.next.next`

---

## 🏋️‍♂️ 4. Top Practice Problems
- LeetCode 141: Linked List Cycle ✅
- LeetCode 876: Middle of the Linked List ✅
- LeetCode 234: Palindrome Linked List ✅
- LeetCode 142: Linked List Cycle II ✅
- LeetCode 19: Remove N-th Node From End of List ✅

---

## 🏫 5. In-Class Work: Detect a Cycle in a Linked List

### ✅ Goal:
Determine if a cycle exists in a linked list.

### 🔍 Approach:
1. Start both `slow` and `fast` at the head.
2. Move `slow` one step, `fast` two steps.
3. If they ever meet → cycle exists.
4. If `fast` reaches null → no cycle.

### 🧪 Code (Python):
```python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

### 🧠 Step-by-Step Example:
```
Input: 1 → 2 → 3 → 4 → 2 (cycle)
slow: 1 → 2 → 3 → 4 → 2
fast: 1 → 3 → 2 → 4 → 2
==> slow == fast ⇒ cycle detected
```

---

## 🏡 6. Homework: Find Middle of Linked List

### 🎯 Goal:
Return the middle node of a linked list.

### 🧪 Code (Python):
```python
def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

### 🧠 Why it Works:
- `fast` moves twice as fast.
- When `fast` reaches the end, `slow` is halfway.

---

## 🎯 Conclusion
Fast and Slow pointers provide elegant and efficient solutions for cycle detection, finding midpoints, and identifying problem structure. Mastering this technique is essential for acing linked list problems and understanding algorithm timing behavior.
