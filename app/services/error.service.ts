import { Injectable } from '@angular/core';
import { TranslateService } from '../translate/translate.service';

@Injectable()
export class ErrorService {
    private error = [null, 'invalidLoginOrPassword', 'badRequest', 'wrongCode'];

    constructor(private translateService: TranslateService) {}

    getErrorMessage(errorCode: number) : string {
        return this.translateService.instant(this.error[errorCode]);
    }  
}
