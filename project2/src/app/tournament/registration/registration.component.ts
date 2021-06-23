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
    for(let current of this.players){
      if(current != null || current != ''){
        this.playerRoster.addContestant(current)
      }
    }
    let rosterLength = this.playerRoster.contestants.length;
    console.log(rosterLength);
    if(!(rosterLength == 2 || rosterLength == 4 || rosterLength == 8) ){
      this.informationMessage = "Inappropriate number of Contestants";
      this.playerRoster.clearRoster();
    } else {
     this.informationMessage = this.playerRoster.getContestants().join();
    }
  }

 identify(index: number) {
      return index;
   }

  ngOnInit() {
  }
}
