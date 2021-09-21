import { addPlayer, createDropDownPlayers, getTeam } from "./DataManager.js";
import { addTeam } from "./DataManager.js";
import { createDropDown1, createDropDown2, createDropDown3 } from "./DataManager.js";
import { getDropdown1, getDropdown2, getDropdown3, getDropdownPlayers } from "./game/dropdown.js";
import { teamList } from "./team/TeamList.js";

const contentElement = document.querySelector(".displayPart-1");
const eventElement = document.querySelector(".container");
const playerDropd = document.querySelector(".dropdownPlayers");

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


}


//for drop down menu
eventElement.addEventListener("change", event => {
    switch (event.target.id) {
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
