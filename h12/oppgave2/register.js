class Deltaker {
    constructor(navn, ovelse1, ovelse2, ovelse3) {
        this.navn = navn;
        this.ovelse1 = ovelse1;
        this.ovelse2 = ovelse2;
        this.ovelse3 = ovelse3;
        this.poeng1 = poeng1;
        this.poeng2 = poeng2;
        this.poeng3 = poeng3;

    }
}

function setup() {
    let deltaker; //skal lagre data om deltakeren
    let inpNavn = document.getElementById("navn");
    let inpOvelse1 = document.getElementById("ovelse1");
    let inpOvelse2 = document.getElementById("ovelse2");
    let inpOvelse3 = document.getElementById("ovelse3");
    let inpPoeng1 = document.getElementById("poeng1");
    let inpPoeng2 = document.getElementById("poeng2");
    let inpPoeng3 = document.getElementById("poeng3");
    let divVisdeltaker = document.getElementById("visdeltaker");

    let btnRegistrer = document.getElementById("registrer");
    btnRegistrer.addEventListener("click", registrerDeltaker);

    let deltaker1 = [];

    function registrerDeltaker() {
        let navn = inpNavn.value;
        let ovelse1 = inpOvelse1.value;
        let ovelse2 = inpOvelse2.value;
        let ovelse3 = inpOvelse3.value;
        let poeng1 = Number(inpPoeng1.value);
        let poeng2 = Number(inpPoeng2.value);
        let poeng3 = Number(inpPoeng3.value);
        let sumpoeng = (poeng1 + poeng2 + poeng3);

        deltaker = new Deltaker(navn, ovelse1, ovelse2, ovelse3, poeng1, poeng2, poeng3);
        deltaker1.push(deltaker);

divVisdeltaker.innerHTML = `
Kjære deltaker med navn ${deltaker.navn} <br>` +
`Du fikk ${poeng1} poeng på øvelsen ${ovelse1} <br>`+
`Du fikk ${poeng2} poeng på øvelsen ${ovelse2} <br>`+
`Du fikk ${poeng3} poeng på øvelsen ${ovelse3} <br>` + 
"Du fikk til sammen " + sumpoeng + " poeng";

    }
}