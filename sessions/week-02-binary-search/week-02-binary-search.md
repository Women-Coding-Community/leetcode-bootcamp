# 🔍 Week 2: Binary Search

---

## 🎯 Objectives

By the end of this session, you'll be able to:
- Understand and implement binary search correctly
- Avoid common pitfalls in pointer handling
- Identify scenarios suitable for binary search

---

## 📚 Lecture: Introduction to Binary Search

### **Implementing Binary Search**

Binary search is an algorithm that searches for a value in a sorted data set.

Even experienced developers can find it quite tricky to implement binary search correctly because “the devil’s in the detail.”

- How should the boundary variables `left` and `right` be initialized?
- Should we use `left < right` or `left <= right` as the exit condition in our while-loop?
- How should the boundary variables be updated? Should we choose `left = mid`, `left = mid + 1`, `right = mid`, or `right = mid - 1`?

---

### **Binary Search Steps**

To begin any binary search implementation, do the following:

1. Define the search space.
2. Define the behavior inside the loop for narrowing the search space.
3. Choose an exit condition for the while-loop.
4. Return the correct value.

---

### **1. Defining the Search Space**

The search space encompasses all possible values that may include the value we’re searching for. For instance, when searching for a target in a sorted array, the search space should cover the array, as the target could be anywhere within it.

This is illustrated in the array below, where `left` and `right` pointers define the search space:

---

### **2. Narrowing the Search Space**

Narrowing the search space involves progressively moving the `left` or `right` pointer inward until the search space is reduced to one element or none.

At each point in the binary search, we need to decide how to narrow the search space. We can either:

- Narrow the search space toward the left (by moving the `right` pointer inward)
- Narrow the search space toward the right (by moving the `left` pointer inward)

---

### **Using the Midpoint**

We decide whether to move the `left` or `right` pointer based on the value in the middle of the search space, indicated by the `mid` variable.

---

### **3. Choosing an Exit Condition**

Choosing an exit condition for when the `while` loop should terminate can be tricky. Our choices are primarily between `left < right` and `left <= right`.

- When the exit condition is `left < right`, the while-loop will break when `left` and `right` meet.
- When the exit condition is `left <= right`, the loop will continue until `left` has surpassed `right`.

---

### **4. Returning the Correct Value**

As previously mentioned, the `while` loop terminates once we’ve narrowed the search space down to a final value (assuming no value was returned during earlier iterations), pointed at by both `left` and `right`.

---

### **Time Complexity**

The time complexity of the binary search is O(log(n)), where n is the number of values in the search space. The algorithm is logarithmic because, in each iteration of the algorithm, it divides the search space in half until a single value is located, or no value is found. This reduction by half in each iteration is characteristic of logarithmic behavior.

---

### **Real-world Example**

Transaction search in financial systems: In financial systems, a binary search can be used to quickly find a transaction or record by narrowing down the search range, as the data is typically stored in order. This makes it efficient to retrieve specific entries without searching through the entire database.

## 🔨 Practice Problems

| Problem | Pattern |
|---------|---------|
| Find Insertion Index | Lower Bound (binary search on insert position) |

---

## 🧑‍💻 Solutions

- [Java](algorithms/java/)
- [Python](algorithms/python/)
- [JavaScript](algorithms/javascript/)

---

## 🏠 Homework Problems

| Problem | Concept Practiced |
|---------|-------------------|
| Find First and Last Occurrence of a Number | Range search using binary search |

---

## 📌 Takeaways

- Binary Search is simple in concept but nuanced in implementation.
- Always define:
    - Correct boundaries
    - Loop condition
    - Return behavior
- Practice variations: standard array search, rotated arrays, binary search on answer space.

---

## 🔗 Resources

- [Algorithm Complexity Cheatsheet](../../resources/algorithm-complexity-cheatsheet.md)