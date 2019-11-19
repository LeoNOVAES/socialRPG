import { Http, RequestOptions, Headers } from "@angular/http"
import { Injectable } from "@angular/core"
import { from, Observable } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { Users } from '../models/Users'; 
import { URL } from '../api-src'

@Injectable()
export class ServiceLogin{

    constructor(private http:Http) {}

    public handlerLogin(data: any): Observable<any> {
        let header = new Headers({ "content-type":"application/json" });
        return this.http.post(`${URL}/auth`, JSON.stringify(data), { headers:header })
            .pipe(
                retry(1),
                error => error
            )
    }
    
    public handlerCadastro(data: Users): Observable<any>{
        const form = new FormData();

        form.append("name", data.name);
        form.append("email", data.email);
        form.append("bio", data.bio);
        form.append("password", data.password);
        if (data.mestre) form.append("mestre", data.mestre.toString());
        else form.append("mestre", "0");
        form.append("estado", data.estado);
        form.append("avatar", data.avatar);
        
        const header: Headers = new Headers();
        return this.http.post(
            `${URL}/user`,
            form,
            {headers:header}
        ).pipe(
            retry(5),
            error => error
        )
    }
}