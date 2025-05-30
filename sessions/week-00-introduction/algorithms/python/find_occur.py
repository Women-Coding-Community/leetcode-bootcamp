def strStr(haystack, needle):
    if needle == "":
        return 0

    for i in range(len(haystack) - len(needle) + 1):
        match = True
        for j in range(len(needle)):
            if haystack[i + j] != needle[j]:
                match = False
                break
        if match:
            return i
    return -1

# Example:
print(strStr("leetcode", "code"))  # Output: 4
