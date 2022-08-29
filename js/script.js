//Question 1

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

let resultsContainer = document.querySelector(".results");

async function callAPI() {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    resultsContainer = ""

    for (let i = 0; i < 15; i++) {

        if (data[i].length === 15) {
            break
        };

        if (data[i].teamName.startsWith("C")) {
            continue
        };

        console.log(data[i].teamName);
        
        resultsContainer.innerHTML += `<div>${data.teamName}</div>`;
    }

}


callAPI()