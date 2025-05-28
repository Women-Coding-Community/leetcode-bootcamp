from collections import defaultdict

def subarray_sum(nums, k):
    count = 0
    prefix_sum = 0
    freq = defaultdict(int)
    freq[0] = 1  # base case

    for num in nums:
        prefix_sum += num
        count += freq[prefix_sum - k]
        freq[prefix_sum] += 1

    return count
