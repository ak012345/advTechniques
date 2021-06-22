import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[];
  public informationMessage: string;

  constructor(protected playerRoster: RosterService) { 
    this.players = ['', '', '', '', '', '', '', ''];
    this.informationMessage = '';
  }

  registerContestants(){
    for(let current of this.players){
      if(current != null || current != ''){
        this.playerRoster.addContestant(current)
      }
    }
    let rosterLength = this.playerRoster.contestants.length;
    if(!(rosterLength == 2 || rosterLength == 4 || rosterLength == 8) ){
      this.informationMessage = "Inappropriate number of Contestants";
    } else {
     this.informationMessage = this.playerRoster.getContestants().join();
    }
  }

  ngOnInit(): void{
  }

}
