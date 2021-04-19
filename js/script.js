// Toggle Menu
// Auto Close navbar
var menu = document.getElementById("menu");
menu.style.maxHeight = "0px";
function toggleMenu() {
    if(menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "700px"
    } else {
        menu.style.maxHeight = "0px";
    }
}
    
    
// Loading effect 
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
}

// Form Validation 
function validation() {
    var form = document.getElementById("form");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var questions = document.getElementById("questions").value;
    var error = document.getElementById("error");
    error.style.padding = "10px";
  

    
    var text;
    
    // Phone Validation
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter Your Valid Phone Number";
        error.innerHTML = text;
        return false;
    }

    // Email Validation
     if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Your Valida Email Address";
        error.innerHTML = text;
        return false;
    }
   
    // Questions Validation

   if(questions.length <= 3) {
        text = "Please Enter at least 50 characters";
        error.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true; 
}
