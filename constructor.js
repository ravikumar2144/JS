console.log("________ Constructor ________________");

function cons1()
        {
            this.name = "Vasanth";
            this.age = 23;
        }

var obj = new cons1();
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
