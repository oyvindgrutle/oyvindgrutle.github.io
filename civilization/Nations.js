
class Nation {
    constructor(navn,leder,tittel,hovedstad) {
        this.navn = navn;
        this.leder = leder;
        this.tittel = tittel;
        this.hovedstad = hovedstad;
    }

    

}

class Player{
    constructor(navn, nation){
        this.navn = navn;
        this.nation = nation; 
    }

    greet() {
        console.log("Hello - the mighty ", this.nation.navn , "greets you.");
    }
}

