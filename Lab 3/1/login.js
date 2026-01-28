function validateForm() {
    let uName = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let phone_num = document.getElementById("Phone").value;
    let password = document.getElementById("Password").value;
    let conPass = document.getElementById("ConPass").value;

    if (uName.length < 5) {
        alert("Username must be longer than 5 characters.");
        return false;
    }

    if (!email.match(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone_num.length != 12) {
        alert("Phone Number must be 10 number and same format.");
        return false;
    }

    if (password.length < 8 && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)) {
        alert("Password mush be longer than 8 characters and must include uppercase, lowercase, number, and special character.");
        return false;
    }

    if (conPass != password){
        alert("Confirm Password must same Password");
        return false;
    }
}