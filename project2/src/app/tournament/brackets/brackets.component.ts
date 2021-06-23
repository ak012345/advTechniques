import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
  public informationMessage: string;
  
  constructor(public playerRoster: RosterService) { 
    this.informationMessage = this.playerRoster.getContestants().join(', ');
  }

  ngOnInit(): void {
    console.log(this.playerRoster.getContestants().join(', '));
    this.informationMessage = this.playerRoster.getContestants().join(', ');
  }

}
