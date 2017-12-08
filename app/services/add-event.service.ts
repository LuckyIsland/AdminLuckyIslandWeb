import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class AddEventService {
    private stringUrl = 'http://165.227.154.189/api/v1/';

    constructor(private http: Http) {}

    getEvent(): any {
         let url = this.stringUrl + 'sportswithrelations';
        
         return this.http.get(url);
    }
}