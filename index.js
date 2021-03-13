function email_validate() {


    var a = document.getElementById("email").value;
    var lowercase_of_a = a.toLowerCase();

    if (lowercase_of_a.length != 0) {
        document.getElementById("email").classList.add("border_color");
    } else {
        document.getElementById("email").classList.remove("border_color");
        document.getElementById("email").classList.remove("border_color2");
        document.getElementById("email").classList.remove("border_color1");
    }

    if (lowercase_of_a.endsWith("@gmail.com")) {
        document.getElementById("email").classList.remove("border_color");
        document.getElementById("email").classList.remove("border_color2");
        document.getElementById("email").classList.add("border_color1");
    } else if (lowercase_of_a.length != 0) {

        // document.getElementById("email").classList.remove("border_color1");
        document.getElementById("email").classList.add("border_color2");
    }

}

function pwd_validate() {


    var a = document.getElementById("pwd").value;

    if (a != 0) {
        document.getElementById("pwd").classList.add("border_color");
    } else {
        document.getElementById("pwd").classList.remove("border_color");
        document.getElementById("pwd").classList.remove("border_color2");
        document.getElementById("pwd").classList.remove("border_color1");
    }

    if (a.length >= 8) {
        document.getElementById("pwd").classList.remove("border_color");
        document.getElementById("pwd").classList.remove("border_color2");
        document.getElementById("pwd").classList.add("border_color1");
    } else if (a != 0) {

        // document.getElementById("email").classList.remove("border_color1");
        document.getElementById("pwd").classList.add("border_color2");
    }

}


function re_pwd_validate() {


    var a = document.getElementById("re-enter-pwd").value;

    if (a != 0) {
        document.getElementById("re-enter-pwd").classList.add("border_color");
    } else {
        document.getElementById("re-enter-pwd").classList.remove("border_color");
        document.getElementById("re-enter-pwd").classList.remove("border_color2");
        document.getElementById("re-enter-pwd").classList.remove("border_color1");
    }

    if (a.length >= 8) {
        document.getElementById("re-enter-pwd").classList.remove("border_color");
        document.getElementById("re-enter-pwd").classList.remove("border_color2");
        document.getElementById("re-enter-pwd").classList.add("border_color1");
    } else if (a != 0) {

        // document.getElementById("email").classList.remove("border_color1");
        document.getElementById("re-enter-pwd").classList.add("border_color2");
    }

}


document.getElementById("btn1").addEventListener("click", validate_React1);

function validate_React1() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;


    var lowercase_of_email = email.toLowerCase();

    if (!lowercase_of_email.endsWith("@gmail.com") && !lowercase_of_email.endsWith("@email.com")) {
        document.getElementById("React").innerHTML = "Enter your email correctly!    example : shahabs789@gmail.com ";
        return false;

    } else if (password.length < 8) {
        document.getElementById("React").innerHTML = "Your password length must be 8 character at least ! ";
        return false;
    } else if (document.getElementById("re-enter-pwd").value != password) {
        document.getElementById("React").innerHTML = "Enter Same password ! ";
        return false;
    } else {
        document.getElementById("React").innerHTML = "";
        return true;
    }
}