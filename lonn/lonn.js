function setup() {
    let inpTimer = document.getElementById("timer");
    let inpTimerihelg = document.getElementById("timerihelg");
    let inpKveld = document.getElementById("kveld");
    let btnBeregn = document.getElementById("beregn");
    let divTotal = document.getElementById("total");

    btnBeregn.addEventListener("click", beregn);

    let timelonn = 158.09;
    let helgetillegg = 28;
    let kveldstillegg = 10;

    function beregn() {

        let antallTimer = inpTimer.valueAsNumber;
        let antallTimerihelg = inpTimerihelg.valueAsNumber;
        let antallKveld = inpKveld.valueAsNumber;

        let a = antallTimer*timelonn;
        let b = antallTimerihelg*helgetillegg;
        let c = antallKveld*kveldstillegg;
        let total = a+b+c;
        //skatt hentet fra tabell 7100
        let avrunda = Math.round(total/100)*100;

        let skatt = liste[avrunda];

        //skatt på 5%
        //let skatt = (total * 0.05);

        if(antallTimer < antallTimerihelg || antallTimer < antallKveld || antallTimer < (antallKveld+antallTimerihelg)){
            divTotal.innerHTML = "KA HOLDE DU PÅ MED, DU KAN IKKJE JOBBA FLERRE TIMAR I HELG ELLER KVELD TESAMMEN ENN DET DU HAR JOBBA TOTALT!!! TAPAR"
        } else {
            divTotal.innerHTML = "Du min unge mann, denne måneden har du gjort deg fortjent til " + total.toFixed(2)+"kr. Godt jobbet. Du blir trekt " + skatt +"kr i skatt. Du får da " + (total-skatt) + "kr til lønnskonto."  ;

        }

    }


}