export const getTeam = () => {
    return fetch("http://localhost:8088/team")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}