import { Component, OnInit, ChangeDetectorRef,ChangeDetectionStrategy  } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Match } from 'src/app/model/match';
import { Routes, RouterModule } from '@angular/router';



@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BracketsComponent implements OnInit {
  public informationMessage: string;
  public roundNumber: number = 1
  public matchesArray: Match[] = [];
  public matchesExist: boolean;
 
  
  constructor(public playerRoster: RosterService,  private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.matchesArray = this.makeMatches(this.playerRoster.getContestants());

  }

  completeRound(){
    this.roundNumber++;
    this.updateContestants();
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

   updateContestants(){
    console.log(this.playerRoster.getContestants().join(','));
    this.playerRoster.clearRoster();
    console.log(this.playerRoster.getContestants().join(','));

    for(let currentMatch of this.matchesArray){
      this.playerRoster.addContestant(currentMatch.winner);
    }
    console.log(this.playerRoster.getContestants().join(','));

    this.matchesArray = this.makeMatches(this.playerRoster.getContestants());
    this.changeDetection.detectChanges();

  }

  public trackItem (index: number, value: string) {
    return value;
  }
}