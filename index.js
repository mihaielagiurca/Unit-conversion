let userInput = document.getElementById("input-el")
let meters = document.getElementById("meters");
let feet = document.getElementById("feet");
let liters = document.getElementById("liters");
let gallons = document.getElementById("gallons");
let mass = document.getElementById("mass");
let pounds = document.getElementById("pounds");


  function convertMetersToFeet() {
    let number = parseFloat(userInput.value);
    let feet = (number * 3.28084).toFixed(3);;
    return meters.innerHTML = `${number} meters = ${feet} feet |`;
  }

  function convertFeetToMeters() {
    let number = parseFloat(userInput.value);
    let meter = (number * 0.3048).toFixed(3);;
    return feet.innerHTML = `${number} feet = ${meter} meters`;
  }
   
  function convertLitersToGallons(){
    let number = parseFloat(userInput.value)
    let gallons = (number * 3.78541).toFixed(3);
    return liters.innerHTML= (`${number} liters = ${gallons} gallons |`);
  }

  function convertGallonsToLiters(){
    let number = parseFloat(userInput.value)
    let liters = (number * 0.264172).toFixed(3);
    return gallons.innerHTML= (`${number} gallons = ${liters} liters`);
  }
  function convertMassToPounds(){
    let number = parseFloat(userInput.value)
    let pounds = (number * 2.20462).toFixed(3);
    return mass.innerHTML= (`${number} mass = ${pounds} pounds |`);
  }

  function convertPoundsToMass(){
    let number = parseFloat(userInput.value)
    let mass = (number * 0.453592).toFixed(3);
    return pounds.innerHTML= (`${number} pounds = ${mass} mass`);
  }

  userInput.onclick = function(){
    userInput.value = "";
  }
 