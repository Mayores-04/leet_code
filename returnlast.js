const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnLastNum(nums){
    return nums.length > 0 ? nums[nums.length - 1] : -1; 
}

console.log(returnLastNum(arr));