//  CONCATENATION

var arr = [1,2,3,4]
var arr1 = ['a',"b","c"];
var arr2 = [5,6,7];
var cc = arr.concat(arr1,arr2);
console.log(cc);


//LENGTH

var a = [0,1,2,3,4,5,6,7,8,9];
console.log(a.length);
var b = a.length-1;
console.log(b);


//ARRAYCREATION

var y = new Array("Vasanth",23);
console.log(y);
var s = new Array();
s.name = "vasanth"
s.age = 23
s[0]=5
s[1]=2
s[2]=3
s[3]=4
console.log(s);
console.log("*******************************");

var f = []
f.name = "Vasanth"
console.log(f);
console.log("*******************************");

var b = [1,2,3,4,5,6,7,8];
console.table(b);
console.log(b);
console.log(b.toString());
console.log(b.join(" ^ "));
console.log("*******************************");

var c =  b.slice(2,5);
console.log("slice",c);
console.log("*******************************");

var d = b.splice(2,6);
console.log("splice",d);

//PUSH and POP

var e = [1,2,3,4,5,6,7,8]
var f = e.pop()
console.log("POP",e);
console.log(f);

var g = e.push("M")
console.log("PUSH",g);
console.log(e);

