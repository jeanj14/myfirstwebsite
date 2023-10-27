/*signup button motion */

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let emailField = document.getElementById("emailField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight="0";
    streetField.style.maxHeight="0";
    suburbField.style.maxHeight="0";
    CityField.style.maxHeight="0";
    ProvinceField.style.maxHeight="0";
    postalCodeField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable")
}

signupBtn.onclick = function(){
    nameField.style.maxHeight="60px";
    streetField.style.maxHeight="60px";
    suburbField.style.maxHeight="60px";
    CityField.style.maxHeight="60px";
    ProvinceField.style.maxHeight="60px";
    postalCodeField.style.maxHeight="60px";
    emailField.style.width="100%";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

/*pop up  */
popup = document.getElementById("popup")
signupBtn = document.getElementById("signupBtn")
okbtn = document.getElementById("okbtn")

function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}
 
signupBtn.addEventListener("click", openPopup)
okbtn.addEventListener("click", closePopup)