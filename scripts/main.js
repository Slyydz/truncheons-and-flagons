import { getTeam } from "./DataManager.js";
import { addTeam } from "./DataManager.js";
import { createDropDown1, createDropDown2, createDropDown3 } from "./DataManager.js";
import { getDropdown1, getDropdown2, getDropdown3 } from "./game/dropdown.js";

 const contentElement = document.querySelector(".displayPart-1");
 const eventElement = document.querySelector(".container");

 eventElement.addEventListener("click", event => {
     if(event.target.id === "startBtn"){
         onStartClicked();
     }
    
 })


const onStartClicked = () => {
    contentElement.innerHTML = getDropdown1();
    contentElement.innerHTML += getDropdown2();
    contentElement.innerHTML += getDropdown3();
    createDropDown1();
    createDropDown2();
    createDropDown3();
    

}


//for drop down menu
eventElement.addEventListener("change", event => {
	switch (event.target.id){
        case "team1Drop":
            const teamName1 = event.target.value;
            console.log("Team 1:", teamName1);
            break;
        case "team2Drop":
            const teamName2 = event.target.value;
            console.log("Team 2:", teamName2);
            break;
        case "team3Drop":
            const teamName3 = event.target.value;
            console.log("Team 3", teamName3);
            break;
    }
})

eventElement.addEventListener('click', e =>

{
    e.preventDefault()
    if(e.target.id === 'record-Team')
    {
        const addTeams = document.querySelector('.addTeams').value

        const entries = 
        {
            name:addTeams
        }
addTeam(entries)
.then(response => getTeam())
    }
})