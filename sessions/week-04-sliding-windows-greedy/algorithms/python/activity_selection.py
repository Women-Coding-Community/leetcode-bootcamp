def activity_selection(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 1
    end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] >= end:
            count += 1
            end = intervals[i][1]
    return count

# Example
print(activity_selection([[1,3],[2,4],[3,5],[0,6],[5,7]]))  # Output: 3
