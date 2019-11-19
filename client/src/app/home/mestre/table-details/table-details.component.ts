import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MestreService } from '../mestre.service';
import { Tables } from 'src/app/models/Tables';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css'],
  providers:[MestreService]
})
export class TableDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MestreService) { }

  id: String = this.route.snapshot.params['id'];
  table :Tables;
  guests: Users[] = new Array();
  members: Users[] = new Array();

  ngOnInit() {
    this.getTable()
  }

  setGuests(user:Users){
    this.guests.push(user);
  }

  setMember(user: Users){
    this.members.push(user);
  }

  getTable(){
    this.service.getTable(this.id).subscribe(
      res=>{ 
        this.table = res.json()
        res.json().members.map((e)=>{
          this.service.getGuests(e).subscribe(
            resM => this.setMember(resM.json().user)
          )
        }); 

        res.json().requests.map((r) => {
          this.service.getGuests(r).subscribe(
            resG => this.setGuests(resG.json().user)
          )
        });
      }
    )
  }

  recuseMember(guest){
    this.service.recuseMember(guest, this.id).subscribe(
      res=>{ 
        console.log(res.json()) 
        this.guests = this.guests.filter((e)=>{
          return e._id != guest;
        });
      }
    )
  }


  acceptMember(guest) {
    this.service.acceptMember(guest, this.id).subscribe(
      res => {
        console.log(res.json())
        this.guests = this.guests.filter((e) => {
          this.members.push(e);
          return e._id != guest;
        });
      }
    )
  }

}
