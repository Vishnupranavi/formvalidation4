// var form=document.querySelector('#create-account-form');
// var usernameInput=document.querySelector('#username');
// var emailInput=document.querySelector('#email');
// // var mobileInput=document.querySelector('#mobile');
// var passwordInput=document.querySelector('#password');
// var confirmPasswordInput=document.querySelector('#confirm-password');
// var qualificationInput=document.querySelector('#qualification');

var form=document.getElementById('create-account-form');
var usernameInput=document.getElementById('username');
var emailInput=document.getElementById('email');
// var mobileInput=document.querySelector('#mobile');
var passwordInput=document.getElementById('password');
var confirmPasswordInput=document.getElementById('confirm-password');
//var checkboxInput=document.querySelector('#check');



form.addEventListener('submit',(event)=>{
   
    validateForm();
    if(isFormValid()==true){
      form.submit();
    }else{
       event.preventDefault();
    }
});
// prevent submit form even one field is not valid
function isFormValid(){
  const inputContainers=form.querySelectorAll('.input-group');
  let result=true;
  inputContainers.forEach((container)=>{
    if(container.classList.contains('error')){
      result=false;
    }
  });
  return result;

}
// To validate Form fields
function validateForm() {
  //username
   if(usernameInput.value.trim()==''){
     setError(usernameInput,'Name cannot be Empty');
   }
   else if(usernameInput.value.trim().length>15){
      setError(usernameInput,'Name must be max 15 Characters');
      
   }
   else{
    setSuccess(usernameInput);
    localStorage.setItem('username',usernameInput.value);
   }
   
   //email
   if(emailInput.value.trim()==''){
    setError(emailInput,'Provide Email Address');
   }
   else if(isEmailValid(emailInput.value)){
      setSuccess(emailInput);
      localStorage.setItem('unname',emailInput.value);
   }
   else{
    setError(emailInput,'Provide a Valid Email Address');
   }
  

  // qualification
  localStorage.setItem('qualification',qualificationInput.value);
  var qualificationInput=document.getElementById('qualification');
  var input=qualificationInput.firstElementChild;
  while(input){
    if(input.id=qualification){
      if(input.value=='select'){
      alert("please enter");
      localStorage.setItem('username',usernameInput.value);
      }
    }
    input=input.nextElementSibling;
    }
  
   //password
   if(passwordInput.value.trim()==''){
    setError(passwordInput,'Password cannot be Empty');
   }
   else if(passwordInput.value.trim().length<6||passwordInput.value.trim().length>20){
    setError(passwordInput,'Password Must be Between 6 and 20 characters');
   }
   else{
     setSuccess(passwordInput);
   }

   //confirm password
   if(confirmPasswordInput.value.trim()==''){
    setError(confirmPasswordInput,'Password Cannot be Empty');
   }
   else if(confirmPasswordInput.value!==passwordInput.value){
     setError(confirmPasswordInput,'Password Does Not Match');
   }
   else{
    setSuccess(confirmPasswordInput);
   }
  //  checkbox
  // if(!checkboxInput.checked){
  //     setError(checkboxInput,'please fill checkbox');
  //     }
  //     else{
  //        setSuccess(checkboxInput);
  //      }
  //   }

//   

      var checkboxInput=document.querySelector('#check');
      var text=document.querySelector('#text');
      if(checkboxInput.checked){
       result=true
       // alert(checkboxInput,'please');
      }if(!(checkboxInput.checked)){
        result=false
        alert("Enter terms and conditions");
      }
      
    
    }
  

function setError(element,errorMessage){
  const parent=element.parentElement;
  if(parent.classList.contains('success')){
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph=parent.querySelector('p');
  paragraph.textContent=errorMessage;
}
function setSuccess(element){
  const parent=element.parentElement;
  if(parent.classList.contains('error')){
    parent.classList.remove('error');
  }
  parent.classList.add('success');
  // const paragraph=parent.querySelector('p');
  // paragraph.textContent=successMessage;
}

function isEmailValid(email){
  const reg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
function ismobile(mobile){
  const reg=/^[0]?[789]\d{9}$/;
  return reg.test(mobile);
}
//  //mobile number
  //  if(mobileInput.value.trim()==''){
  //    setError(mobileInput,'Provide Mobile');
  //  }
  //  else if(ismobile(mobileInput.value)){
  //    setSuccess(mobileInput);
  //  }else{
  //    setError(mobileInput,'Give a valid mobile no');
  //  }
localStorage.setItem('username',document.getElementById('lastname').value);
localStorage.setItem('mobile',document.getElementById('mobile').value);
console.log(document.getElementById('mobile'.value));
alert("hai");