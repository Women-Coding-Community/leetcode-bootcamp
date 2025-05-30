# 🧠 LeetCode Bootcamp - Introduction Series

## Lecture 1: Introduction to Problem Solving + Big O Notation

### 🎯 Goals
- Understand what time and space complexity mean.
- Learn how to analyze and compare algorithm efficiency.
- Solve 4 classic problems using clear logic, code, and complexity analysis.

---

## 🔍 1. What is Big O Notation?

Big O describes how the runtime or space grows relative to the input size `n`.

### 🕓 Time Complexity

| Complexity     | Description                                | Example            |
|----------------|--------------------------------------------|--------------------|
| O(1)           | Constant time                               | `return arr[0]`    |
| O(log n)       | Logarithmic (cut input in half each time)  | Binary Search      |
| O(n)           | Linear                                      | Loop over array    |
| O(n log n)     | Log-linear                                  | Merge Sort         |
| O(n^2)         | Quadratic                                   | Nested loops       |
| O(2^n), O(n!)  | Exponential, factorial                      | Recursion-heavy    |

#### 🧠 Example - Constant Time
```python
def get_first(arr):
    return arr[0]  # O(1)
```

#### 🔁 Example - Linear Time
```python
def sum_all(arr):
    total = 0
    for num in arr:
        total += num
    return total  # O(n)
```

#### 🧠 Example - Quadratic Time
```python
def print_pairs(arr):
    for i in arr:
        for j in arr:
            print(i, j)  # O(n^2)
```

---

## 💾 2. Space Complexity

How much **extra** memory is used?

- O(1): No additional memory (in-place).
- O(n): Extra space grows with input (e.g. storing results in a list).

---

## ✅ 3. Problem Walkthroughs

---

### Problem 1: Two Sum (Unsorted Array)

**📝 Problem:**  
Given an array `nums` and a target `target`, return indices of the two numbers such that they add up to `target`.

#### ✅ Efficient Solution: HashMap
```python
def two_sum(nums, target):
    hashmap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hashmap:
            return [hashmap[complement], i]
        hashmap[num] = i
```

**🧠 Time:** O(n)  
**💾 Space:** O(n)

#### 🔁 Brute Force:
```python
def two_sum_brute(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
```

**🧠 Time:** O(n²)  
**💾 Space:** O(1)

---

### Problem 2: Reverse String

**📝 Problem:**  
Reverse the characters of a string (as array) in-place.

```python
def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
```

**🧠 Time:** O(n)  
**💾 Space:** O(1)

---

### Problem 3: Remove Duplicates from Sorted Array

**📝 Problem:**  
Remove duplicates in-place from a sorted array and return new length.

```python
def remove_duplicates(nums):
    if not nums:
        return 0
    i = 0
    for j in range(1, len(nums)):
        if nums[i] != nums[j]:
            i += 1
            nums[i] = nums[j]
    return i + 1
```

**🧠 Time:** O(n)  
**💾 Space:** O(1)

---

### Problem 4: Find First Occurrence of a String

**📝 Problem:**  
Implement `strStr()` – return the index of the first occurrence of `needle` in `haystack`.

```python
def strStr(haystack, needle):
    if needle == "":
        return 0
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i:i+len(needle)] == needle:
            return i
    return -1
```

**🧠 Time:** O(n * m)  
**💾 Space:** O(1)

---

## 🧪 Examples to Test Your Understanding

### 1. Predict the Complexity
```python
for i in range(n):
    print(i)  # O(n)
```

### 2. Nested Loops
```python
for i in range(n):
    for j in range(n):
        print(i, j)  # O(n^2)
```

### 3. Logarithmic
```python
i = 1
while i < n:
    i *= 2  # O(log n)
```

### 4. Using Extra Memory
```python
def duplicate_list(lst):
    return lst[:]  # O(n) time & O(n) space
```

---

## 💬 Summary

- Learn to **analyze complexity** before coding.
- Use **hash maps** for fast lookup.
- Use **two-pointer technique** for in-place operations.
- Always check if your solution can be **optimized in time or space**.
