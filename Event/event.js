// function clk()
// {
//     console.log("Hello World!");
// }
function clk()
{
    console.log("Clicked");
    
}


//GETELEMENT

// document.getElementById("button1").innerHTML="Afterclicked"
document.getElementById("button1").addEventListener("click", clk);

// var but1 = document.getElementById("button1");
// but1.addEventListener("click", clk);
// but1.innerHTML="Afterclicked 1";
