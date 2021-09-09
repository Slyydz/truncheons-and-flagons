import { getDropdown } from "../game/dropdown.js";



export const TeamList = (team1, team2, team3) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		postHTML += getDropdown(team1, team2, team3);

		return postHTML;
	
}