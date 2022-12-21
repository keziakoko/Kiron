import {Sport} from "./sport";
import {Team} from "./team";

export class SoccerGame {
    private gameId: string;
    private awayTeam: Team;
    private homeTeam: Team;
    private sport: Sport;
    private goals: Array<object>;

    constructor(awayTeamId?: number, homeTeamId?: number, awayTeamAbbr?: string, homeTeamAbbr?: string, goals?: Array<object>, gameDuration?: number, gameBreak?: number) {
        this.awayTeam = new Team(awayTeamId, awayTeamAbbr,'./team-badges/'+awayTeamAbbr+'.png');
        this.homeTeam = new Team(homeTeamId, homeTeamAbbr,'./team-badges/'+homeTeamAbbr+'.png');
        this.sport = new Sport(gameDuration, gameBreak, 11, 1);
        this.goals = goals;
        this.gameId = "game" + Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    getGoals = (): Array<Object> => {
        return this.goals;
    }

    getHomeTeam = (): Team => {
        return this.homeTeam;
    }
    getAwayTeam = (): Team => {
        return this.awayTeam;
    }

    getGameDuration = (): number => {
        return (this.sport.getGameDuration() * 2) + this.sport.getBreakDuration();
    }

    getBreakDuration = (): number => {
        return this.sport.getGameDuration() + this.sport.getBreakDuration();
    }

    createGame = (): void => {
        document.getElementById("gamesContainer").innerHTML += `
        <div class="game" id="${this.gameId}">
            <h1 class="teamName">${this.homeTeam.getAbbreviation()} vs ${this.awayTeam.getAbbreviation()}</h1>    
            <img class="teamLogo" src="${this.homeTeam.getLogo()}">
            <img class="teamLogo" src="${this.awayTeam.getLogo()}">
            <div class="outer">
                <div class="innerScoreBar"></div>
                <div class="break"></div>
                <div class="endGame"></div>
            </div>
        
            <div class="scoreCard">
                <div class="homeTeamScore">0</div>
                <div class="dash">-</div>
                <div class="awayTeamScore">0</div>
            </div>
        </div>`;

    }

    startGame = (): void => {
        let innerScoreBar = document.getElementById(this.gameId).querySelector(' .innerScoreBar');
        innerScoreBar["style"].animationName = `playGame`;
        innerScoreBar["style"].animationDuration = `${this.getGameDuration()}ms`;
        innerScoreBar["style"].animationFillMode = `forwards`;
        innerScoreBar["style"].animationTimingFunction = `linear`;
    }

    updateGame = (runningTimer: number): void => {
        if (runningTimer === this.getBreakDuration()) {
            this.showHalfTime();
        } else if (runningTimer === this.getGameDuration()) {
            this.showEndGame();
        } else {
            this.goals.forEach((item, index) => {
                if (runningTimer >= item["videoMS"]) {
                    if (item["teamID"] === this.homeTeam.getId()) {
                        this.incHomeTeamScore(index);
                    } else if (item["teamID"] === this.awayTeam.getId()) {
                        this.incAwayTeamScore(index);
                    }
                }
            })
        }
    }

    incHomeTeamScore = (index: number): void => {
        if (!this.goals[index]["marked"]) {
            let homeTeamScore = document.getElementById(this.gameId).querySelector(' .homeTeamScore');
            let score = parseInt(homeTeamScore.innerHTML) + 1;
            homeTeamScore.innerHTML = score.toString();
            this.goals[index]["marked"] = true;
        }
    }

    incAwayTeamScore = (index: number): void => {
        if (!this.goals[index]["marked"]) {
            let awayTeamScore = document.getElementById(this.gameId).querySelector(' .awayTeamScore');
            let score = parseInt(awayTeamScore.innerHTML) + 1;
            awayTeamScore.innerHTML = score.toString();
            this.goals[index]["marked"] = true;
        }
    }

    showHalfTime = (): void => {
        document.getElementById(this.gameId).querySelector(' .outer .break')['style'].display = "block";
    }

    showEndGame = (): void => {
       document.getElementById(this.gameId).querySelector(' .outer .endGame')['style'].display = "block";
    }
}