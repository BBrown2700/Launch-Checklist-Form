// Write your JavaScript code here!
function hasNumber(myString) {
   return /\d/.test(myString)
}
function hasAlphaChar(myString) {
   return /[a-zA-Z]/.test(myString)
}
function hasNonAlphaNumChar(myString) {
   return /\W/g.test(myString)
}
function fuelCheck(fuelNumber) {
   return fuelNumber > 10000 
}
function cargoCheck(cargoNumber) {
   return cargoNumber < 10000 
}
function resetForm() {
   document.getElementById('launchFormID').reset();
}
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}">
            `;
      const button = document.querySelector("button");
      button.addEventListener('click', (event) => {
         let pilotName = document.getElementById("pilotName");
         let copilotName = document.getElementById("copilotName");
         let fuelLevel = document.getElementById("fuelLevel");
         let cargoMass = document.getElementById("cargoMass");
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               alert("One of the fields is blank, please fill with value.")
               event.preventDefault()
            }
         else if (hasNumber(pilotName.value) || hasNonAlphaNumChar(pilotName.value)) {
               alert("The pilot name includes at least one number or non-alphabetic character, please remove.")
               event.preventDefault()
         }
         else if (hasNumber(copilotName.value) || hasNonAlphaNumChar(copilotName.value)) {
               alert("The copilot name includes at least one number or non-alphabetic character, please remove.")
               event.preventDefault()
         } 
         else if (!hasNumber(fuelLevel.value) || hasNonAlphaNumChar(fuelLevel.value) || hasAlphaChar(fuelLevel.value)) {
               alert("Fuel level includes at least one non-numeric character, it should only be numbers.")
               event.preventDefault()
         }
         else if (!hasNumber(cargoMass.value)|| hasNonAlphaNumChar(cargoMass.value) || hasAlphaChar(cargoMass.value)) {
               alert("Cargo Mass includes at least one non-numeric character, it should only be numbers.")
               event.preventDefault()
         }
         else if (!fuelCheck(fuelLevel.value) && !cargoCheck(cargoMass.value)) {
               document.getElementById("pilotName").style.borderColor = "green";
               document.getElementById("copilotName").style.borderColor = "green";
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
               document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
               document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
               document.getElementById("fuelLevel").style.borderColor = "red";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for journey";
               document.getElementById("cargoMass").style.borderColor = "red";
               document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch.";
               document.getElementById("launchStatus").style.color = "red";
               alert("Fuel level is too low and cargo mass is too high for launch.");
               event.preventDefault()
         }
         else if (fuelCheck(fuelLevel.value) && !cargoCheck(cargoMass.value)) {
               document.getElementById("pilotName").style.borderColor = "green";
               document.getElementById("copilotName").style.borderColor = "green";   
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
               document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
               document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey.";
               document.getElementById("fuelLevel").style.borderColor = "green";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for journey";
               document.getElementById("cargoMass").style.borderColor = "red";
               document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch.";
               document.getElementById("launchStatus").style.color = "red";
               alert("Cargo mass is too high for launch.");
               event.preventDefault()
         }
         else if (!fuelCheck(fuelLevel.value) && cargoCheck(cargoMass.value)) {
               document.getElementById("pilotName").style.borderColor = "green";
               document.getElementById("copilotName").style.borderColor = "green";   
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
               document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
               document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
               document.getElementById("fuelLevel").style.borderColor = "red";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for journey";
               document.getElementById("cargoMass").style.borderColor = "green";
               document.getElementById("launchStatus").style.color = "red";
               document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch."
               alert("Fuel level is too low for launch.");
               event.preventDefault()
         }
         else {
               document.getElementById("pilotName").style.borderColor = "green";
               document.getElementById("copilotName").style.borderColor = "green";   
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
               document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
               document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey.";
               document.getElementById("fuelLevel").style.borderColor = "green";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for journey";
               document.getElementById("cargoMass").style.borderColor = "green";
               document.getElementById("launchStatus").style.color = "green";
               document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch."
               event.preventDefault()
               resetForm();
            }
         });
      });   
   });
});
/*This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

//console.log("name");