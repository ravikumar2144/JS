// var stop = setInterval(() =>    {
//                                     document.getElementById("repeat").innerHTML+="Hii"
//                                 }, 1000)


// function stopfunc(){
//     clearInterval(stop);
// }

function func(){
    document.getElementById("repeat").innerHTML+="Hii";
} 

var stop = setInterval(func,1000);


function stopfunc()
{
    clearInterval(stop);
}



