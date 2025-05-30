function reverseString(input) {
    const chars = input.split('');
    let left = 0, right = chars.length - 1;

    while (left < right) {
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }

    return chars.join('');
}

// Example:
console.log(reverseString("hello")); // Output: "olleh"
