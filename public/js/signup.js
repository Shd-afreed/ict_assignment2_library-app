let name1 = document.getElementById("name1");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let password1 = document.getElementById("password1");
let error4 = document.getElementById("error4");
function validate(){
    
     if(validatename(name1)){

    }
    else{
      return false;
    }
   

    if(validateemail(email)){


    }
    else{
        return false;
    }

    
    if(validatenumber(number)){
        

    }
    else{
        return false;
    }

    if(validatepassword(password)){ 
         
        
    }
    else{
        return false;
    }

    

    if(matchPassword()){
      alert("registration complete");
    }
    else{
      return false;
    }
}


function validatenumber( number){
    let phoneno =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneno.test(number.value)){
        error2.innerHTML="";
        number.style.border="green solid";
        return true;
    }
    else{
        error2.innerHTML="Enter a valid number";
        error2.style.color="red";
        number.style.border="red solid";
        error2.style.fontFamily="italic";
        return false;
    }

}

function validatename(name1){
 
  if(name1.value!=""){
    name1.style.border="green solid ";
    error.innerHTML="";
        return true;
  }
  else{
            error.innerHTML="Enter a valid name";
            error.style.color="red";
             error.style.fontFamily="italic";
            name1.style.border="red solid ";
            return false;

  }
}


function validateemail(email){

    let reg=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(reg.test(email.value)){
           
        email.style.border="green solid ";
        error1.innerHTML="";
            return true;
    
        }
        else {
                 error1.innerHTML="Enter a valid email";
            error1.style.color="red";
             error1.style.fontFamily="italic";
            email.style.border="red solid ";
            return false;

        }

}

function validatepassword(password){

    let passreg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,15}$/

   
    if(passreg.test(password.value)){
       error3.style.color="green";
       error3.innerHTML="";
       password.style.border="green solid ";
        return true;
        

    }
    else{
        
        error3.innerHTML="Invalid password";
        error3.style.color="red";
         error3.style.fontFamily="italic";
        password.style.border="red solid ";
        return false;

    }



}






const indicator = document.querySelector(".indicator");
         const input = document.querySelector(".input");
         const weak = document.querySelector(".weak");
         const medium = document.querySelector(".medium");
         const strong = document.querySelector(".strong");
         const text = document.querySelector(".text");
         const showBtn = document.querySelector(".showBtn");
         let regExpWeak = /[a-z]/;
         let regExpMedium = /\d+/;
         let regExpStrong = /[A-Z]/;
         function trigger(){
           if(input.value != ""){
             indicator.style.display = "block";
             indicator.style.display = "flex";
             if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
             if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
             if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
             if(no==1){
               weak.classList.add("active");
               text.style.display = "block";
               text.textContent = "Weak";
               text.classList.add("weak");
             }
             if(no==2){
               medium.classList.add("active");
               text.textContent = "Medium";
               text.classList.add("medium");
             }else{
               medium.classList.remove("active");
               text.classList.remove("medium");
             }
             if(no==3){
               weak.classList.add("active");
               medium.classList.add("active");
               strong.classList.add("active");
               text.textContent = "Strong";
               text.classList.add("strong");
             }else{
               strong.classList.remove("active");
               text.classList.remove("strong");
             }
             showBtn.style.display = "block";
             showBtn.onclick = function(){
               if(input.type == "password"){
                 input.type = "text";
                 showBtn.textContent = "HIDE";
                 showBtn.style.color = "#23ad5c";
               }else{
                 input.type = "password";
                 showBtn.textContent = "SHOW";
                 showBtn.style.color = "#000";
               }
             }
           }else{
             indicator.style.display = "none";
             text.style.display = "none";
             showBtn.style.display = "none";
           }
         }


         function myFunction() {
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");
        }


        function matchPassword() {  
          var pw1 = document.getElementById("password");  
          var pw2 = document.getElementById("password1");  
          if(pw1.value.trim() != pw2.value.trim())  
          {  
             error4.innerHTML="password did not matching";
            error4.style.color="red";
            error4.style.fontFamily="italic";
          password1.style.border="red solid ";
          return false;
            
          } else {  
           
              error4.style.color="green";
       error4.innerHTML="";
       password1.style.border="green solid ";
        return true;
          }  
        }  