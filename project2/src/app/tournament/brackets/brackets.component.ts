import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Match } from 'src/app/model/match';


@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent  {
  public informationMessage: string;
  public roundNumber: number = 1
  public matchesArray: Match[] = []

  constructor(public playerRoster: RosterService) {}

  ngOnInit(): void {
       
    for(let index = 0; index < this.playerRoster.contestants.length; index+2){
      let currentMatch = new Match(this.playerRoster.contestants[index],this.playerRoster.contestants[index+1])
      this.matchesArray.push(currentMatch);
    }    
   
  }

}
