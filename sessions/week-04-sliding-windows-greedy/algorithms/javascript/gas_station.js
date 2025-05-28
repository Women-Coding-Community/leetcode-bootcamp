function activitySelection(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= end) {
            count++;
            end = intervals[i][1];
        }
    }
    return count;
}

// Example usage
console.log(activitySelection([[1,3],[2,4],[3,5],[0,6],[5,7]])); // Output: 3
