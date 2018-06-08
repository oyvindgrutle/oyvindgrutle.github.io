// @ts-check

function setup() {
    let liste = document.querySelectorAll("input.parti");
    let inputs = Array.from(liste);
    let divResultat = document.getElementById("resultat");
    let divBaste = document.getElementById("baste");
    let divRG = document.getElementById("rg");
    let divBorgerlig = document.getElementById("borgerlig");

    let inpAp = document.getElementById("Ap");
    let inpH = document.getElementById("H");
    let inpKrf = document.getElementById("Krf");
    let inpFrp = document.getElementById("Frp");
    let inpV = document.getElementById("V");
    let inpSv = document.getElementById("Sv");
    let inpRaudt = document.getElementById("Raudt");
    let inpSp = document.getElementById("Sp");
    let inpPirat = document.getElementById("Pirat");
    let inpMDG = document.getElementById("MDG");
    
    document.querySelector("form").addEventListener("change", visOppsummering);

    function visOppsummering(e) {
        let borgerlig = (Number(inpH.value) || 0) +
        (Number(inpFrp.value) || 0) +
        (Number(inpV) || 0) +
        (Number(Krf.value) || 0);
        
        let rg =  (Number(inpAp.value) || 0) +
        (Number(inpSp.value) || 0) +
        (Number(inpSv) || 0) +
        (Number(Krf.value) || 0);
        
        let andre = (Number(inpPirat.value) || 0) +
        (Number(inpMDG.value) || 0) +
        (Number(inpV) || 0) +
        (Number(inpRaudt.value) || 0);
        
        for (inp of inputs) {
            if (Number(inp.value) > 99.9) {
                inp.value = "0";
            }
            if (inp.dataset.blokk === "borgerlig") borgerlig += Number(inp.value || 0);
            if (inp.dataset.blokk === "rg") rg += Number(inp.value || 0);
            if (inp.dataset.blokk === "andre") andre += Number(inp.value || 0);
        }

        let total = borgerlig + rg + andre;
        if (total > 100) {
            divResultat.innerHTML = "SUmmen kan ikke overstige 100";
        } else {
            divResultat.innerHTML = "borgerlig:" + borgerlig + "      rg:" + rg + "      andre: " + andre;
        }
        if (borgerlig > rg) {
            divBaste.innerHTML = "Borgerlig er størst";
        } else {
            divBaste.innerHTML = "RG er størst";
        }
        divRG.style.width = 2*rg + "px";
        divBorgerlig.style.width = 2*borgerlig +"px";
    }
}