import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { Users } from '../models/Users';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ HomeService ]
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor(private service:HomeService) { }
  
  user: Users;
  
  isloading: Number = 0;

  ngOnInit() {
    this.getDataUser();
  }

  getDataUser(){
    this.service.getDataUser().subscribe(
      res => {
        this.user = res.user;
        this.isloading = 1;
      },
      error => {
        console.log(error.json())
      }
    )
  }

  ngOnDestroy(){
    
  }
}
