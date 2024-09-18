//// Array [mutable]

const arr1 = [2, 3, 4, 7, 5, 3, 5, 7, 8, 4]
console.log(arr1);

const arr11 = ["toney", "stark", "mark"]
console.log(arr11);
console.log(arr11[1]);
console.log(arr11.length);

const arr2 = new Array(2, 3, 5, 6, 6, 8, 8, 9, 9, 4)
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
     console.log(`array[${i}] = ${arr2[i]}`);
}

for (const i of arr2) {
     console.log(i);
}




let sum = 0;
for (const i of arr1) {
     sum += i
}
console.log(`Average = ${sum / arr1.length}`);


const arr3 = [250, 322, 321, 261, 732];
let i = 0;
for (const val of arr3) {
     console.log(val);
     let offer = val / 10;
     arr3[i] = arr3[i] - offer
     console.log(arr3[i]);
     i++
}


/// ##### Array Methods

const arr4 = [22, 33, 44, 55, 66, 77, 88];

arr4.push(991);
console.log(arr4);

const delValue = arr4.pop();
console.log(delValue);
console.log(arr4);

const str = arr4.toString()
console.log(str);

const join = arr4.concat(arr1)
console.log(join);

arr4.unshift(11)
console.log(arr4);

arr4.shift()
console.log(arr4);

const newAr = arr4.slice(1, 3);
console.log(newAr);

arr4.splice(1, 2, 30, 40);
console.log(arr4);





const companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.shift();
console.log(companies);

companies.splice(2, 1, "ola")
console.log(companies);

companies.push("amazon")
console.log(companies);
