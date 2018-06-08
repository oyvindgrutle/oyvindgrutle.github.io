// @ts-check

function setup() {
    let inpVekt = document.getElementById("vekt");
    let btnBeregn = document.getElementById("beregn");
    let divVisbmr = document.getElementById("visbmr");
    let divEnergi = document.getElementById("visenergi");
    let btnBeregnenergi = document.getElementById("beregnenergi");
    let inpAktivitet = document.getElementById("aktivitet");

    btnBeregn.addEventListener("click", beregnBmr);
    btnBeregnenergi.addEventListener("click", beregnEnergi);

    let energi;

    function beregnBmr() {
        let vekt = Number(inpVekt.value);
        let bmr = (35.27 + (0.558 * vekt)).toFixed(1);

        divVisbmr.innerHTML = "Din BMR er " + bmr + ". Skyt deg selv.";
    }

    function beregnEnergi() {
        let aktivitet = Number(inpAktivitet.value);
        let vekt1 = Number(inpVekt.value);
        let bmr1 = (35.27 + (0.558 * vekt1)).toFixed(1);

        if (aktivitet === 1.2) {
            energi = bmr1 *1.2;
        } else if (aktivitet === 1.4){
            energi = bmr1 * 1.4;
        }

        divEnergi.innerHTML = "Ditt forbruk er " + energi.toFixed(2) + ".";
    }
}