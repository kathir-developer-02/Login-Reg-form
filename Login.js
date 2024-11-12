let names1 = document.getElementById("name");

let password = document.getElementById("password");

 function show(){
  // document.getElementById("result-name").innerHTML=names1;
  // console.log(names1);

  // document.getElementById("result-password").innerHTML=password;
  // console.log(password);

  if(names1.value.trim()== "" || password.value.trim()== "" ){
    alert("please fill the form");
  }
  else if(password.value.length<6){
    alert("Please enter password above six character");
  }

  else{
    alert("Thank you for the responce");
  }
 }