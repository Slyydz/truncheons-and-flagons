import { getTeam } from "./DataManager.js";
import { TeamList } from "./team/Team.js";
import { addTeam } from "./DataManager.js";

 const contentElement = document.querySelector(".displayPart-1");
 const eventElement = document.querySelector(".container");

 eventElement.addEventListener("click", event => {
     if(event.target.id === "startBtn"){
         onStartClicked();
     }
    
 })


const onStartClicked = () => {
    const teamFetch = getTeam().then(team => {
        contentElement.innerHTML = TeamList(team[0], team[1], team[2]);
     })

    
}


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