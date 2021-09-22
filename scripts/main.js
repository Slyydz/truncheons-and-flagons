import { addPlayer, createDropDownPlayers, getTeam } from "./DataManager.js";
import { addTeam } from "./DataManager.js";
import { createDropDown1, createDropDown2, createDropDown3 } from "./DataManager.js";
import { getDropdown1, getDropdown2, getDropdown3, getDropdownPlayers } from "./game/dropdown.js";
import { TeamRound } from "./team/Team.js";
import { teamList } from "./team/TeamList.js";

const contentElement = document.querySelector(".displayPart-1");
const roundButton = document.getElementById("startRound");
const eventElement = document.querySelector(".container");
const introElement = document.querySelector(".createTab");
const playerDropd = document.querySelector(".dropdownPlayers");
roundButton.style.display = "none";

eventElement.addEventListener("click", event => {
    if (event.target.id === "startBtn") {
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
    roundButton.style.display = "block";
    introElement.innerHTML = "";


}

let teamName1;
let teamName2;
let teamName3;
//for drop down menu
eventElement.addEventListener("change", event => {
    switch (event.target.id) {
        case "team1Drop":
            teamName1 = event.target.value;
            console.log("Team 1:", teamName1);
            break;
        case "team2Drop":
            teamName2 = event.target.value;
            console.log("Team 2:", teamName2);
            break;
        case "team3Drop":
            teamName3 = event.target.value;
            console.log("Team 3:", teamName3);
            break;
    }
})

//createTeam
eventElement.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id === 'record-Team') {
        let addTeams = document.querySelector("input[name='addTeams']").value

        const entries =
        {
            name: addTeams,
            score: 0,
            date: Date.now(),
            players: []
        }
        if (addTeams != "") {
            addTeam(entries)
                .then(response => {
                    getTeam()
                    populateLeaderboard();
                    playerDropDown();
                    document.querySelector("input[name='addTeams']").value = "";
                })
        } else {
            document.querySelector("input[name='addTeams']").placeholder = "Please input a team name";
        }
    }
})

//add a player to a team
eventElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id == "record-Player") {
        let firstName = document.querySelector("input[name='firstName']").value
        let lastName = document.querySelector("input[name='lastName']").value
        let team = document.getElementById("dropPlayers").value;
        if (firstName == "" || lastName == "") {
            console.log("empty");
        } else {
            const player = {
                firstName: firstName,
                lastName: lastName,
            }

            getTeam().then(taco => {
                for (let count of taco) {
                    if (count.id == team) {
                        count.players.push(player);
                        console.log(count);
                        addPlayer(count, team)
                            .then(response => {
                                populateLeaderboard();
                                document.querySelector("input[name='firstName']").value = "";
                                document.querySelector("input[name='lastName']").value = "";
                                document.getElementById("dropPlayers").selectedIndex = 0;
                            });
                    }
                }
            })
            console.log(player, team);

        }
    }
})

//add points to a team
eventElement.addEventListener("click", event => {
    if(event.target.id.startsWith("confirm")){

        const getTeam1Score = document.querySelector(`input[name='team1Score--${teamName1}`).value;
        const getTeam2Score = document.querySelector(`input[name='team2Score--${teamName2}`).value;
        const getTeam3Score = document.querySelector(`input[name='team3Score--${teamName3}`).value;

        if(getTeam1Score == "" || getTeam2Score == "" || getTeam3Score == ""){
            console.log("please enter in scores");
        }else{
            if((+getTeam1Score + +getTeam2Score + +getTeam3Score) > 3){
                console.log((+getTeam1Score + +getTeam2Score + +getTeam3Score), "fail");
            }else{
                console.log("pass");
            }
        }
    }
})

eventElement.addEventListener("click", event => {
    if(event.target.id == "startRound"){
        contentElement.innerHTML = TeamRound(teamName1, teamName2, teamName3);
        roundButton.style.display = "none";
    }
})

//playerDropDown initialization
const playerDropDown = () => {
    playerDropd.innerHTML = getDropdownPlayers();
    createDropDownPlayers();
}

//Populate leaderboard function
const populateLeaderboard = () => {
    const leaderboardElement = document.querySelector(".leaderboard");
    const varUse = getTeam()
        .then(taco => {
            console.log(taco);
            leaderboardElement.innerHTML = teamList(taco);
        })
}

populateLeaderboard();
playerDropDown();
