import { CanActivate,Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouterGuard implements CanActivate{
    
    constructor(private route :Router){}

    private isAuth : boolean = false

    canActivate(){

        if(localStorage.getItem('event_token')){
            this.isAuth = true;
        
        }else{
            this.isAuth = false;
            this.route.navigate(['/'])
        }

        return this.isAuth;
    }
}