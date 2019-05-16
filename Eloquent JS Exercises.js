// CHAPTER 2
// Looping a Tringle (version 1)
/*
let tri = "#";
for (let counter = 1; counter <= 7; counter++) {
    let newTri = (tri + "#");
    console.log(tri);
    tri = newTri;
};

// Looping a Triangle (version 2 [better])

for (let tri = '#'; ; tri+= '#') {
    if (tri.length == 8) {
        break;
    } else {
        console.log(tri);
    }
};
*/
//solution
for (var line = '#'; line.length < 8; line += '#') {
    console.log(line);
}

//FizzBuzz
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

// Best (variable start, end, positive/negative step)

const fizz = 'Fizz';
const buzz = 'Buzz';
function fizzBuzzPrint(i) {
    (i % 3 == 0 && i % 5 == 0) ? console.log(fizz + buzz) :
    (i % 3 == 0) ? console.log(fizz) :
    (i % 5 == 0) ? console.log(buzz) :
    console.log(i);
}
function fizzBuzz(start, end, step = start < end ? 1 : -1) {
  if (step > 0) {
  for (let i = start; i <= end; i += step) fizzBuzzPrint(i);
  } else {
  for (let i = start; i >= end; i += step) fizzBuzzPrint(i);
  }
}

//solution
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}
*/
//absolute best
function fizzBuzzPrint (i) {
  var output = "";
  if (i % 3 == 0)
    output += "Fizz";
  if (i % 5 == 0)
    output += "Buzz";
  console.log(output || i);
}

function fizzBuzz(start, end, step = start < end ? 1 : -1) {
  if (step > 0) {
  for (let i = start; i <= end; i += step) fizzBuzzPrint(i);
  } else {
  for (let i = start; i >= end; i += step) fizzBuzzPrint(i);
  }
}

// Chessboard (Fixed Size)
/*
for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        console.log('# # # # ')
    } else {
        console.log(' # # # #')
    };
}

// Chessboard (Flexi Size)

let size = 8;

for (let i = 1; i <= size; i++) {
    if (i % 2 == 0) {
        for (let row = '#'; row.length <= size; ) {
            if (row.length == size) {
                console.log(row);
                break;
            } else {
                row += ' '
            };
            if (row.length == size) {
                console.log(row);
                break;
            } else {
                row += '#'
            };
        };
        
    } else {
        for (let row = ' '; row.length <= size; ) {
            if (row.length == size) {
                console.log(row);
                break;
            } else {
                row += '#'
            };
            if (row.length == size) {
                console.log(row);
                break;
            } else {
                row += ' '
            };
        };
    };
};

// Chessboard (Jordan)

var size = 8;

for (let i = 1; i <= size; i++) {
    let row = (i % 2 == 0) ? '#' : ' ';

    while (row.length < size) {
        row += (row[row.length - 1] == '#') ? ' ' : '#';
    };
    console.log(row);
};
*/
// Chessboard (flexi cols & rows)
function chessboard(cols, rows) {
  for (let i = 1; i <= rows; i++) {
    let row = (i % 2 == 0) ? '#' : ' ';
    while (row.length < cols) {
      row += (row[row.length - 1] == '#') ? ' ' : '#';
    }
    console.log(row);
  }
}

// Chessboard (newline solution)
var size = 8;
var board = '';
for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        ((x + y) % 2 == 0) ? board += ' ' : board += '#';
    }
    board += '\n';
}
console.log(board);

// CHAPTER 3: FUNCTIONS

// Minimum

const min = (a, b) => Math.min(a, b);

// solution
function min(a, b) {
    if (a > b) return a;
    else return b;
}

// Recursion

//fail #1
function isEven (a) {
    a == 0 ? true :
    |a| == 1 ? false :
    isEven (a - 2);
};

//fail #2
function isEven (a) {
    if (a == 0) {return true}
        else if (|a| == 1) {return false}
            else isEven(a - 2);
}

//works!
function isEven (a) {
    a == 0 ? console.log(true):
    a == 1 ? console.log(false):
    isEven (a - 2);
};

// best
function isEven (a) {
    a == 0 ? console.log(true) :
    Math.abs(a) == 1 ? console.log(false) :
    isEven (Math.abs(a) - 2);
};

// solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

// Bean Counting

function countBs (string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'B') {
            counter++
        } 
    }
    console.log(counter);
}

function countChar (string, char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            counter++
        } 
    }
    console.log(counter);
}

function countBs (string) {
    countChar(string, 'B')
}

// CHAPTER 4: OBJECTS

// The Weresquirrel (notes)

// Target journal example

