//// Conditional Statements


/// ##### if statement

if (true) {
     console.log("Success");
}

/// ##### if else statement

if (false) {
     console.log('Success');
} else {
     console.log('Failed');
}


/// ##### if else statement

if (false) {
     console.log('Success');
} else if (true) {
     console.log('Pandding');
} else {
     console.log('Failed');
}


/// ##### Ternary Operator

console.log(24 > 18 ? "Allow" : "Deny");


/// ##### Switch statement

let val = 4
switch (val) {
     case 1:
          console.log('value is ' + val);
          break;
     case 2:
          console.log('value is ' + val);
          break;
     case 3:
          console.log('value is ' + val);
          break;
     case 4:
          console.log('value is ' + val);
          break;
     case 5:
          console.log('value is ' + val);
          break;
     default:
          console.log('Wrong');
          break;
}



let no = 13
if (no % 5 == 0) {
     console.log('Number is divied by 5');
} else {
     console.log('Number is not divied by 5');
}


let score = 72
if (80 <= score && 100 >= score) {
     console.log('A');
} else if (70 <= score && 89 >= score) {
     console.log('B');
} else if (60 <= score && 69 >= score) {
     console.log('C');
} else if (50 <= score && 59 >= score) {
     console.log('D');
} else if (0 <= score && 49 >= score) {
     console.log('F');
} else {
     console.log('wrong input');
}