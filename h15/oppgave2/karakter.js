function setup() {
    let inpSnitt = document.getElementById("snitt");
    let inpTillegg = document.getElementById("tillegg");
    let inpPoenggrense = document.getElementById("poenggrense");
    let btnBeregn = document.getElementById("beregn");
    let divVissvar = document.getElementById("vissvar");

    btnBeregn.addEventListener("click", beregn);

    function beregn() {
        let snitt = Number(inpSnitt.value);
        let tillegg = Number(inpTillegg.value);
        let poenggrense = Number(inpPoenggrense.value);

        let poengsum = ((snitt*10)+tillegg);

        if(poengsum >= poenggrense) {
            divVissvar.innerHTML = "Gratulerer! Sannsynligheten for at du kommer inn der du vil er. <br>" +
            "Dine kokurransepoeng er: " + poengsum + ". Poengsummen der du vil er: " + poenggrense
            + ".";
        } else {
            divVissvar.innerHTML = "Synd det bror. Snittet ditt e: " + poengsum + "."
            + "Der du vil e snittet: " + poenggrense +"."
        }
    }

}