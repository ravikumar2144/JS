function checkform()
{
    var f = document.forms["form1"]["fname"].value;
    console.log(f);
    if(f=="")
    {
        document.getElementById("req").innerHTML="** required **";
        alert("Please enter");
        return false;
    }
    else
    {
        // document.getElementById("req").style.display="none";
        document.getElementById("req").innerHTML = f;
    }
}



// Syntax :

// document.forms["formName"]["inputName"].value;