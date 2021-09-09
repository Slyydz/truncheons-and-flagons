import { getTeam } from "./DataManager.js";
import { TeamList } from "./team/Team.js";

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
