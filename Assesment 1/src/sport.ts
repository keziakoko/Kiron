import {Team} from "./team";

export class Sport {
    constructor(private gameDuration?: number, private breakDuration?: number, private numberPlayers?: number, private amountBreaks?: number) {
        this.gameDuration = gameDuration;
        this.breakDuration = breakDuration;
        this.numberPlayers = numberPlayers;
        this.amountBreaks = amountBreaks;
    }

    getGameDuration = (): number => {
        return this.gameDuration;
    }

    getBreakDuration = (): number => {
        return this.breakDuration;
    }

    getNumberPlayers = (): number => {
        return this.numberPlayers;
    }

    getAmountBreaks = (): number => {
        return this.amountBreaks;
    }
}




