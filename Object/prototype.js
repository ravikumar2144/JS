const prototype = 
{
    greet : function()
    {
        console.log("Greet",this.name);
    }
}

const pers = Object.create(prototype);
pers.name = "greet";

console.log(pers);
pers.greet();