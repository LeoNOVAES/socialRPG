import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  logoff(){
    localStorage.clear();
    this.ngOnDestroy();
    this.route.navigate(['/']);
  }

  ngOnDestroy(){
    

  }

}
