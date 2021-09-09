export const getDropdown = (team1, team2, team3) => {
    return `
    <select name="selectTeam1" id="selectTeam1">
        <option value="team${team1.id}">${team1.name}</option>
        <option value="team${team2.id}">${team2.name}</option>
        <option value="team${team3.id}">${team3.name}</option>
    </select>

    <select name="selectTeam2" id="selectTeam2">
        <option value="team${team1.id}">${team1.name}</option>
        <option value="team${team2.id}">${team2.name}</option>
        <option value="team${team3.id}">${team3.name}</option>
    </select>

    <select name="selectTeam3" id="selectTeam3">
        <option value="team${team1.id}">${team1.name}</option>
        <option value="team${team2.id}">${team2.name}</option>
        <option value="team${team3.id}">${team3.name}</option>
    </select>
    `
}