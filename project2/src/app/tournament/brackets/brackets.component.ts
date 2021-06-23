import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Match } from 'src/app/model/match';


@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
  public informationMessage: string;
  public roundNumber: number = 1
  public matchesArray: Match[] = [];
  public matchesExist: boolean;
  constructor(public playerRoster: RosterService) {
   
  }

  ngOnInit(): void {
    this.matchesArray = this.makeMatches(this.playerRoster.getContestants());

  }

  completeRound(){
    this.roundNumber++;
  }

 makeMatches(players: string[]):Match[]{
 
    const myClonedArray  = [...players];
    let localMatchArray: Match[] = []
    while (myClonedArray.length > 0) {
        let player2Local = myClonedArray.pop();
        let player1Local = myClonedArray.pop();
        let currentMatch = new Match(player1Local, player2Local);
        localMatchArray.push(currentMatch)
        this.matchesExist = true;
    }
    return localMatchArray.reverse()
   }

}