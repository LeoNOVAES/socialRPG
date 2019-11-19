import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Tables } from '../../models/Tables'
import swal from 'sweetalert2/*/sweetalert2.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})

export class UserComponent implements OnInit {

  tables: Tables[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getTablesState();
  }

  handlerLike(mesa: String){
    this.service.handlerLike(mesa).subscribe(
      res => {
        this.tables = this.tables.filter((e)=>{
          return e._id != mesa;
        })
      }
    )
  }

  handlerDislike(mesa: String) {
    this.service.handlerDislike(mesa).subscribe(
      res => {
        console.log(res);
        this.tables = this.tables.filter((e) => {
          return e._id != mesa;
        })
      }
    )
  }

  getTablesState() {
    this.service.getDataTable().subscribe(
      res => {
          console.log(res)
          this.tables = res 
        }
      )
  }
} 
