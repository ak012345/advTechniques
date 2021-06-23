import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, NgModel } from '@angular/forms'
import { RosterService } from 'src/app/services/roster.service'
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent with REAL SERVICE', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent,
        NgModel,
        NgForm
      ],
      providers: [RosterService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all players equal to an empty string', () => {
    component.players.forEach((player: string) => expect(player).toEqual(''))
  })

  describe('registerContestants', () => {
    it('all players should be empty', () => {
      component.registerContestants()
      expect(component.playerRoster.getContestants()).toEqual([])
    })

    it('roster should not be allowed to have duplicate names', () => {
      component.players = ['Anorak', 'Parzival', 'Aech', 'Anorak']
      component.registerContestants()
      expect(component.playerRoster.getContestants()).toEqual([])
    })

    it('roster has 2 players', () => {
      component.players = ['Anorak', 'Parzival']
      component.registerContestants()
      expect(component.playerRoster.getContestants()).toEqual(['Anorak', 'Parzival'])
    })

    it('roster has 4 players', () => {
      component.players = ['Anorak', 'Parzival', 'Aech', 'Art3mis']
      component.registerContestants()
      expect(component.playerRoster.getContestants()).toEqual(['Anorak', 'Parzival', 'Aech', 'Art3mis'])
    })

    it('roster has 8 players', () => {
      component.players = ['Anorak', 'Parzival', 'Aech', 'Art3mis', 'Sho','Daito','TGAP_Ogg','iRok']
      component.registerContestants()
      expect(component.playerRoster.getContestants()).toEqual(['Anorak', 'Parzival', 'Aech', 'Art3mis', 'Sho','Daito','TGAP_Ogg','iRok'])
    })

  })
});
