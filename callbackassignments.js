// Q.no 1

// function processArray(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }

//     return result;
// }

// console.log(processArray([1, 2, 3, 4], function(n) {
//     return n + 1;
// }));

// Qno 2.Use processArray() to square every number in array

// let square = processArray([1, 4, 5, 7],function (n) {
//      return n * n;
// });
// console.log(square);

//Qno.3 use processArray()//  to return only even numbers.define a suitable callback and modify the main function if necessary to support filtering

// function processArray(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let answer = processArray([1, 2, 3, 4, 5, 6], function(n) {
//     return n % 2 === 0;
// });

// console.log(answer);

//Qno.4 create a function processstring(str, callback) that passes a string to be a callback

// function processString(str, callback) {
//   return callback(str);
// }

//Qno.5 use a callback to convert a string to Uppercase

// function processString(str, callback) {
//     return callback(str);
// }

// let answer = processString("hello world", function(str) {
//     return str.toUpperCase();
// });

// console.log(answer);

//Qno.6 use a callback to count the number of words in a sentence

//  function processString(str, callback) {
//      return callback(str);
//  }

//  let answer = processString("I love cricket", function(str) {
//      return str.split(" ").length;
//  });

//  console.log(answer);

//Qno.7Create a function calculate(a, b, callback) that performs an    operation  based on the callback provided.

// function calculate(a, b, callback) {
//     return callback(a, b);
// }

//Qno.8Use calculate() with callbacks for addition, subtraction, multiplication, and division.

// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// // Addition
// console.log(calculate(10, 5, function(a, b) {
//     return a + b;
// }));

// // Subtraction
// console.log(calculate(10, 5, function(a, b) {
//     return a - b;
// }));

// // Multiplication
// console.log(calculate(10, 5, function(a, b) {
//     return a * b;
// }));

// // Division
// console.log(calculate(10, 5, function(a, b) {
//     return a / b;
// }));

//Qno9.Create a function findElement(arr, callback) that returns the first element satisfying a condition, or undefined if no element matches.

// function findElement(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return arr[i]; 
//     }
//   }
//   return undefined; 
// }

// let result = findElement([1, 17, 2, 7, 4], function (n) {
//   return  n % 2 === 0 ;
// });

// console.log(result); 

//BONUS: Build a menu-driven calculator using functions and callbacks, with separate operations for arithmetic calculations and array analysis

/*function calculate(a, b, callback) {
  return callback(a, b);
}

function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function menuCalculator() {
  console.log("1. Arithmetic Operations ");
  console.log("2. Array Analysis ");

  let choice = 1; 

  if (choice === 1) {
    console.log(" Arithmetic Calculations ");
    
    let sum = calculate(1, 5, function(a, b) {
      return a + b;
    });
    console.log(1 + 5,);


    let subtraction = calculate(11, 7, function (a, b) {
      return a - b;
    });
    console.log(subtraction); 
    

    let multiply = calculate(15, 5, function(a, b) {
      return a * b;
    });
    console.log(15 * 5);

    let division = calculate(100, 20, function (a, b) {
      return a / b;
    });
    console.log(division);

  } else if (choice === 2) {
    console.log("\n-- Array Analysis --");
    
    let square = processArray([1, 2, 3, 4], function(n) {
      return n * n;
    });
    console.log("Square Array:", square);

  } 
}
menuCalculator();*/






