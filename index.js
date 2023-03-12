var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassWord");
var logInBtn = document.querySelector("#logInBtn");
var secret = JSON.parse(localStorage.getItem("login"));


var dataList = [];

if (localStorage != null) {
    localStorage.setItem("login", JSON.stringify(dataList))
}








//       log in      //

logInBtn.addEventListener("click", addData);

function addData() {





    login = {
        email: userEmailInput.value,
        password: userPasswordInput.value
    }
    dataList.push(login);
    localStorage.setItem("login", JSON.stringify(dataList));
    validation(secret);
    clearData();



    // if(validation()){

    // }

};





function clearData() {
    userEmailInput.value = "";
    userPasswordInput.value = "";
}







function validation(secret) {

    if ((userEmailInput.value == "") || (userPasswordInput.value == "")) {


        document.querySelector("p").classList.replace("d-none", "d-block");
    }
    else {

        for (var i = 0; i < secret.length; i++) {
            if ((userPasswordInput.value != secret[i].password) && (userEmailInput.value != secret[i].email)) {

                return alert("sign up first");
            } else {
                window.open("file:///D:/js/session18/login/home.html", "_self");
            }

        }
    }


}






















