import { Component } from '@angular/core';

import { TranslateService } from './translate';
import { AccountService } from './services/account.service';
import { ErrorService } from './services/error.service';

import { UserAccount } from './models/account.model';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'app';
	supportedLanguages: object[];
	isAuthorization: boolean;
	isShowCodeField: boolean;
	login: string;
	password: string;
	code: string;
	session: string;
	status : string;
	account: UserAccount;
	isLoading : boolean;

	constructor(private _translate: TranslateService, private accountService: AccountService, 
		private errorService: ErrorService) {

		accountService.isAuthorization$.subscribe(data => {
			this.isAuthorization = data;
			this.isShowCodeField = data;
		});
		this.login = 'pav.leshk@gmail.com';
		this.password = 'password';
		//this.isAuthorization = true;
	}

	ngOnInit(): void {
		this.supportedLanguages = [
			{ display: 'EN', value: 'en' },
			{ display: 'RU', value: 'ru' }
		];

		this.selectLang('en');
	}

	selectLang(lang: string) {
		this._translate.use(lang);
	}

	authorization() {
		if (this.login && this.password) {
			this.isLoading = true;
			this.accountService.authorization(this.login, this.password).subscribe(data => {
				if (data.Status === 0) {
					this.session = data.Results.Session;
					this.isShowCodeField = !this.isShowCodeField;
				}
				this.status = this.errorService.getErrorMessage(data.Status);
				this.isLoading = false;
			});
		}
	}

	sendCode() {
		if (this.code) {
			this.isLoading = true;
			this.accountService.sendCode(this.code, this.session).subscribe(data => {
				if (data.Status === 0) {
					this.account = data.Results;
					this.isAuthorization = true;
				}
				this.status = this.errorService.getErrorMessage(data.Status);
				this.isLoading = false;
			});
		}
	}
}
