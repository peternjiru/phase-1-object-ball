function gameObject() {

    const game = {

        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,

                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,

                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,

                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,

                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,

                },
            },
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {

                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,

                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,

                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,

                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,

                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,

                },


            },

        },

    };

    return game;
}

// console.table(gameObject().home); // validate home level view
// console.table(gameObject().home.players); // validate home players level view
// console.table(gameObject().home.players["Alan Anderson"]); // validate player level view


// Test Call gameObject function and log its output:
// console.log(gameObject());
/*
{
  home: {
    teamName: "",
    colors: [...],
    players: {
      "Alan Anderson": {...},
      "Reggie Evans": {...}
    }
  },
  away: {
    ...
  }
}
*/

// Test Function to show teamName
/*
function homeTeamName() {
    let object = gameObject()
    return object["away"]["teamName"];
}

console.log(homeTeamName());
*/

/*
const tester = {

    "Fort wayne": {
        name: "sam",
        age: 12,
        school: "speedway",
    },

    "Indianapolis": {
        name: "tom",
        age: 2,
        school: "carmel",
    },

}

function showObj(obj) {
    for (let key in obj) {
        const ob = obj;
        //console.log(key + " " + Object.keys(obj[key])) //works
        console.log(key + " " + obj[key]);
    }
}

showObj(tester)



// Use built-in functions attached to the Object class to access keys, values, or entries:

//     Object.keys(oo) returns an array of all keys
//     Object.values(oo) returns an array of all values
//     Object.entries(oo) returns an array of arrays containing [key, value] together
console.log(Object.keys(tester));
console.log(Object.values(tester));
console.log(Object.entries(tester));

*/



function numPointsScored(name) {

    let playersObject = gameObject();

    for (let key in playersObject) {

        let eachPlayer = playersObject[key]["players"];

        if (eachPlayer[name]) {

            return eachPlayer[name]["points"]

        }
    }
}

console.log(numPointsScored("Brendan Haywood"))

function shoeSize(name) {

    let playersObject = gameObject();

    for (let key in playersObject) {

        let eachPlayer = playersObject[key]["players"];

        if (eachPlayer[name]) {

            return eachPlayer[name]["shoe"];

        }
    }
}
console.log(shoeSize("Jeff Adrien"))

function teamColors(name) {

    let teamsObject = gameObject();

    for (let keys in teamsObject) {

        if (teamsObject[keys]["teamName"] === name) {
            return teamsObject[keys]["colors"];
        }
    }

}
console.log(teamColors("Charlotte Hornets"));

function teamNames() {

    let allTeams = gameObject();
    let teamsArray = []
    for (let keys in allTeams) {
        teamsArray.push(allTeams[keys]["teamName"]);
    }
    return teamsArray;
}

console.log(teamNames());

function playerNumbers(name) {

    let numbersObject = gameObject();

    for (let keys in numbersObject) {

        if (numbersObject[keys]["teamName"] === name) {
            let theNumbers = numbersObject[keys]["players"];

            let numbersArray = []
            for (let keys in theNumbers) {
                numbersArray.push(theNumbers[keys]["number"]);
            }
            return numbersArray;

        }
    }

}

console.log(playerNumbers("Charlotte Hornets"));

function playerStats(name) {

    let playersObject = gameObject();

    for (let key in playersObject) {

        let eachPlayer = playersObject[key]["players"];

        if (eachPlayer[name]) {

            return eachPlayer[name]

        }
    }
}

console.log(playerStats("Alan Anderson"))

function bigShoeRebounds() {
    let playersObject = gameObject();
    let reboundsArray = [];
    for (let key in playersObject) {
        let eachPlayer = playersObject[key]["players"]

        for (let key in eachPlayer) {
            reboundsArray.push(eachPlayer[key]["rebounds"])
        }

    }

    //return (Math.max(...goalsArray))
    return reboundsArray
}

console.log(Math.max(...bigShoeRebounds()));

