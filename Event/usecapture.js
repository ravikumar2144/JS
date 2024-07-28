function fun1()
{
    console.log("div block");
}

function fun2()
{
    console.log("Button tag");
}

var but1 = document.getElementById("b1");
var but2 = document.getElementById("b2");

but1.addEventListener("click", fun1 , false);
but2.addEventListener("click", fun2 , false);