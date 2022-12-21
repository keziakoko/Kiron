import {SoccerGame} from "./soccerGame";

let games: Array<SoccerGame> = [];

window.onload = function () {
    getData();
    window["startGames"] = startGames;
};

let getData = (): void => {
    fetch('./football-playout.json')
        .then((response) => {
            response.json().then(json => {
                json.data.forEach(item => {
                    games.push(new SoccerGame(item.awayTeamID, item.homeTeamID, item.awayTeamAbbr, item.homeTeamAbbr, item.goals, json.config.msPerGamePeriod, json.config.break));
                });
                drawGames();
            })
        });
}

let drawGames = (): void => {
    for (let i = 0; i < games.length; i++) {
        games[i].createGame();
    }
}

let startGames = (): void => {
    let runningDuration = 0;
    let gameTime = games[0].getGameDuration();
    let breakTime = games[0].getBreakDuration();

    for (let i = 0; i < games.length; i++) {
        games[i].startGame();
    }

    let gameTimer = setInterval(() => {
        if (runningDuration === breakTime) {
            runningDuration += 1000;
        } else if (runningDuration === gameTime) {
            clearInterval(gameTimer);
        } else {
            runningDuration += 1000;
        }

        for (let i = 0; i < games.length; i++) {
            games[i].updateGame(runningDuration);
        }
    }, 1000);


}