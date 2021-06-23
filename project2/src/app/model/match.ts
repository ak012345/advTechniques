export class Match {
    private winnersName: string;
   
    constructor(public player1: string, public player2: string) {
        this.winnersName = player1;
    }

    setWinner(winner: string){
        this.winnersName = winner;
    }

    getWinner() {
        return this.winnersName;
    }

}