// function res(){
//     console.log("promise resolved successfully");
// }

let countValue = new Promise(function (resolve, reject) {
  resolve("promise resolved");
});

countValue
  .then(function res(a) {
    console.log("promise resolved successfully  " + a);
  })
  .catch((err) => {
    console.log(err);
  });

// countValue.then(function res(){ console.log(result) } );

//dummyAPI...
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
