import { Team } from "./Team.js";

export const teamList = (input) => {

    let inputHTML = "";

    for (let inputCard of input){
        inputHTML += Team(inputCard);
    }
    return inputHTML;
}