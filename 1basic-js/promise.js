// //// ##### promises

// let promise1 = new Promise((resolve, reject) => {
//      console.log("I am a promise");
// });
// let promise2 = new Promise((resolve, reject) => {
//      console.log("I am a promise");
//      resolve("Success");
// });
// let promise3 = new Promise((resolve, reject) => {
//      console.log("I am a promise");
//      reject("Failed");
// });

///////////

// function getData(data) {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                console.log('Data : ', data);
//                resolve("success");
//           }, 15000);
//      })
// }

// function getData(data) {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                console.log('Data : ', data);
//                reject("Failed");
//           }, 15000);
//      })
// }


/////////////

// const getPromise = () => {
//      return new Promise((resolve, reject) => {
//           console.log('i m a promise');
//           // resolve("success");
//           reject("Failed");
//      });
// };

// let promise11 = getPromise();

// promise11.then((res) => {
//      console.log('promise fulfilled', res);
// });

// promise11.catch((err) => {
//      console.log('promise failed', err);
// });


///////////// promise chain

const getData = (data) => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               console.log('Data : : ', data);
               resolve("success !")
          }, 2000);
     })
}

getData(1234)
     .then((res) => {
          return getData(2345);
     })
     .then((res) => {
          return getData(3456);
     })
     .then((res) => {
          return getData(4567);
     })
     .then((res) => {
          return getData(5678);
     })