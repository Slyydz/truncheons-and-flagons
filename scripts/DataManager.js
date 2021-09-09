export const getTeam = () => {
    return fetch("http://localhost:8088/team")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}


export const addTeam = (teamData) =>

{
    return fetch('http://localhost:8088/team', 
    {
        method: "POST",
        headers:
        {
            "content-type": "application/json"
        },

        body: JSON.stringify(teamData)

    })
    .then(response => response.json())
}




// export const addTeam = (playerData) =>

// {
//     return fetch('http://localhost:8088/players', 
//     {
//         method: "POST",
//         headers:
//         {
//             "content-type": "application/json"
//         },

//         body: JSON.stringify(playerData)

//     })
//     .then(response => response.json())
// }