
var obje = {name:'vasanth',age:23,deg:"B.E"}

sessionStorage.setItem("session",JSON.stringify(obje));

console.log(JSON.parse(sessionStorage.getItem("leo")));


// sessionStorage.clear();

// sessionStorage.removeItem("leo");

// window.sessionStorage.setItem("")


// sessionStorage.setItem("session", "session value"); 