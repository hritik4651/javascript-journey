const URL = 'https://official-joke-api.appspot.com/random_joke';

// const promise = fetch(URL);
// console.log(promise);

const jokes = async () => {
     let response = await fetch(URL); // return promise also.
     console.log(response);
     let data = await response.json(); // json also return promise
     console.log(data.setup);
}
jokes();



//////

const api = async () => {
     const url = 'https://randomfox.ca/floof/';
     const options = {
          method: 'GET',
          // headers: {
          //      'x-rapidapi-key': 'Sign Up for Key',
          //      'x-rapidapi-host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com'
          // }
     };

     try {
          const response = await fetch(url, options);
          const result = await response.text();
          console.log(result);
     } catch (error) {
          console.error(error);
     }
}

api();