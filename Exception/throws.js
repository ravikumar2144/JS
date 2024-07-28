
console.log("****   throw   *****");

window.onerror = function(t , y , u) { console.log("Error"); console.log("f1"+t,y,u); }

const b = 0
// const b = 5
try{
    if(b==0)
    {
        throw("can't divide by zero")           //  Throw Error message by us
    }
    else
    {
        var c=20/b;
    }
}
catch(e)
{
    console.log("Error!!!" + e);
}
finally
{
    console.log(c);
}


const d =10;
d = 30;
