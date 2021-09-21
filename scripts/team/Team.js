export const Team = (input) => {
    return `<li id="${input.id}">${input.name} ${input.players.length}      ${input.score}</li>`
}