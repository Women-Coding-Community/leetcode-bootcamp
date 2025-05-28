# ⚡ Greedy Algorithms: Making the Best Local Choice

## 🔍 What is a Greedy Algorithm?

A **greedy algorithm** builds up a solution piece by piece, always choosing the option that looks best at the moment — the **locally optimal choice** — with the hope that this leads to a globally optimal solution.

> 🧠 **Key Idea**: "Take the best you can right now, and repeat."

---

## 📌 When to Use Greedy?

Use greedy algorithms when:
- You need to **optimize** (maximize/minimize) something.
- The problem exhibits the **greedy choice property**:
  > A global optimum can be arrived at by selecting a local optimum.
- The problem has **optimal substructure**:
  > An optimal solution to the problem contains optimal solutions to subproblems.

> ✅ Always validate: Greedy doesn’t work for every problem. Prove its correctness or compare with brute-force/DP.

---

## 🧱 How It Works

Greedy algorithms typically:
1. **Sort** or arrange elements based on some metric (value, deadline, etc.).
2. Make **one decision at a time** based on local information.
3. Never revise past decisions.
4. Continue until no further action is possible.

---

## 🛠 Greedy Strategy Template

```python
# Step 1: Sort or prioritize
items.sort(key=your_criteria)

# Step 2: Iterate and take best option
for item in items:
    if condition:
        take(item)
```

---

## ⭐ Popular Greedy Problems and Their Patterns

| Problem | Pattern | Strategy |
|--------|---------|----------|
| Activity Selection | Interval Scheduling | Sort by end time |
| Fractional Knapsack | Value Density | Sort by value/weight |
| Gas Station | Circular Reach | Simulate gain vs cost |
| Jump Game | Reachability | Track farthest index |
| Task Scheduler | Greedy Scheduling | Count frequencies |
| Assign Cookies | Match Smallest Fit | Greedy match |
| Partition Labels | Greedy Partitioning | Track last occurrence |

---

## ⛽ In-Depth: Gas Station Problem

