function setup() {
    let inpKm = document.getElementById("km");
    let inpNaut = document.getElementById("naut");

    let btnk2n = document.getElementById("k2n");
    btnk2n.addEventListener("click", k2n);

    let btnn2k = document.getElementById("n2k");
    btnn2k.addEventListener("click", n2k);

    function k2n(event) {
        let km = inpKm.valueAsNumber;
        let naut = km / 1.852;
        inpNaut.value = (naut.toFixed(2));
    }
    function n2k(event) {
        let naut = inpNaut.valueAsNumber;
        let km = naut * 1.852;
        inpKm.value = (km.toFixed(2));
    }
}