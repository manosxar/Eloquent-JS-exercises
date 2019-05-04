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