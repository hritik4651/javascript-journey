////////////////////////////////////////////////////////////////////////# Immediately invoked function expressions

// it is used for immediately run and protect from global scope pollution.

(function chai() { // named iife
     console.log("DB is CONNECTED");
})();


((arg) => { // un-named iife
     console.log(`${arg} CONNECTED`);
})("NoSql");