> 🔗 [LeetCode 134 - Gas Station](https://leetcode.com/problems/gas-station/)

### 🚗 Problem:
There are `n` gas stations arranged in a circle. You are given two integer arrays `gas` and `cost` where:
- `gas[i]` is the amount of gas at station `i`.
- `cost[i]` is the gas needed to travel from station `i` to station `i+1`.

Return the starting station index if you can travel around the circuit once, otherwise return -1.

### 🧠 Intuition:
- If the **total gas < total cost**, it's impossible.
- Else, find a point where the **net fuel stays non-negative** from that index.

### 🧪 Greedy Insight:
- If you run out of gas at station `i`, you can't start from any point between last failed and `i`.
- Restart from `i+1`.

### ✅ Code:
```python
def can_complete_circuit(gas, cost):
    total, tank, start = 0, 0, 0

    for i in range(len(gas)):
        diff = gas[i] - cost[i]
        tank += diff
        total += diff

        if tank < 0:
            start = i + 1
            tank = 0

    return start if total >= 0 else -1
```

### ⏱ Time Complexity:
- O(n), single pass

---

## 📉 Visual Analogy

> Think of greedy like taking the highest coin value first in change-making, or picking the closest deadline in a job scheduler.

```
Choices:        Sorted Choices:
[5, 1, 10]  =>  [10, 5, 1]    ⬅️ take highest first
```

---

## 🧪 Classic Greedy Examples

### ✅ Activity Selection (Non-overlapping Intervals)
```python
def activity_selection(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 1
    end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] >= end:
            count += 1
            end = intervals[i][1]
    return count
```

### ✅ Minimum Number of Coins
```python
def min_coins(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        while amount >= coin:
            amount -= coin
            count += 1
    return count if amount == 0 else -1
```

### ✅ Jump Game
```python
def can_jump(nums):
    max_reach = 0
    for i, num in enumerate(nums):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + num)
    return True
```

### ✅ Fractional Knapsack
```python
def fractional_knapsack(items, capacity):
    items.sort(key=lambda x: x[1]/x[0], reverse=True)
    total_value = 0
    for weight, value in items:
        if capacity >= weight:
            capacity -= weight
            total_value += value
        else:
            total_value += value * (capacity / weight)
            break
    return total_value
```

---

## 🧠 Greedy vs. DP (Dynamic Programming)

| Feature | Greedy | Dynamic Programming |
|--------|--------|---------------------|
| Choice | Local optimal | All combinations |
| Memory | Minimal | Uses memoization/tabulation |
| Guarantee | May fail | Always correct if problem fits |

### 🔍 Case Study: 0/1 Knapsack Problem

> 🔗 [LeetCode - 0/1 Knapsack Variant](https://leetcode.com/problems/ones-and-zeroes/) (or classical version)

- You are given items with weights and values. You want to pick a subset with max value such that total weight ≤ capacity.
- **Greedy fails** if you pick by value/weight ratio because you can't break items.

#### ❌ Greedy Approach:
```python
# Pick highest value/weight — fails
items.sort(key=lambda x: x.value/x.weight, reverse=True)
total_weight = 0
value = 0
for item in items:
    if total_weight + item.weight <= capacity:
        total_weight += item.weight
        value += item.value
```
> ❗This can miss optimal combinations. Example:
- Item A: weight=3, value=60
- Item B: weight=2, value=50
- Item C: weight=1, value=30

Greedy picks A (60), skips B+C (50+30=80)

#### ✅ DP Approach:
```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0]*(capacity+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(capacity+1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], dp[i-1][w - weights[i-1]] + values[i-1])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]
```

✅ **DP considers all combinations** and finds the globally best solution.

### 🧠 Spotting Greedy vs DP:
- If problem allows "splitting" or local max leads to global max → Greedy might work.
- If combinations must be considered and optimal depends on previous states → Use DP.

---

## ⏱ Time Complexity

Usually **O(n log n)** for sorting + **O(n)** iteration in Greedy. DP usually requires **O(n × capacity)** or similar.

---

## 🔁 Practice Problems

| Problem | Type | LeetCode |
|--------|------|----------|
| Jump Game | Reachability | [Link](https://leetcode.com/problems/jump-game/) |
| Assign Cookies | Optimization | [Link](https://leetcode.com/problems/assign-cookies/) |
| Gas Station | Circular Greedy | [Link](https://leetcode.com/problems/gas-station/) |
| Partition Labels | Greedy Partitioning | [Link](https://leetcode.com/problems/partition-labels/) |
| Task Scheduler | Job Scheduling | [Link](https://leetcode.com/problems/task-scheduler/) |
| 0/1 Knapsack | DP Required | [Link](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/) |

---

## 🧾 Problem Descriptions for Practice

### 🚗 Gas Station (In-Class)

**Problem Statement:**
Given two arrays `gas` and `cost`, return the starting station index to complete a circular tour, or -1 if it's not possible.

**Input Format:**
- `gas`: List of gas units at each station
- `cost`: List of fuel cost to reach next station

**Constraints:**
- `1 <= gas.length <= 10^5`
- `0 <= gas[i], cost[i] <= 10^4`

**Output Format:**
- Integer: valid starting index or -1

**Sample Test Case:**
```plaintext
gas = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]
Output: 3
```

---

### 📅 Activity Selection (Homework)

**Problem Statement:**
Given `n` activities with start and end times, select the maximum number of non-overlapping activities.

**Input Format:**
- `intervals`: List of `[start, end]` pairs

**Constraints:**
- `1 <= n <= 10^4`
- `0 <= start < end <= 10^4`

**Output Format:**
- Integer: max number of non-overlapping activities

**Sample Test Case:**
```plaintext
intervals = [[1,3], [2,4], [3,5], [0,6], [5,7]]
Output: 3
```

---

## 🧠 Summary

- Greedy is efficient, but not always correct — validate assumptions.
- Look for **greedy choice** and **optimal substructure**.
- Use it in combination with sorting, heaps, or priority queues.
- If greedy fails, try **Dynamic Programming** to explore all combinations.
- Practice with classic problems to build pattern recognition.

---

