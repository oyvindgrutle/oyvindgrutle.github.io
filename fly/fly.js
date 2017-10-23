// @flow

function setup() {
    let selFra = document.getElementById("fra");
    let selTil = document.getElementById("til");
    let inpAntall = document.getElementById("antall");
    let chkLeiebil = document.getElementById("leiebill");
    let btnBestill = document.getElementById("bestill");
    let divMelding = document.getElementById("melding");

    let priser = {
        "OSL": { "SVG": 399, "BGO": 410, "HAU": 799 },
        "SVG": { "BGO": 50, "HAU": 10 },
        "BGO": { "HAU": 545 }
    }

    let leiepris = 599

    btnBestill.addEventListener("click", bestillFlight);

    function bestillFlight() {
        let fra = selFra.value;
        let til = selTil.value;
        let pris = 0;
        if (priser[fra] && priser[fra][til]) {
            pris = priser[fra][til];
        } else{
            pris = priser[til][fra];
        }

        if (Number.isInteger(inpAntall.valueAsNumber)){
            pris *= inpAntall.valueAsNumber;
        }

        if (chkLeiebil.checked){
            pris += leiepris;
        } 
        

        divMelding.innerHTML = `Din reise 
        fra ${fra} 
        til ${til} 
        koster ${pris}kr `;
        //divMelding.innerHTML = "Din reise fra "+fra+" til "+til+" koster ";
    }
}