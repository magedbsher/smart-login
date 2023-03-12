var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassWord");
var userNameInput = document.getElementById("userName");
var signUpBtn = document.querySelector("#signUpBtn");
var existEmail = JSON.parse(localStorage.getItem("login"));
var dataList = [];


if (localStorage != null) {
    localStorage.setItem("login", JSON.stringify(dataList))
}




//     sign up  //




signUpBtn.addEventListener("click", signUp);


function signUp() {


    if ((userEmailInput.value == "") || (userPasswordInput.value == "") || (userNameInput.value == "")) {
        document.querySelector("p").classList.replace("d-none", "d-block");
        document.querySelector("h6").classList.replace("d-block", "d-none");

    } else {
        if (emailExistence() == true) {
            alert("your email is already exist")
        }


        else if ((validateEmail() == true) && (validatePassword() == true)) {







            login = {
                name: userNameInput.value,
                email: userEmailInput.value,
                password: userPasswordInput.value
            }




            dataList.push(login);
            localStorage.setItem("login", JSON.stringify(dataList));



            document.querySelector("p").classList.replace("d-block", "d-none");
            document.querySelector("h6").classList.replace("d-none", "d-block");
        } else if (validateEmail() == false) {
            alert("your email must contain @gmail.com");
        } else if (validatePassword() == false) {
            alert("your password must be from 3 to 8 digits");
        } else if ((emailExistence() == false)) {
            alert("your email is already exist")
        }


        clear();

    }

};




function clear() {
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
}




function validateEmail() {
    var regex = /[A-Za-z0-9]{4,12}@gmail.com$/;    // email must begin with at least 4 characters and max 12 charcharacters
    if (regex.test(userEmailInput.value) == true) {
        return true

    } else { return false }
};



function validatePassword() {
    var regex = /[0-9a-zA-Z]{5,10}$/; // password must be at least 5 digits and max 10 digits (numbers or characters)
    if (regex.test(userPasswordInput.value) == true) {
        return true;
    } else { return false; }
};


// email validation existence check



function emailExistence() {

    for (var i = 0; i < existEmail.length; i++) {

        if ((userEmailInput.value== existEmail[i].email)) {
            alert("your email is already exist");
            return true;
        } else { return false }
    }
}



