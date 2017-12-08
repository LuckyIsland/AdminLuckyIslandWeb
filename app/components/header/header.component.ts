import { Component } from '@angular/core';

import { TranslateService } from '../../translate';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    isShowLanguageList: boolean;

    constructor(private _translate: TranslateService, private accountService: AccountService) {}

    selectLang(lang: string) {
        this._translate.use(lang);
    }

    logout() {
        this.accountService.logout();
    }
}