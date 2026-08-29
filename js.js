// let heading = document.getElementById("heading");
// let textinput = document.getElementById("textinput");
// let changebtn = document.getElementById("changebtn");

// changebtn.addEventListener("click", function () {

//    heading.textContent = textinput.value
// });
// let heading = document.getElementById("heading");
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//   heading.innerText = "thank you bro";
//   heading.innerHTML = "chal nikal"
// });
let password = document.getElementById("password");
let showBtn = document.getElementById("showBtn");
let message = document.getElementById("message");

showBtn.addEventListener("click",function () {
  if (password.type === "password") {
    
      password.type = "text";
      showBtn.textContent = "hide";
  }
  else {
    password.type = "password";
    showBtn.textContent = "show";
  }

});