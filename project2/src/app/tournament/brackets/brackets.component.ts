import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
  public informationMessage: string;
  
  constructor(protected roster: RosterService) { 
    this.informationMessage = '';
  }

  ngOnInit(): void {
  }

}
