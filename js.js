function validate() {
    var email = document.getElementById("email").value;

    if (email == "") {
        alert("email cannot be empty");
    }
    else if (!email.include("@")) {
        alert("invalid email");
    }
    else if (!email.include(".")) {
        alert("invalid email");
    }
    else {
        alert("valid email")
    }    
}