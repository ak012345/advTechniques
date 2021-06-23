import { Component, OnInit, ChangeDetectorRef,ChangeDetectionStrategy  } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Match } from 'src/app/model/match';


@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class BracketsComponent implements OnInit {
  public informationMessage: string;
  public roundNumber: number = 1
  public matchesArray: Match[] = [];
  public matchesExist: boolean;
  public winnerFound: boolean = false;
  
  constructor( public playerRoster: RosterService) {
  }

  ngOnInit(): void {
    this.matchesArray = this.makeMatches(this.playerRoster.getContestants());
  }

  completeRound(){
    this.roundNumber++;
    this.declareWinner();
    this.updateContestants();
  }

  declareWinner(){
    let currentWinners : string [] = this.matchesArray.map(match => match.winner);
    if (currentWinners.length == 1) {
      this.informationMessage = currentWinners.shift();
      this.winnerFound = true;
    }
  }

   updateContestants(){

    this.playerRoster.clearRoster();
    for(let currentMatch of this.matchesArray){
      this.playerRoster.addContestant(currentMatch.winner);
    }
    
    this.matchesArray = this.makeMatches(this.playerRoster.getContestants());

  }
  makeMatches(players: string[]):Match[]{
 
    const myClonedArray  = [...players];
    let localMatchArray: Match[] = []
    while (myClonedArray.length > 0) {
        let player1Local = myClonedArray.shift();
        let player2Local = myClonedArray.shift();
        let currentMatch = new Match(player1Local, player2Local);
        localMatchArray.push(currentMatch)
        this.matchesExist = true;
    }
    return localMatchArray
   }

}