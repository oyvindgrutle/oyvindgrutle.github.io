function setup() {
    let inpTimer = document.getElementById("timer");
    let inpTimerihelg = document.getElementById("timerihelg");
    let inpKveld = document.getElementById("kveld");
    let btnBeregn = document.getElementById("beregn");
    let divTotal = document.getElementById("total");

    btnBeregn.addEventListener("click", beregn); //funksjonen beregn blir kjørt når knappen beregn blir trykket på

    let timelonn = 158.09;
    let helgetillegg = 28;
    let kveldstillegg = 10;
    //let skattprosent = 0.05;

    function beregn() {

        let antallTimer = inpTimer.valueAsNumber;
        let antallTimerihelg = inpTimerihelg.valueAsNumber;
        let antallKveld = inpKveld.valueAsNumber;

        let a = antallTimer * timelonn;
        let b = antallTimerihelg * helgetillegg;
        let c = antallKveld * kveldstillegg;
        let total = a + b + c;
        
        // runder av total lønn til nærmeste hundre
        let avrunda = Math.round(total / 100) * 100;
        //skatt hentet fra tabell 7100, egen liste liste.js
        let skatt = liste[avrunda];

        

        //skatt på 5%
        //let skatt = (total * skattprosent).toFixed(2);

        // if setning som sier at antall timer i helg og kveld til sammen ikke kan være større enn antall timer
        if (antallTimer < antallTimerihelg || antallTimer < antallKveld || antallTimer < (antallKveld + antallTimerihelg)) {
            divTotal.innerHTML = "NB! Antall timer i helg og kveld til sammen kan ikke være større enn antall timer totalt. Antall timer denne måneden er satt til " + antallTimer + ". Timer i helg og kveld til sammen er " + (antallTimerihelg+antallKveld) + "."
        } else {
            divTotal.innerHTML = "Du min unge mann, denne måneden har du gjort deg fortjent til " + total.toFixed(2) + "kr. Godt jobbet. Du blir trekt " + skatt + "kr i skatt. Du får da " + (total - skatt).toFixed(2) + "kr til lønnskonto.";

        }
        
        // Hvis lønn er så liten at du slipper å betale skatt
        //if (skatt === undefined) {
         //   divTotal.innerHTML = "Du har denne måneden tjent " + total.toFixed(2) + "kr. Du betaler ingenting i skatt."; 
       // }
        

    }


}