let journal = [
{events: ["work", "touched tree", "pizza",
"running", "television"], squirrel: false},
{events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts",
"beer"], squirrel: true},
   /* and so on... */
 ];

// 1. Set up a journal mechanism

let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
 }

// 2. Produce a list of phi values for each unique event

// 2a. Produce correlation measurements for each event

function tableFor(event, journal) {
   let table = [0, 0, 0, 0];
   for (let i = 0; i < journal.length; i++) {
     let entry = journal[i], index = 0;
     if (entry.events.includes(event)) index += 1;
     if (entry.squirrel) index += 2;
     table[index] += 1;
    }
   return table;
}

// 2b. Compute phi for each event

function phi(table) {
   return (table[3] * table[0] - table[2] * table[1]) /
     Math.sqrt((table[2] + table[3]) *
               (table[0] + table[1]) *
               (table[1] + table[3]) *
               (table[0] + table[2]));
}

// 2c. Produce a non-repetitive array of journal events

function journalEvents(journal) {
    let events = [];
       for (let entry of journal) {
         for (let event of entry.events) {
           if (!events.includes(event)) {
             events.push(event);
           }
    } }
       return events;
}

// 2d. Combine functions to filter higher correlation values

for (let event of journalEvents(JOURNAL)) {
   let correlation = phi(tableFor(event, JOURNAL));
   if (correlation > 0.1 || correlation < -0.1) {
console.log(event + ":", correlation); }
}

// 3. Evaluate results and test correlation value combinations

for (let entry of JOURNAL) {
if (entry.events.includes("peanuts") &&
!entry.events.includes("brushed teeth")) { entry.events.push("peanut teeth");
} }
console.log(phi(tableFor("peanut teeth", JOURNAL))); // → 1


// STRING PROPERTIES & METHODS

// .slice

console.log("coconuts".slice(4, 7)); // → nut

// .indexOf .lastIndexOf

console.log("coconut".indexOf("u")); // → 5

// .trim

console.log(" okay \n ".trim()); // → okay

// .padStart .padEnd

console.log(String(6).padStart(3, "0")); // → 006

// .split .join

let sentence = "Secretarybirds specialize in stomping"; let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

// .repeat

console.log("LA".repeat(3)); // → LALALA

// .length

let string = "abc";
console.log(string.length); // → 3 
console.log(string[1]);
// → b


// REST PARAMETERS - why not just use an array as a argument? is this another workaround?

 function max(...numbers) {
   let result = -Infinity;
   for (let number of numbers) {
     if (number > result) result = number;
   }
   return result;
 }
 console.log(max(4, 1, 9, -2));
 // → 9

// to call function

 let numbers = [5, 1, 7];
 console.log(max(...numbers));
 // → 7

 let words = ["never", "fully"];
 console.log(["will", ...words, "understand"]);
 // → ["will", "never", "fully", "understand"]

 /* JSON
1. ALWAYS " "
2. ONLY SIMPLE DATA - NO COMPUTATION
3. NO COMMENTS
 */

let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]

// Exercises

// Sum of a range

function range(start, end, step) {
    let numArray = [];
    for (let n = start; step < 0 ? n > (end - 1) : n < (end + 1); n += step || 1) {
        numArray.push(n)
    }
    return numArray
}

function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });
}

console.log(sum(range(start, end, step)));

// solution
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
        } else {
            for (let i = start; i >= end; i += step) array.push(i);
        }
    return array;
    }

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}


// Reversing an Array

var reverseArray = sourceArr => {
  let targetArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    targetArr.push(sourceArr[sourceArr.length - 1 - i])
  }
  return targetArr;
}

var reverseArrayInPlace = sourceArray => {
  for (i = 0; i < (sourceArray.length - 1); i++) {
    sourceArray.unshift(sourceArray[i+1]);
    sourceArray.splice((i + 2), 1)
    }
  return sourceArray
}

//solution
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

// A List

function arrayToList(arr) {
    let list = {};
    for (i = 0; i < arr.length; i++) {
        list = {value: arr[arr.length - 1 - i],
                rest: list
            }
    }
    return list;
};

function listToArray(obj) {
    let array = [];
    for (value in obj) 
}


// Deep Comparison

function deepEqual (a, b) {
  Object.keys(objA).length != Object.keys(objB).length ? console.log('different'):
  eqKeys(objA, objB);
  function eqKeys(a, b) {
    let i=0;
    while i<Object.keys(objA).length {
        Object.keys(objA)[i] != Object.keys(objB)[i] ? console.log('different'): i++
    };
    i=Object.keys(objA).length ? console.log('same!') : console.log('different');
  }
  };

