class NumArray {
    constructor(nums) {
        this.prefix = new Array(nums.length);
        if (nums.length > 0) {
            this.prefix[0] = nums[0];
            for (let i = 1; i < nums.length; i++) {
                this.prefix[i] = this.prefix[i - 1] + nums[i];
            }
        }
    }

    sumRange(left, right) {
        if (left === 0) return this.prefix[right];
        return this.prefix[right] - this.prefix[left - 1];
    }
}
