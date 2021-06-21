import { Injectable } from '@angular/core';
import { Contestant } from 'app/model/stock';
@Injectable({
  providedIn: 'root'
})
export class RosterServiceService {
  private contestants: Contestant[];
  constructor() {
    this.contestants = [
      new Contestant('Anorak'),
      new Contestant('Second Stock Company'),
      new Contestant('Last Stock Company')
    ];
   }

   getContestants() : Contestant[] {
    return this.contestants;
  }

  addContestant(player: Contestant) {
    let foundPlayer = this.contestants.find(each => each.code === stock.code);
    if (foundPlayer) {
      return false;
    }
    this.contestants.push(  n true;
  }
}
