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
  public matchesArray: Match[] = [];

  constructor(public playerRoster: RosterService) {
   
  }

  ngOnInit(): void {
    this.matchesArray = BracketsComponent.makeMatches(this.playerRoster.getContestants());

  }

  completeRound(){
    this.roundNumber++;
  }

 static makeMatches(players: string[]):Match[]{
    const myClonedArray  = [...players];
    let localMatchArray: Match[] = [];
    for(let index = 0; index < players.length; index+2){
      let currentMatch = new Match(players[index],players[index+1])
      localMatchArray.push(currentMatch);
    }   
    return  localMatchArray;
  }

}