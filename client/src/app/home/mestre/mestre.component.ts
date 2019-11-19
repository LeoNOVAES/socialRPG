import { Component, OnInit, OnDestroy } from '@angular/core';
import { MestreService } from './mestre.service';
import swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tables } from 'src/app/models/Tables';

@Component({
  selector: 'app-mestre',
  templateUrl: './mestre.component.html',
  styleUrls: ['./mestre.component.css'],
  providers:[ MestreService ]
})

export class MestreComponent implements OnInit,OnDestroy {

  constructor( private fb: FormBuilder,private service: MestreService, private route: Router ) { }

  showForm: Boolean = false;

  formTable: FormGroup = this.fb.group({
    name: [null, Validators.required],
    bio: [null, Validators.required],
    limite: [null, Validators.required],
    estado: [null, Validators.required],
    avatar: [null]   
  });

  tables:Tables[];

  ngOnInit() {
    this.getMyTables();
   }

  changeFile(event) {
    this.formTable.controls['avatar'].setValue(event.target.files[0]);
  }

  getMyTables(){
    this.service.getMyTables()
    .subscribe((res)=>{
      this.tables = res.json();
    },
      error => { console.log(error)  }
    )
  }

  handlerRegister(){
    
    if(this.formTable.status == 'INVALID') return swal.fire({ type:'error', title:'preencha tudo' });

    this.service.handlerRegister(this.formTable.value).subscribe(
      res => {
        console.log(res.json())
        const response = res.json();
        this.formTable.reset();
        swal.fire({
          type: 'success',
          title: 'Parabens',
          text: response.message
        }).then(()=>{
          this.tables.push(res.json().mesa);
        })
      },
      error=>{
        const response = error.json()
        console.log(response)
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: response,
          footer: 'tente novamente!'
        })   
      }
    )
  }

  handlerDelete(id: String){
    this.service.handlerDelete(id)
    .subscribe(
      res => { 
        console.log(res.json())  
        this.tables = this.tables.filter((e)=>{
          return e._id != id;
        });
      },
      error => { console.log(error) }
    )
  }

  ngOnDestroy(){
    
  }

}
