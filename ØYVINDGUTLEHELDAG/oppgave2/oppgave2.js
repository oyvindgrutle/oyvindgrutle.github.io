// @ts-check
function setup() {
    //let vid = document.querySelector("video");
   // vid.play();
    let divText = document.getElementById("text");
    let divAlternativer = document.getElementById("alternativ");
    let divKontroll = document.getElementById("kontroll");
    let divSporsmal = document.getElementById("sporsmal");

    let test = [];

    let bil = [];
    // her er det enkelt å legge til prøver for andre kjøretøy enn bil, f.eks motorsykkel

    test.push(bil);



    // her legges det enkelt til nye spørsmål for teoriprøven for bil
    bil.push("<h4>Hvorfor er denne situasjonen farlig?</h4>:Det er tørr og fin vei,+Det er svært glatt, Det er ingenting farlig her");
    bil.push("<h4>Hvem har vikeplikt her?</h4>:Bussen,Ingen,+Bilen");
    bil.push("<h4>Hva brude du gjøre her?</h4>:+Vente til syklisten har passert,Kjøre,Gi gass og håpe på det beste");
    bil.push("<h4>Hva burde du gjøre her?</h4>:Lukke øynene og håpe på at det går bra,+Vente med å kjøre forbi til etter svingen,Kjøre de rett ned");

    let riktigsvar = "";
    let total = 0;
    let index = 0;
    let valgttest = test[0];
    // dette er en forenkla løsning da jeg bare lager spørsmål for bil
    // senere bør dette endres slik at brukeren selv kan velge hvilke kjøretøy 
    // han vil teste seg i


    function visNeste() {
        // tester om bildene samsvarer med spørsmålene
        //når knappen vurder trykkes burde neste spørsmål komme opp sammen med et nytt bilde
        visSporsmaal(index);
        if (index === 0) {
            divSporsmal.className = "sporsmal1";
        } else if (index === 1) {
            divSporsmal.className = "sporsmal2";
        } else if (index === 2) {
            divSporsmal.className = "sporsmal3";
        } else if (index === 3) {
            divSporsmal.className = "sporsmal4";
        }
    }

    function vurder() {
        let valgte = Array.from(document.querySelectorAll("input:checked"));
        let riktig = 0;
        let feil = 0;
        for (let valg of valgte) {
            // @ts-ignore
            if (valg.value === riktigsvar) {
                riktig += 2;

            } else {
                feil++;
            }
        }
        total += riktig - feil;
        if (valgttest.length > index + 1) {
            index++;
            visNeste();
        } else {
            visResultat();
        }

    }
    let vis = [];
    function visResultat() {
        let melding = "";
        if (total < 0) {
            melding = "<h1>Resultat</h1> <br>Du har mye å jobbe med! Du fikk " + total + " poeng.";
        }
        if (total === 8) {
            melding = "<h1>Resultat</h1> <br> <h3>Gratulerer!</h3> <br> Du fikk alt rett! Du fikk " + total + " poeng.";
        }
        if (total >= 0 && total < 8) {
            melding = "<h1>Resultat</h1> <br>Du har kontroll på noe av det, men du har fortsatt mye å jobbe med. Du fikk " + total + " rett.";
        }
        document.getElementById("main").innerHTML = melding;
    }

    function visSporsmaal(index) {
        let sprmsl = valgttest[index];
        // bruker nye funksjoner fra es7, destructuring assignment
        let [ledetekst, resten] = sprmsl.split(":");
        let alternativer = resten.split(",");
        divText.innerHTML = ledetekst;

        let liste = '';
        for (let valg of alternativer) {
            if (valg.charAt(0) === "+") {
                valg = valg.substr(1);
                riktigsvar = valg;
            }
            liste += `<br><input value="${valg}" type="checkbox">` + valg;
        }
        liste += '<div><button id="vurder" type="button">Vurder</button></div>';

        divAlternativer.innerHTML = liste;
        document.getElementById("vurder").addEventListener("click", vurder);
    }

    visNeste();
}