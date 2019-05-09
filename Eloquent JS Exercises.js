// CHAPTER 2
// Looping a Tringle (version 1)

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

//FizzBuzz

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

// Chessboard (Fixed Size)

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

// CHAPTER 3: FUNCTIONS

// Minimum

const min = (a, b) => Math.min(a, b);

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

// Bean Counting

