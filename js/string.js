//// String [immutable]

let str1 = "Toney"
console.log(str1);

let str2 = 'stark'
console.log(str2);

let str3 = new String("mark42")
console.log(str3);

console.log(str1[1]);
console.log(str1[2]);
console.log(str1.length);


/// ##### Template Literals

let str4 = `Toney Stack`
console.log(str4);
console.log(`${str4} whos is Ironmen !`);
console.log(`${str4}\t whos is Ironmen !`);


/// ##### String Methods
let str5 = "    Mark42    "
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());
console.log(str5.trim(1, 4));
console.log(str5.slice(4, 7));
console.log(str5.concat(str1));
console.log(str5.replace("2", "5"));
console.log(str5.charAt(7));







let user = "ironmen"
console.log(`@${user}${user.length}`);