// function debounching ( search, timedelay) {
// return function(...args){
//     setTimeout(() => {
//         search(...args)
//     }, timedelay);
// }

// }

// const search = (query) => {
//     console.log("Searching for " , query);
// }

// let debounchfunction = debounching(search , 5000)


// function debounching(searchFn, delay) {
//     let timer; // timer reference
//     return function (...args) {
//       clearTimeout(timer); // clear previous timer before setting a new one
//       timer = setTimeout(() => {
//         searchFn(...args);
//       }, delay);
//     };
//   }

//   // Search function (simulates backend API call)
//   function search(query) {
//     document.getElementById("result").textContent = "Searching for: " + query;
//     console.log("Searching for:", query);
//   }

//   // Create debounced version of search
//   const debouncedSearch = debounching(search, 1000); // 1 second delay

//   // Event listener for input typing
//   const input = document.getElementById("searchBox");
//   input.addEventListener("input", (e) => {
//     debouncedSearch(e.target.value);
//   });


// Debouncing function
function debounching(searchFn, delay) {
    let timer; // store timeout reference
    return function (...args) {
      clearTimeout(timer); // clear previous timeout before creating new one
      timer = setTimeout(() => {
        searchFn(...args);
      }, delay);
    };
  }
  
  // Search function (simulate API or search action)
  function search(query) {
    document.getElementById("result").textContent = "Searching for: " + query;
    console.log("Searching for:", query);
  }
  
  // Create debounced version of search
  const debouncedSearch = debounching(search, 2000); // 1 second delay
  
  // Listen for input typing
  const input = document.getElementById("searchBox");
  input.addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
  });
  

//   function throttling (){
// let lastcall =0 
// return function (){

// }
//   } 
// console.log(Date.now())

function throttling(func, delay) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= delay) {
        func(...args);
        last = now;
      }
    };
  }
  
  function logMessage() {
    console.log("Function executed at:", new Date().toLocaleTimeString());
  }
  
  const throttledFn = throttling(logMessage, 1000);

  throttledFn()
  throttledFn()

  
  

  
  


// search("j")
// search("ja")
// search("jav")
// search("java")
// search("javas")
// search("javasc")
// search("javascr")
// search("javascri")
// search("javascrip")
// search("javascript")

    

