import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[];
  public informationMessages: string;

  constructor(roster: RosterService) { 
    this.players = ['', '', '', '', '', '', '', ''];
    this.informationMessages = '';
  }

  registerContestants(){
    for(let current of this.players){
      if(current != null || current != ''){
        this.
      }
    }
  }

  ngOnInit(): void{
  }

}
