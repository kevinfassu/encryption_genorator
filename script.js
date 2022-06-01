// Assignment code here
var lowercase = "qazwsxedcrfvtgbyhnujmikolp";
var uppercase = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
var numbers = "0123456789";
var speacial = "!@#$%^&*()_+-={}|\:;''<,>.?/";
var uppercasetest;
var numberstest;
var speacialtest;
var encryptionlen;
var passwordlen;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// first check the length of the password
function findlength(){
  passwordlen = prompt("How many Characters?(8-92)");
    if (passwordlen < 8){
      alert("How many Characters?(8-92)")
      findlength();
    }else if (passwordlen > 92){
      alert("How many Characters?(8-92)")
      findlength();
    }else{
      alert("Now what do you want in it")
    }
    return passwordlen

}

function testUppercase(){
  uppercasetest = prompt("Do you want uppercase letters?(Yes or No)");
    uppercasetest = uppercasetest.toLowerCase();

    if (uppercasetest === null){
      alert(" Yes or No");
      testUppercase();

    }else if (uppercasetest === "yes"){
      uppercasetest = true;
      return uppercasetest;

    }else if (uppercasetest === "no"){
      uppercasetest = false;
      return uppercasetest;
    
    }else {
      alert("answer Yes or No");
      testUppercase();
    }
    return uppercasetest;
}

// whether the user wants to include numbers
function testNumbers(){
  numberstest = prompt("Do you want numbers?(Yes or No)");
    numberstest = numberstest.toLowerCase();

    if (numberstest === null){
      alert(" Yes or No");
      testNumbers();

    }else if (numberstest === "yes"){
      numberstest = true;
      return numberstest;

    }else if (numberstest === "no"){
      numberstest = false;
      return numberstest;
    
    }else {
      alert("Yes or No");
      testNumbers();
    }
    return numberstest;
}

// determine what the user wants to include
function testSpeacial(){
  speacialtest = prompt("Do you wannt speacial characters?(Yes or No)");
    speacialtest = speacialtest.toLowerCase();

    if (speacialtest === null){
      alert("answer Yes or No");
      testSpeacial();

    }else if (speacialtest === "yes"){
      speacialtest = true;
      return speacialtest;

    }else if (speacialtest === "no"){
      speacialtest = false;
      return speacialtest;
    
    }else {
      alert("answer Yes or No");
      testSpeacial();
    }
    return speacialtest;
}

 //Function used to take input from the previous functions and generate a password using random numbers
function generatePassword(){
  determineLength();
  console.log(passwordLength);
 testUppercase();
  console.log(uppercasetest);
  testNumbers();
  console.log(numberstest);
  testSpeacial();
  console.log(speacialtest);

var characters = lowercaseChar;
var password = "";
if (uppercasetest && numberstest && speacialtest){
  characters += uppercase + numbers + speacial;

}else if (uppercasetest && numberstest){
  characters += uppercase + numbers;

}else if (numberstest && speacialtest){
  characters += numbers + speacial;

}else if (uppercasetest && speacialtest){
  characters += uppercase + speacial;

}else if (uppercasetest){
  characters += uppercase;

}else if(numberstest){
  characters += numbers;

}else if (speacialtest){
  characters += speacial;

}else{
  characters === lowercase;
}

  for(var i = 0; i < passwordlen; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
