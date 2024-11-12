let names = document.getElementById("name");
let emails = document.getElementById("email");
let dateOfBirth = document.getElementById("dob");
let password = document.getElementById("password");

function validate() {
  if(names.value.trim()== "" || password.value.trim()== "" || dateOfBirth.value== "" || checkBox.c){
    alert("Please fill the form");
  }
  else if(password.value.length<6){
    alert("Please enter six character above");
  }
  else{
    alert("Successfully registered")
  }

}

function backpage(){
  window.history.back();
}