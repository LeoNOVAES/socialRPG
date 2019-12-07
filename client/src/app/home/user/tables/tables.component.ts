import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { TablesModel } from './tables.model';
import { UserModel } from '../user.model';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css'],
    providers:[UserService]
})

export class TablesComponent implements OnInit {
    
    tables: TablesModel[] = new Array();
    members:UserModel[] = new Array();
    isMember = false;

    constructor( private service: UserService ) {}
    
    ngOnInit() {
        this.getMyTables();
    }

    public getMyTables(){
        this.service.getMyTables(localStorage.getItem('user'))
            .subscribe(
                res =>
                    this.tables = res.json()
            )
    }

    public showMembers(id){
        this.isMember = true;
        this.service.getMember(id)
            .subscribe(
                res => {
                    this.members = res.json().users
                    console.log(this.members)
                }    
            )
    }
} 
