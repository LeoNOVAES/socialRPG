import { Http, RequestOptions, Headers } from "@angular/http"
import { Injectable } from "@angular/core"
import { from, Observable } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { Tables } from '../../models/Tables'
import { URL } from '../../api-src'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class MestreService{
    
    

    constructor(private http: Http) { }

    handlerRegister(data: Tables): Observable<any>{
        
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id': localStorage.getItem("user")
        });

        const form: FormData = new FormData();
        form.append("name",data.name);
        form.append("avatar", data.avatar);
        form.append("bio", data.bio);
        form.append("estado",data.estado);
        form.append("limit", data.limite.toString());

        return this.http.post(
            `${ URL }/table`,
            form,
            {headers:header}
        ).pipe(
            retry(5),
            error => error
        )
    }

    handlerDelete(id: String){

        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'id':id,
            'mestre': localStorage.getItem("user")
        });

        return this.http.delete(
            `${URL}/table`,
            {headers:header}   
        ).pipe(
            retry(5),
            error => error
        )
    }

    getTable(id:String){
        console.log(id)
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'user': localStorage.getItem("user"),
            'idTable':id
        });

        return this.http.get(
            `${URL}/table`,
            { headers: header }
        ).pipe(
            retry(5),
            error => error
        )
    }

    getMyTables(){
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'mestre': localStorage.getItem("user")
        });
        
        return this.http.get(
            `${ URL }/tables/mestre`,
            {headers:header}
        ).pipe(
            retry(5),
            error => error
        )
    }

    getGuests(id:String){
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token")
        });

        return this.http.get(
            `${URL}/user/${id}`,
            { headers: header }
        ).pipe(
            retry(5),
            error => error
        )
    }

    recuseMember(user, mesa) {
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'user': user,
            "mestre": localStorage.getItem('user'),
            'mesaid': mesa
        });

        return this.http.get(
            `${URL}/recuse`,
            { headers: header }
        ).pipe(
            retry(5),
            error => error
        )
    }

    acceptMember(user, mesa){
        const header: Headers = new Headers({
            'Authorization': localStorage.getItem("event_token"),
            'user':user,
            "mestre":localStorage.getItem('user'),
            'mesaid':mesa
        });

        return this.http.get(
            `${URL}/accept`,
            { headers: header }
        ).pipe(
            retry(5),
            error => error
        )
    }
}