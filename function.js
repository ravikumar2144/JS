console.log("_____in funtion.js_____")
function funname(){
    return "Vasanth";
}
console.log(funname());

function fname(a){
    console.log(a);
}
fname("vasanth");


function addNumber(a,b){
    return a + b;
}

console.log("____________________________",addNumber(2,3));




console.log("Function Expression")
let func = function add(a,b)
{
    return a*b;
}
console.log(func(2,3));
// let func1=func(2,3)
// console.log(func1);

//Arrow Function
var arrfunc = () =>  console.log("Arrow Function");   
arrfunc();


function funarg() 
{
    console.log("Params",arguments)
}
funarg(3,3,2,6,7,9,8,5)