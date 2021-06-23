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
  public matchesArray: Promise<Match[]>;

  constructor(public playerRoster: RosterService) {
    this.matchesArray = BracketsComponent.makeMatches(this.playerRoster.getContestants()).then(result => {
     return result;
     });
   
  }

  ngOnInit(): void {
  }

  completeRound(){
    this.roundNumber++;
  }

 static async makeMatches(players: string[]):Promise<Match[]>{
    let localMatchArray: Match[] = [];
    for(let index = 0; index < players.length/2; index+2){
      let currentMatch = new Match(players[index],players[index+1])
      console.log(currentMatch.winnersName);
      localMatchArray.push(currentMatch);
    }   
    return  localMatchArray;
  }

}