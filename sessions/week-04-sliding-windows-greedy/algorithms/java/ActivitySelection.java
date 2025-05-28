import java.util.Arrays;

public class ActivitySelection {
    public int selectActivities(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        int count = 1, end = intervals[0][1];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= end) {
                count++;
                end = intervals[i][1];
            }
        }
        return count;
    }

    public static void main(String[] args) {
        ActivitySelection as = new ActivitySelection();
        int[][] intervals = {{1,3}, {2,4}, {3,5}, {0,6}, {5,7}};
        System.out.println(as.selectActivities(intervals)); // Output: 3
    }
}
