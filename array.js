
let arr = new Array("Apple", "Banana", "Cherry");
arr.forEach((item, index) => console.log((index + 1), item));

// Returning values from a array
for(item of arr){
    console.log(item);
}

// Returning index from a array
for(index in arr){
    console.log(index);
}

console.log(arr.push("Testing")); // adds item to the end of the array and returns new length
console.log(arr);
console.log(arr.pop()); // removes last item from the array and returns removed item
console.log(arr);

const names = ["Alice", "Bob", "Charlie", "David"];

names.splice(1, 2, "Eve", "Frank"); // removes 2 items from index 1 and adds Eve and Frank
console.log(names);
names.push("Grace"); // adds Grace to the end of the array
console.log(names);