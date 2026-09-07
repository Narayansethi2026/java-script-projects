let dob = document.getElementById("dob");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click",function() {

    if(dob.value ==="") {

        result.textContent = "please selete your date of birth";
        return;
    }
    
   let birthDate = new Date(dob.value);
   let today = new Date(); 
   let age = today.getFullYear() - birthDate.getFullYear();

   let month = today.getMonth() - birthDate.getMonth();

   if(
    month < 0 || 
    (month === 0 && today.getDate() < birthDate.getDate())

   ){
    age--;
   }
   result.textContent = "your age is: " + age + "year";
});