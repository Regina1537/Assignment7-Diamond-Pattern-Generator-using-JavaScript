// printing statement
console.log("Introduction to Javascript");
console.log("javascript Variables");
console.log("var , let ,const");

// Left-aligned pattern
const leftPattern = n => {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
    console.log('');
};
// Right-aligned pattern
const rightPattern = n => {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        for (let k = 1; k <= i; k++) {
            line += '*';
        }
        console.log(line);
    }
    console.log('');
};
// Pyramid pattern
const pyramidPattern = n => {
    for (let i = 1; i <= n; i++) {
        let line = '';
        // Add spaces
        for (let j = 1; j <= n - i; j++) {
            line += ' ';
        }
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += '*';
        }
      console.log(line);
    }
    console.log('');
};

// Diamond pattern
function pattern(input) {
    let out = "";
  
    // Upper half
    for (let i = 1; i <= input; i++) {
      out += " ".repeat(input - i);
      out += "* ".repeat(i).trim(); // trim to remove trailing space
      out += "\n";
    }

    // Lower half
    for (let i = input - 1; i >= 1; i--) {
      out += " ".repeat(input - i);
      out += "* ".repeat(i).trim();
      out += "\n";
    }
  
    console.log(out);
  }
  
  // Call the function with input 5
  pattern(5); 

// Prompting the user for input (only works in browser, not in Node.js)
const lines = parseInt(prompt("Enter number of lines for patterns:"));

leftPattern(lines);
rightPattern(lines);
pyramidPattern(lines);
DiamondPattern(5);

// Output of the code is given below
//Left Pattern:
// *
// * *
// * * *
// * * * *
// * * * * *

//Right Pattern:
// * * * * *
// * * * *
// * * *
// * *
// *

// Pyramid Pattern:
//  *
// * *
// * * *
//* * * *
//* * * * *
//* * * * * *

// output code is given below as
// Diamond pattern
//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *

