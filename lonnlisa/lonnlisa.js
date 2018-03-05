function setup() {
    let inpTimer = document.getElementById("timer");
    let btnBeregn = document.getElementById("beregn");
    let divTotal = document.getElementById("total");

    btnBeregn.addEventListener("click", beregn); //funksjonen beregn blir kjørt når knappen beregn blir trykket på

    let timelonn = 156.78;
    

    function beregn() {

        let antallTimer = inpTimer.valueAsNumber;

        let a = antallTimer * timelonn;
        let total = a;
        
        // runder av total lønn til nærmeste hundre
        let avrunda = Math.round(total / 100) * 100;
        //skatt hentet fra tabell 7100, egen liste liste.js
        let skatt = liste[avrunda];

        divTotal.innerHTML = "Den dumme tyskeren tjener " + total.toFixed(2) + "kr denne måneden." + "Du må betale " + skatt + "kr i skatt. Du får da " +(total.toFixed(2)-skatt) + "kr til lønnskonto."

        

        //skatt på 5%
        //let skatt = (total * skattprosent).toFixed(2);

        // if setning som sier at antall timer i helg og kveld til sammen ikke kan være større enn antall timer
        //if (antallTimer < antallTimerihelg || antallTimer < antallKveld || antallTimer < (antallKveld + antallTimerihelg)) {
          //  divTotal.innerHTML = "NB! Antall timer i helg og kveld til sammen kan ikke være større enn antall timer totalt. Antall timer denne måneden er satt til " + antallTimer + ". Timer i helg og kveld til sammen er " + (antallTimerihelg+antallKveld) + "."
        //} else {
          //  divTotal.innerHTML = "Du min unge kvinne, denne måneden har du gjort deg fortjent til " + total.toFixed(2) + "kr."

       // }
        
        // Hvis lønn er så liten at du slipper å betale skatt
        //if (skatt === undefined) {
         //   divTotal.innerHTML = "Du har denne måneden tjent " + total.toFixed(2) + "kr. Du betaler ingenting i skatt."; 
       // }
        

    }


}