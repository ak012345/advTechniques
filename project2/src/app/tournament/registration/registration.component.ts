import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public players: string[]= new Array(8).fill('');
  public informationMessage: string;

  constructor(public playerRoster: RosterService) { 
  }

  registerContestants(){
    this.playerRoster.clearRoster();
    
    let isProperLength = (this.players.length == 2 || this.players.length == 4 || this.players.length == 8)

    for(let current of this.players){
      if((current != null || current != '') && isProperLength){
        this.playerRoster.addContestant(current)
      } else {
        this.informationMessage = "Inappropriate number of contestants"
      }
    }

    if(isProperLength){
     this.informationMessage = this.playerRoster.getContestants().join();
    }
  }

 identify(index: number) {
      return index;
   }

  ngOnInit() {
  }
}
