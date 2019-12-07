import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private route: Router) { }

  public type: Boolean;

  ngOnInit() {
    this.type = localStorage.getItem('type') == 'usuario' ? false : true;
    console.log(this.type)
    
  }

  logoff(){
    localStorage.clear();
    this.ngOnDestroy();
    this.route.navigate(['/']);
  }

  ngOnDestroy(){
    

  }

}
