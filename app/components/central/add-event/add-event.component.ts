import { Component } from '@angular/core';
import { TranslateService } from '../../../translate';
import { AddEventService } from '../../../services/add-event.service';
import { Sport } from '../../../models/sport.model';
import { Country } from '../../../models/country.model';
import { Team } from '../../../models/team.model';
import { League } from '../../../models/league.model';
import { BetType } from '../../../models/bet-type.model';


@Component({
	selector: 'app-add-event',
	templateUrl: './add-event.component.html',
	styleUrls: ['./add-event.component.less']
})

export class AddEventComponent {
	sports: Sport[];
	countries : Country[];
	teams : Team[];
	leagues: League[];
	bettypes: BetType[];

	constructor(addEventService: AddEventService) {
		addEventService.getEvent().subscribe(data => {
			this.sports = data.json();
			// console.log(this.sports);

			if (this.sports) {
				this.selectSport(this.sports[0].SportId);
				if (this.countries) {
					this.selectCountry(this.countries[0].CountryCode);
				}
			}
		});	
	}

	selectSport(sportId : number) {
		let sport = this.sports.find(s => s.SportId === +sportId);
		this.countries = sport.Countries;
		this.teams = sport.Teams;
		this.bettypes = sport.BetTypes;
		if (this.countries) {
			this.selectCountry(this.countries[0].CountryCode);
		}
	}

	selectCountry(countryCode: string) {
		let country = this.countries.find(c => c.CountryCode === countryCode);
		this.leagues = country.Leagues;
	}
}