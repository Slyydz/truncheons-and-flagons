export const getTeam = () => {
    return fetch("http://localhost:8088/team")
        .then(response => response.json())
        .then(parsedResponse => {
            return parsedResponse;
        })
}

export const createDropDown1 = () => {

    let dropdown = document.getElementById('team1Drop');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose A Team';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = 'http://localhost:8088/team';

    fetch(url)
        .then(
            function (response) {
                // Examine the text in the response  
                response.json().then(function (data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        dropdown.add(option);
                    }
                });
            }
        )
}

export const createDropDown2 = () => {

    let dropdown = document.getElementById('team2Drop');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose A Team';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = 'http://localhost:8088/team';

    fetch(url)
        .then(
            function (response) {
                // Examine the text in the response  
                response.json().then(function (data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        dropdown.add(option);
                    }
                });
            }
        )
}

export const createDropDown3 = () => {

    let dropdown = document.getElementById('team3Drop');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose A Team';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = 'http://localhost:8088/team';

    fetch(url)
        .then(
            function (response) {
                // Examine the text in the response  
                response.json().then(function (data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        dropdown.add(option);
                    }
                });
            }
        )
}

export const createDropDownPlayers = () => {

    let dropdown = document.getElementById('dropPlayers');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose A Team';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = 'http://localhost:8088/team';

    fetch(url)
        .then(
            function (response) {
                // Examine the text in the response  
                response.json().then(function (data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        option.value = data[i].id;
                        dropdown.add(option);
                    }
                });
            }
        )
}


export const addTeam = (teamData) => {
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

 export const addPlayer = (input, id) => {
     return fetch(`http://localhost:8088/team/${id}`,
         {
             method: "PUT",
             headers:
             {
                 "content-type": "application/json"
             },

             body: JSON.stringify(input)

         })
         .then(response => response.json())
 }

