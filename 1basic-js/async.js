/////// async - await

function api(data) {
     return new Promise((res, reject) => {
          setTimeout(() => {
               console.log('dataaaa! : ', data);
               res(200);
          }, 2000);
     })
}

// async function getData() {
//      await api(1);
//      await api(2);
//      await api(3);
//      await api(4);
//      await api(5);
// }



////////// EFII function

(async () => {
     await api(1);
     await api(2);
     await api(3);
     await api(4);
})();