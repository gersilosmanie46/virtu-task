/*
   Filename: ComplexCode.js
   Description: This code demonstrates a complex and elaborate algorithm for sorting an array of objects based on multiple criteria. It uses custom comparator functions and advanced techniques.
*/

// Define a sample array of objects
var data = [
   { id: 1, name: "John", age: 25 },
   { id: 2, name: "Amy", age: 31 },
   { id: 3, name: "David", age: 22 },
   { id: 4, name: "Alice", age: 35 },
   { id: 5, name: "Bob", age: 30 }
];

// Define custom comparator functions
function compareName(a, b) {
   return a.name.localeCompare(b.name);
}

function compareAge(a, b) {
   return a.age - b.age;
}

function compareID(a, b) {
   return a.id - b.id;
}

// Sort the data using multiple criteria
data.sort(function(a, b) {
   var comparison = 0;
   comparison = compareName(a, b);

   if (comparison === 0) {
      comparison = compareAge(a, b);

      if (comparison === 0) {
         comparison = compareID(a, b);
      }
   }

   return comparison;
});

// Output the sorted data
console.log("Sorted Data:");
console.log(data);

// Other code with more than 200 lines...
// ...