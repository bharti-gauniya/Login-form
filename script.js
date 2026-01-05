function login()
{
    let user=document.getElementById("username").value;
    let pwd=document.getElementById("pwd").value;
    let r=document.getElementById("result");
    if(user === "" || pwd === "") {
        r.innerText="Please fill all fields.";
        r.style.color="red";
    }
    else if(user === "user" && pwd === "12345") {
        alert("Successfully Signed in!!");
        user.value =" ";
        pwd.value =" ";

    }
    else{
        r.innerText="Invalid!!";
        r.style.color="red";
    }

}