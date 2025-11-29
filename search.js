const students = [
  {
    firstName: "Jake",
    lastName: "Mayores",
    age: 20,
    sex: "male",
  },
  {
    firstName: "Angelika Bianca",
    lastName: "Lopez",
    age: 21,
    sex: "female",
  },
];

function searchStudents(searchInput) {
  if (!searchInput) return console.log("No search input provided");
  const q = String(searchInput).toLowerCase();

  const results = [];

  for (const s of students) {
    const matched = {};

    for (const key of Object.keys(s)) {
      const value = s[key];
      if (typeof value === "string") {
        if (value.toLowerCase().includes(q)) matched[key] = value;
      }
    }

    if (Object.keys(matched).length > 0) results.push(matched);
  }

  return results;
}

console.log('search "ke":');
console.log(JSON.stringify(searchStudents('gg'), null, 2));

console.log('\nsearch "e":');
console.log(JSON.stringify(searchStudents('e'), null, 2));

console.log('\nsearch "angel":');
console.log(JSON.stringify(searchStudents('angel'), null, 2));
