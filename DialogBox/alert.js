function alertbox(){
    alert("Alert");
}

function confirmbox(){
    confirm("Confirm");
}

function promptbox(){
    var a = prompt("Enter your name", "");       // prompt("label", "value")
    if(a){
        console.log(a);
    }   
}