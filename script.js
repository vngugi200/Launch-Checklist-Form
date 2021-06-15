// Write your JavaScript code here!
window.addEventListener('load', function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json) {
           const planetInfor = document.getElementById("missionTarget");
           let index = Math.floor(Math.random()*json.length);
           missionTarget.innerHTML = `
        <ol>
        <li>Name: ${json[index].name}</li>
       <li>Diameter: ${json[index].diameter}</li>
       <li>Star: ${json[index].star}</li>
       <li>Distance from Earth: ${json[index].distance}</li>
       <li>Number of Moons: ${json[index].moons}</li>
      </ol>
      <img src="${json[index].image}">
  `;

      });
   });
   let form = document.querySelector("form");
   form.addEventListener('submit', function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuel = Number(fuelLevel.value);
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargo = Number (cargoMass.value)
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");


      if (pilotInput.value === ""|| copilotInput.value ===""|| fuelLevel.value ===""|| cargoMass.value ==="") {
         alert("All fields required!")
      } else if (!isNaN(pilotInput.value)|| !isNaN(copilotInput.value)){
         alert("The pilot and co-pilot names should be strings");
         } else if(isNaN(fuelLevel.value)|| isNaN(cargoMass.value) ){
            alert("the fuel level and cargo mass should be numbers.")
}
//faultyItems.style.visibility = "visible";
//pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
      if (!isNaN(pilotInput.value) || copilotInput.value){
         pilotStatus.innerHTML = `pilot${pilotInput.value} is ready for launch`
         copilotStatus.innerHTML = `copilot ${copilotInput.value} is ready for launch`

         }else {
            alert("The pilot and co-pilot names should be strings");

         }
       if (fuel < 10000 && cargo >10000 ){
          faultyItems.style.visibility = "visible";
          pilotStatus.innerHTML = `pilot${pilotInput.value} is ready for launch`
          copilotStatus.innerHTML = `copilot ${copilotInput.value} is ready for launch`
          fuelStatus.innerHTML = "fuel level too low for launch"
          cargoStatus.innerHTML = " there is too much mass for the shuttle to take off"
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatus.style.color = "red"


         }else if
         (fuel > 10000 && cargo >10000 ) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `pilot${pilotInput.value} is ready for launch`
         copilotStatus.innerHTML = `copilot ${copilotInput.value} is ready for launch`
         fuelStatus.innerHTML = "Fuel level high enough for launch"
          cargoMass.innerHTML = " there is too much mass for the shuttle to take off"
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatus.style.color = "red"


         }else if((fuel < 10000 && cargo < 10000 )){
            faultyItems.style.visibility = "visible";
          pilotStatus.innerHTML = `pilot${pilotInput.value} is ready for launch`
          copilotStatus.innerHTML = `copilot ${copilotInput.value} is ready for launch`
          fuelStatus.innerHTML = "fuel level too low for launch"
          cargoStatus.innerHTML = "Cargo mass low enough for launch "
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatus.style.color = "red"

         }else {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `pilot${pilotInput.value} is ready for launch`
            copilotStatus.innerHTML = `copilot ${copilotInput.value} is ready for launch`
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "shuttle is ready to launch"
            launchStatus.style.color = "green"

      
         }
         



                  
            
      


         
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
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
