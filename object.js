console.log("_____in object.js_____");
var myname = {
  name: "Vasanth",
  age: 22,
};

console.log(myname);

console.log("....Keys....");

for (let v in myname) {
  console.log(v);
}

console.log("....Values....");

for (let v in myname) {
  console.log(myname[v]);
}

for (let v in myname) {
  console.log(v + ": " + '"' + myname[v] + '"');
}

let arr = ["vasanth", "mahesh"];

console.log(arr);

for (let val of arr) {
  console.log(val);
}

let str = "vasanth";
for (let val of str) {
  console.log(val);
}

let arr1 = [
  { first: "John", last: "Doe" },
  { first: "Doe", last: "john" },
];
for (let val of arr1) {
  // console.log(val.first);
  // console.log(val.last);
  console.log(val);
}

let arr2 = [{ name1: "vasanth" }, { age: 23 }];
for (let [a, b] of arr2.entries()) {
  // -->   a ->  index   ,    b -> Value
  console.log(a, b);
}

var obj = new Object();
obj.name = "Vasanth";
obj.age = 23;
console.log(obj);
delete obj.name; // delete the object
console.log(obj);

var obj1 = { name: "vasanth" };
console.log(obj1["name"]);

console.log("______ Nested OBJ _______");

var ob = {
  name: "John", status: { role: "IT", skills: { ml: "C", script: "JS" } },
};


console.log(ob.status.skills.script);
console.log(ob["status"]["skills"]["script"]);
console.log(ob.status["skills"]["ml"]);

console.log("______ Nested OBJ with Array _______");

var ob1 = {
  name: "John",
  skills: [
    { ml: "Computer", time: "1pm" },
    { age: 23, time: "2pm" },
  ],
};

for (let i in ob1.skills) {
  console.log(i);
  console.log(ob1.skills);
  console.log(ob1.skills[i]);
  var n = ob1.skills[i];
  // console.log(n.age);
  for (let j in n) {
    console.log(j, ":", n[j]);
  }
}
