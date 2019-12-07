import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceLogin } from "../service.login";
import { from, Observable } from 'rxjs';
import { Router } from "@angular/router"
import swal from 'sweetalert2';

@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
  styleUrls: ['./content-login.component.css'],
  providers:[ServiceLogin]
})
export class ContentLoginComponent implements OnInit {

  public log: Observable<any>


  formLogin: FormGroup;

  constructor(private fb:FormBuilder, private service:ServiceLogin, private route: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email:[null,  Validators.required],
      password:[null, Validators.required ]
    });
  }

  handlerLogin(){

    console.log(this.formLogin)

    this.service.handlerLogin(this.formLogin.value)
    .subscribe(
      res => { 
        const user = res.json();
        localStorage.setItem("event_token",user.token);
        localStorage.setItem("user",user.user._id);
        localStorage.setItem("state", user.user.estado)
        localStorage.setItem("type", user.user.mestre ? "mestre" : "usuario");
        this.route.navigate(["/home"]);
      },
      error => {
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Senha ou email incorretos',
          footer: 'tente novamente!'
        })    
      }
    )
  }
}
