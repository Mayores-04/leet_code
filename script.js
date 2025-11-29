const person = [
    {
    firstName: "Jake",
    lastName: "Mayores",
    age: 20,
    eyeColor: "brown",
    skinColor: "black"
}, 
{
    firstName: "John",
    lastName: "Doe",
    age: 25,
    eyeColor: "blue",
    skinColor: "white"
}
];

for(let i = 0; i< person.length; i++){
    console.log(person[i]);
}

// person.map((i) => {
//     console.log(i.firstName);
//     console.log(i.lastName);
//     console.log(i.age);
//     console.log(i.eyeColor);
//     console.log(i.skinColor);
//     console.log("-------------");
// })