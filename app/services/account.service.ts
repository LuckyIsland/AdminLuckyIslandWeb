import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AccountService {
    private stringUrl = 'http://165.227.154.189/api/v1/';

    private isAuthorization = new Subject<boolean>();
    public isAuthorization$ = this.isAuthorization.asObservable();

    constructor(private http: Http) {}

    authorization(email: string, password: string): any {
        let url = this.stringUrl + 'login';
        const body = JSON.stringify({
            Email: email,
            Password: password
        });

        return this.http.post(url, body)
                        .map(resp => resp.json())
                        .catch((error: any) => Observable.throw(error))
    }

    getAccount(pin: number) {
        
    }

    logout() {
        this.isAuthorization.next(false);
    }

    sendCode(code: string, session: string): any {
        let url = this.stringUrl + 'checkcode';
        const body = JSON.stringify({
            Code: code,
            Session: session
        });

        return this.http.post(url, body)
                        .map(resp => resp.json())
                        .catch((error: any) => Observable.throw(error))
    }
}