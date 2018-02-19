// @ts-check

function setup() {
    let inpNavn = document.getElementById("navn");
    let inpMasse = document.getElementById("masse");
    let inpVolum = document.getElementById("volum");
    let inpPris = document.getElementById("pris");

    let divFyllesUt = document.getElementById("fyllesUt");
    let divListe = document.getElementById("liste");
    let divPenger = document.getElementById("penger");
    divPenger.innerHTML = "penger: "+0+"kr";

    let btnRegistrer = document.getElementById("registrer");
    btnRegistrer.addEventListener("click", registrer);

    let btnVisListe = document.getElementById("visListe");
    btnVisListe.addEventListener("click", visListe);

    let tingeneMine = [];

    function registrer() {
        let Navn = inpNavn.value;
        let Masse = inpMasse.valueAsNumber;
        let Volum = inpVolum.valueAsNumber;
        let Pris = inpPris.valueAsNumber;

        if(Navn === "" || isNaN(Masse) || Masse === 0 || isNaN(Volum) || Volum === 0){
            return divFyllesUt.innerHTML = "* - må fylles ut!";
        } else {
            divFyllesUt.innerHTML = "";
        }

        if (Pris === undefined || Pris === 0 || isNaN(Pris)) {
            let a = new Ting(Navn, Masse, Volum);
            tingeneMine.push(a);
            if (divListe.style.visibility === "visible") {
                listeOpen = false;
                liste = "";
                visListe();
            }
        } else {
            let a = new SalgbarTing(Navn, Masse, Volum, Pris);
            tingeneMine.push(a);
            if (divListe.style.visibility === "visible") {
                listeOpen = false;
                liste = "";
                visListe();
            }
        }
    }

    let listeOpen = false;
    let liste = "";
    let antallKnapper = [];
    let indexPaaKnapp = [];
    let z = 0;
    let penger = 0;

    function visListe() {
        z = 0;
        let pris = inpPris.valueAsNumber;
        if (!listeOpen) {
            listeOpen = true;
            divListe.style.visibility = "visible";
            for (let ting of tingeneMine) {
                if (ting.kilopris === undefined || ting.kilopris === 0 || isNaN(ting.kilopris)) {
                    liste += `Navn: ${ting.navn} - Masse: ${ting.masse}kg
                    - Volum: ${ting.volum}L - Tetthet: ${ting.tetthet()}kg/dm^3
                    - Klasse: ${ting.constructor.name}<br> <hr>`;
                    z++;
                } else {
                    let kanskjeSolgt;
                    if(ting.solgt){
                        kanskjeSolgt = "solgt"; 
                    } else {
                        kanskjeSolgt = "nei";
                    }
                    liste += `Navn: ${ting.navn} - Masse: ${ting.masse}kg
                    - Volum: ${ting.volum}L - Kilopris: ${ting.kilopris}kr
                    - Totalpris: ${ting.pris()}kr - Tetthet: ${ting.tetthet()}kg/dm^3
                    - Klasse: ${ting.constructor.name} - solgt?: ${kanskjeSolgt}
                    - <button type="button" value="${z}" class="selg">Selg</button> <br> <hr>`;
                    antallKnapper.push("1");
                    z++;
                }
            }
            divListe.innerHTML = liste;
            lagEvent();
        } else if (listeOpen) {
            listeOpen = false;
            divListe.style.visibility = "hidden";
            liste = "";
        }
    }

    let btnSelg;

    function lagEvent(){
        btnSelg = document.getElementsByClassName('selg');
        for(let i = 0; i < antallKnapper.length; i++){
            btnSelg[i].addEventListener("click", selg);
        }
        antallKnapper = [];
    }
    let stringToInt;
    function selg(e){
        let x = e.target.value;
        if(!tingeneMine[x].solgt){
        tingeneMine[x].selg();
        stringToInt = tingeneMine[x].pris();
        penger += parseInt(stringToInt);
        } else {
            return;
        }
        divPenger.innerHTML = "";
        divPenger.innerHTML = "penger: "+penger+"kr";
        liste = "";
        listeOpen = false;
        visListe();
    }
}
class Ting {

    constructor(navn, masse, volum) {
        this.navn = navn;
        this.masse = masse;
        this.volum = volum;
    }

    // beregner tettheten til denne tingen
    tetthet() {
        return (this.masse / this.volum).toFixed(4);
    }
}
class SalgbarTing extends Ting {

    constructor(navn, masse, volum, kilopris) {
        // må lage den vanlige tingen først
        super(navn, masse, volum);
        this.kilopris = kilopris;
        this.solgt = false;  // vi har ikke solgt den ennå
    }

    // hva koster denne tingen
    pris() {
        return (this.masse * this.kilopris).toFixed(2);
    }

    // selg tingen
    selg() {
        this.solgt = true;
    }
}
// nå kan vi lage instanser av klassene
// husk at klassedefinsjonene bare er en oppskrift
// vi må lage forekomster (variable) av klassen

let a = new Ting("Gråstein", 2.3, 0.9);
let b = new SalgbarTing("Sølvklump", 7, 1.1, 1450)

//a.tetthet()   skriver ut tettheten
//a.pris()  // feil - ting har ikke pris
//b.tetthet() // ok
//b.pris()  // ok

// vi kan sjekke hvilken klasse en ting er med følgende kode
//a.contructor.name === "Ting"
//b.contructor.name === "SalgbarTing"

// vi kan også legge ting inn i en Array
var tingeneMine = [];
tingeneMine.push(a);
tingeneMine.push(b);
