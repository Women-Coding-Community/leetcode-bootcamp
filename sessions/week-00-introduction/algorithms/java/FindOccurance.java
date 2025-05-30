public class FirstOccurrence {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;

        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            boolean match = true;
            for (int j = 0; j < needle.length(); j++) {
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    match = false;
                    break;
                }
            }
            if (match) return i;
        }

        return -1;
    }

    public static void main(String[] args) {
        FirstOccurrence finder = new FirstOccurrence();
        System.out.println(finder.strStr("leetcode", "code")); // Output: 4
    }
}
