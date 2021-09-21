export const Team = (input) => {
    return `<li id="${input.id}">${input.name} ${input.players.length}      ${input.score}</li>`
}

export const TeamRound = (team1, team2, team3) => {
    return `
    
        <h4>${team1}</h4>
        <input name="team1Score" type="text" placeholder="Input score for the ${team1}">

        <h4>${team2}</h4>
        <input name="team2Score" type="text" placeholder="Input score for the ${team2}">

        <h4>${team3}</h4>
        <input name="team3Score" type="text" placeholder="Input score for the ${team3}">

        <button id=RoundOneConfirm>Confirm</button>
    
    `
}