const person = {
    greet()
    {
        console.log("Greet");
    }
}

const per1 = Object.create(person);
per1.greet();



// const person = {
//     greet: function(){
//         console.log("Greet");
//     }
// }

// const person1 = Object.create(person);
// person1.greet()
