function moveZeroes(nums) {
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
            lastNonZero++;
        }
    }
}

// Example usage
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
