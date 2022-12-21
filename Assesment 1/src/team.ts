export class Team {
    constructor(private id?: number, private abbreviation?: string, private logo?: string) {
        this.id = id;
        this.abbreviation = abbreviation;
        this.logo = logo;
    }

    getAbbreviation = (): string => {
        return this.abbreviation;
    }

    getId = (): number => {
        return this.id;
    }

    getLogo = (): string => {
        return this.logo;
    }
}