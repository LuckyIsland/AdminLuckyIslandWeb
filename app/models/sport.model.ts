import { Country } from "./country.model";
import { Team } from "./team.model";
import { BetType } from "./bet-type.model";

export class Sport {
    SportId : number;
    SportName: string;
    Countries : Country[];
    Teams : Team[];
    BetTypes : BetType[];
}