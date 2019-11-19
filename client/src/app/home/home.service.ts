import { Http, Headers } from '@angular/http';
import { URL } from '../api-src'
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Users } from '../models/Users';

@Injectable()
export class HomeService {

    constructor(private http:Http) { }

    public getDataUser(){
        const id:string = localStorage.getItem('user');

        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id': localStorage.getItem("user")
        });

        return this.http.get(
            `${URL}/user/${id}`,
            { headers:header }
        )
        .pipe(
           map((response)=>{
                return response.json()
           })
        )
    }
}