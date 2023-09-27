function moneyAnswer(){
  var password = document.getElementById("partyQuestion");
  var passwordText = password.value;
  if(passwordText=="Democratic"){
    return true; 
  }
  alert("L. Try Again")
  return false;
}