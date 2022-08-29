//Question 1

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

let resultsContainer = document.querySelector(".results");

// we need the code in an async function as we are using the await keyword
async function callAPI() {

    try {
    const response = await fetch(url);

    const data = await response.json();

    // always log and inspect the data you get from an API call to see what properties it has
    console.log(data);

    const teams = data

    resultsContainer.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
        // we only want to display a maximum of 15 teams
        // there will be less than 15 if any team names begin with "C"
        // use break to leave the loop
        if (i === 15) {
            break
        };

        const teamName = teams[i]. teamName;
        const city = teams[i].location;

        // we are checking for small "c" and big "C"
        // instead of checking for both small "c" and big "C" we can make the teamName lowercase and just check for "c"
        if (teamName.toLowerCase().startsWith("c") /*|| teamName.startsWith("C")*/) {
            continue
        };
        
        resultsContainer.innerHTML += `<div class="card">
                                        <h4>${teamName}</h4>
                                        <p>${city}</p>
                                        </div>`;
    }
} catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error)
}

}

// call the function
// without this nothing will happen
callAPI()