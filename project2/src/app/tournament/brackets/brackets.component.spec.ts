import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('makeMatches', () => {
   
    it('should return 2 matches', () => {
      let players = ['Anorak', 'Parzival', 'Aech', 'Art3mis']
      let matches = component.makeMatches(players);
      expect(matches.length).toEqual(2)
    })

    it('should return Anorak', () => {
      let players = ['Anorak', 'Parzival', 'Aech', 'Art3mis']
      let matches = component.makeMatches(players);
      expect(matches[0].player1).toEqual('Anorak')
    })
   
    it('should return Parzival', () => {
      let players = ['Anorak', 'Parzival', 'Aech', 'Art3mis']
      let matches = component.makeMatches(players);
      expect(matches[0].player2).toEqual('Parzival')
    })

    it('should return Aech', () => {
      let players = ['Anorak', 'Parzival', 'Aech', 'Art3mis']
      let matches = component.makeMatches(players);
      expect(matches[1].player1).toEqual('Aech')
    })

    it('should return Art3mis', () => {
      let players = ['Anorak', 'Parzival', 'Aech', 'Art3mis']
      let matches = component.makeMatches(players);
      expect(matches[1].player2).toEqual('Art3mis')
    })
  });
});
