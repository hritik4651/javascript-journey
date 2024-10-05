//// Synchronous 

// console.log('block-1');
// console.log('block-2');
// console.log('block-3');
// console.log('block-4');
// console.log('block-5');

//// Asynchronous 

// console.log('block-66');

// setTimeout(() => {
//      console.log('Hello, After 2sec');
// }, 2000);

// console.log('block-77');
// console.log('block-88');
// console.log('block-99');
// console.log('block-100');




// //// ##### call Back.

// const sum = (a, b) => {
//      console.log((a + b));
// }

// const calculator = (a, b, sumCallback) => {
//      sumCallback(a, b);
// }

// calculator(10, 20, sum); // pre-defined function as a call back.

// calculator(15, 4, (a, b) => { // call back function
//      console.log((a * b));
// });


// //// ##### call Back hell.

function getData(dataId, getNextData) {
     setTimeout(() => {
          console.log('Data : ', dataId);
          if (getNextData) {
               getNextData();
          }
     }, 2000);
}

// getData(1, () => {            // callBack Hell. also called Pyramid of Doom.
//      getData(2, () => {
//           getData(3, () => {
//                getData(4);
//           });
//      });
// })


getData(1234, () => {                 // callBack Hell. also called Pyramid of Doom.
     getData(2345, () => {
          getData(3456, () => {
               getData(4567);
          });
     });
});