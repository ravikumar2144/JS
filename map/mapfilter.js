// MAP 


var arr1 = [0,1,2,3,4];
var arr2 = arr1.map(add);
function add(value)
{
    return value*10
}
console.log(arr2);

console.log(Array.isArray(arr1));

console.log(arr1.reverse());




//FILTER

var ar = [7,23,12,34,5,17,30];
var ar1 = ar.filter(mul);
function mul(value)
{
    return value >= 18;
}
console.log("After filter", ar1);
console.log("Before filter", ar);




var a = [{name: "Vas",age:17},{name: "ram",age:24},{name: "hari",age:10}];
var b = a.filter(age);
function age(value)
{
    return value.age<18;
}
console.log(b);