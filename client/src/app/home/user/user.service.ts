import { Http, Headers } from '@angular/http';
import { URL } from '../../api-src'
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

    constructor(private http: Http) { }

    public getDataTable() {

        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'iduser':localStorage.getItem('user'),
            'state': localStorage.getItem('state')
        });

        return this.http.get(
                `${ URL }/tables`,
                { headers: header }
            )
            .pipe(map((res)=>{
                return res.json()
            })
        )
    }

    public handlerLike(mesa: String){

        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id':localStorage.getItem('user'),
            'mesa':mesa
        });

        return this.http.post(
            `${URL }/like`,
            null,
            {headers:header}
        )
        .pipe(
            map((res)=>{
                return res.json()
            })
        )
    }

    public handlerDislike(mesa: String){
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id': localStorage.getItem('user'),
            'mesa': mesa
        });

        return this.http.post(
            `${URL}/dislike`,
            null,
            { headers: header }
        )
            .pipe(
                map((res) => {
                    return res.json()
                })
            )
    }

    public getMyTables(id: String){
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id': localStorage.getItem('user')            
        })

        return this.http.get(
            `${URL}/table/${id}`,
            { headers: header }
        ).pipe(
            map((res)=>{
                return res;
            })
        )
            
    }

    public getMember(id){
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id': localStorage.getItem('user')
        })

        return this.http.get(
            `${URL}/table/members/${id}`,
            { headers: header }
        ).pipe(
            map((res) => {
                return res;
            })
        )
    }
}