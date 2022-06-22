// set varriables and split string

var upperCase = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
var upperCaseA = upperCase.split("");
var lowerCase = "qazwsxedcrfvtgbyhnujmikolp";
var lowerCaseA = lowerCase.split("");
var numbers = "123456789";
var numbersA = numbers.split("");
var symbols = "!@#$%^&*()_+{}|:<>?/.,;][";
var symbolsA = symbols.split("");


// this is my main function
function generatePassword(){
  var allCharacters = [];
  var passResult = [];


// here's where i grab those set variables from line 3
  var characterLength = prompt("How Many Characters Do You Want Your Password To Be? (8-100)");
// this is the length of the password 
  if (characterLength < 8 || characterLength > 100){
    alert("No Less Than 8 No More Than 100");
  }
// rest of password conditions
  else {
    if(confirm("Do You Want Upper Case")) {
      Array.prototype.push.apply(allCharacters, upperCaseA); 
    }

    if (confirm("Do You Want Lower Case")) {
      Array.prototype.push.apply(allCharacters, lowerCaseA);
    }

    if (confirm("DO You Want Numbers")) {
      Array.prototype.push.apply(allCharacters, numbersA);
    }

    if (confirm("Do You Want Symbols")) {
      Array.prototype.push.apply(allCharacters, symbolsA);
    }

    if (allCharacters.length === 0) {
      alert("Pick At Least 1 Characteristic");
    }
// this will grab the information and generate a random result
    else {
      for (var i = 0; i < characterLength; i ++) {
        var mix = Math.floor(Math.random()*allCharacters.length);
        passResult += allCharacters[mix]
      }
    }
// putting this on the page
    document.getElementById("Password").innerHTML = passResult;
  }
}
