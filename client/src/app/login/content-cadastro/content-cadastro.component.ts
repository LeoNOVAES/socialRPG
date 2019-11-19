import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { ServiceLogin } from '../service.login'; 
import swal from 'sweetalert2';
import { Router } from "@angular/router"


@Component({
  selector: 'app-content-cadastro',
  templateUrl: './content-cadastro.component.html',
  styleUrls: ['./content-cadastro.component.css'],
  providers:[ ServiceLogin ]
})
export class ContentCadastroComponent implements OnInit {
  

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: ServiceLogin, private route: Router) {  }

  ngOnInit() {

    this.form = this.fb.group({
      name:[null,Validators.required],
      email: [null, Validators.required],
      bio: [null, Validators.required],
      password: [null, Validators.required],
      mestre: [null, Validators.required],
      estado: [null, Validators.required],
      avatar: [null, Validators.required]
    });
  }

  changeFile(event){
    console.log(event)
    this.form.controls['avatar'].setValue(event.target.files[0]);
    console.log(this.form.value.avatar)
  }

  handlerCadastro() {
    
    if(this.form.invalid){
      swal.fire({
        type: 'warning',
        title: 'Preencha todos os campos'
      })
    }

    this.service.handlerCadastro(this.form.value).subscribe(
      response => {
          const res = response.json();
          swal.fire({
            type: 'success',
            title: 'Parabens',
            text: 'COnfirme para ir para a pagina principal'
          }).then(()=>{
            const data = {
              email:res.user.email,
              password:res.user.password
            }
            this.service.handlerLogin(data).subscribe(
              responseLog => {
                const resLog = responseLog.json();
                localStorage.setItem("event_token", resLog.token)
                localStorage.setItem("user", resLog.user._id)
                this.route.navigate(["/home"]);
              }
            )
          });
      }
    )
  }
}
