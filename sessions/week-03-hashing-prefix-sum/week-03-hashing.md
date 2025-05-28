# 📘 HashMap and HashSet Patterns – LeetCode Bootcamp

> 🔑 Master these to unlock O(n) solutions in problems involving frequency, indexing, deduplication, and fast lookups.

---

## 🧠 I. Why HashMap and HashSet?

| Structure     | Purpose                     | Average Time Complexity |
|---------------|------------------------------|--------------------------|
| `HashMap<K,V>`| Map keys to values           | O(1) for get/put         |
| `HashSet<E>`  | Store unique elements        | O(1) for add/contains    |

---

## 🗂️ II. HashMap Basics

### ✅ Operations
```java
Map<String, Integer> map = new HashMap<>();

map.put("apple", 2);                       // Insert or update
int count = map.getOrDefault("apple", 0);  // Retrieve
map.containsKey("apple");                  // Check key
map.remove("apple");                       // Remove key
```

### 🔥 Use Cases
- Frequency maps (char/num count)
- Index mapping
- Prefix/suffix lookup
- Grouping data (e.g., anagrams)

---

## 🧺 III. HashSet Basics

### ✅ Operations
```java
Set<Integer> set = new HashSet<>();

set.add(42);            // Insert
set.contains(42);       // Check existence
set.remove(42);         // Remove
```

### 🔥 Use Cases
- Checking for duplicates
- Set operations (union, intersection)
- Sliding window uniqueness

---

## 🧩 IV. Pattern Examples

---

### 🔁 Two Sum – LeetCode 1

> Find 2 indices such that nums[i] + nums[j] == target.

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[0];
}
```

💡 **Store number → index** while scanning. Look for complement.

---

### ⚠️ Contains Duplicate – LeetCode 217

```java
public boolean containsDuplicate(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    for (int num : nums) {
        if (!seen.add(num)) return true; // Already exists
    }
    return false;
}
```

💡 `Set.add()` returns `false` if element already exists.

---

### 🔗 Longest Consecutive Sequence – LeetCode 128

```java
public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);

    int max = 0;
    for (int num : set) {
        if (!set.contains(num - 1)) {
            int current = num;
            int length = 1;
            while (set.contains(current + 1)) {
                current++;
                length++;
            }
            max = Math.max(max, length);
        }
    }
    return max;
}
```

💡 Only start sequence at beginning (`num - 1` must not exist).

---

## 🧱 V. Common Pitfalls

| ❌ Mistake                         | ✅ Correct Practice                         |
|----------------------------------|--------------------------------------------|
| Modifying map while iterating   | Use `entrySet().iterator()`                |
| Assuming `HashMap` keeps order   | Use `LinkedHashMap` if order is needed     |
| Using objects as keys directly   | Override `equals()` and `hashCode()`       |

---

## 🧩 VI. Top Practice Problems

| Pattern             | Problem Title                               | LeetCode # |
|---------------------|---------------------------------------------|------------|
| Frequency Map       | Group Anagrams                              | 49         |
| Index Tracking      | Two Sum                                     | 1          |
| Duplicate Check     | Contains Duplicate                          | 217        |
| Sliding Window + Set| Longest Substring Without Repeating Chars   | 3          |
| Prefix Sum + Map    | Subarray Sum Equals K                       | 560        |
| Graph + Map         | Course Schedule                             | 207        |

---

## 💪 VII. Exercises

### Warm-Up
- [ ] Implement `isAnagram(String s, String t)`
- [ ] Use `HashSet` to remove duplicates from an array

### Challenge
- [ ] [Leetcode 560: Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
- [ ] [Leetcode 3: Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

---

## 📌 Final Tips

- Optimize brute-force with maps/sets
- Practice pattern recognition
- Think in terms of: "Can I use a map/set to speed this up?"
---

## 🧪 VIII. Practice Problems in Class & Homework

### 👩‍🏫 In-Class Problem
- [ ] **Group Anagrams** – [LeetCode 49](https://leetcode.com/problems/group-anagrams/)

### 🏠 Homework
- [ ] **Group Shifted Strings** – [LeetCode 249](https://leetcode.com/problems/group-shifted-strings/)