# 🧠 Lecture: Mastering Prefix Sum – Fast Range Queries

## 🔍 What Is Prefix Sum?

Prefix Sum is a powerful technique used to **compute the sum of elements in a subarray efficiently**.

Instead of calculating the sum from scratch for every query, we precompute an array where each element at index `i` represents the sum of elements from the beginning up to `i`.

---

## ✍️ Basic Idea

Given an array `arr` of size `n`, create a new array `prefix` such that:

```text
prefix[0] = arr[0]
prefix[i] = prefix[i - 1] + arr[i]  for i > 0
```

Once built, the sum from index `i` to `j` can be computed as:

```text
sum(i, j) = prefix[j] - prefix[i - 1]   (if i > 0)
sum(i, j) = prefix[j]                   (if i == 0)
```

---

## ✅ Benefits

- Time to build prefix sum: **O(n)**
- Time to answer each range sum query: **O(1)**

---

## 📚 Example

```text
arr = [2, 4, 1, 3, 5]
prefix = [2, 6, 7, 10, 15]

Query: sum from index 1 to 3 (inclusive)
Answer: prefix[3] - prefix[0] = 10 - 2 = 8
```

---

## 🔀 Code – Prefix Sum (Python)

```python
def build_prefix_sum(arr):
    prefix = [0] * len(arr)
    prefix[0] = arr[0]
    for i in range(1, len(arr)):
        prefix[i] = prefix[i-1] + arr[i]
    return prefix

def range_sum(prefix, i, j):
    if i == 0:
        return prefix[j]
    return prefix[j] - prefix[i - 1]
```

---

## 🧩 Common Interview Problems Using Prefix Sum

| Problem | Concept |
|--------|---------|
| 🔹 [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Prefix sum with hashmap |
| 🔹 [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | Basic prefix sum |
| 🔹 [Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/) | Longest prefix diff |
| 🔹 [Subarrays Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | Prefix sum with modulo |
| 🔹 [Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/) | 2D prefix sum |

---

## 🧠 Advanced Topic: Prefix Sum with HashMap

**Problem:** Count subarrays with sum = k  
**Idea:** Track cumulative sums and how many times we've seen each one.

```python
def subarray_sum(nums, k):
    count = 0
    prefix_sum = 0
    freq = {0: 1}  # base case

    for num in nums:
        prefix_sum += num
        count += freq.get(prefix_sum - k, 0)
        freq[prefix_sum] = freq.get(prefix_sum, 0) + 1

    return count
```

---

## 🔥 2D Prefix Sum

For a matrix, build a prefix sum `pre[i][j]` such that:

```text
pre[i][j] = matrix[i][j]
          + pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1]
```

Use it to answer range queries in O(1) time for submatrices.

---

## 📚 Classwork

- [Subarray Sum Equals K – Leetcode #560](https://leetcode.com/problems/subarray-sum-equals-k/)

## 📝 Homework

- [Range Sum Query - Immutable – Leetcode #303](https://leetcode.com/problems/range-sum-query-immutable/)
