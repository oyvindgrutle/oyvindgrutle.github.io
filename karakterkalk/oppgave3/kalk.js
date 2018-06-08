// @ts-check

const fagnavn = ("Engelsk,Geografi,Historie,Kroppsøving,Naturfag,Matematikk,NorskHovedmål,NorskSidemål,"
    + "NorskMuntlig,Religion,Samfunnsfag").split(",");

function setup() {
    let fellesfag = Array.from(document.querySelectorAll("div.felles  input"));
    let programfag = Array.from(document.querySelectorAll("div.programfag  input"));
    let eksamen = Array.from(document.querySelectorAll("div.eksamen  input"));
    let divOppsum = document.getElementById("oppsummering");
    let frmRegistrer = document.getElementById("registrer");

    frmRegistrer.addEventListener("change", visOppsum);
    let vitnemaal = {};
    let karakterliste = [];

    function visOppsum(e) {
        let innhold = "";
        for(let i=0; i<fellesfag.length; i++) {
            let inpFag = fellesfag[i];
            let karakter = Number(inpFag.value) || 0;
            let fnavn = fagnavn[i];
            vitnemaal[fnavn] = karakter;
            innhold += ` ${fnavn}: ${karakter} <br>`;
            karakterliste.push({fnavn,karakter});
        }
        for(let i=0; i<programfag.length; i+=2) {
            let fag = programfag[i].value;
            let karakter = Number(programfag[i+1].value) || 0;
            vitnemaal[fag] = karakter;
            innhold += ` ${fag}: ${karakter} <br>`;
        }
        for(let i=0; i<eksamen.length; i+=2) {
            let fag2 = eksamen[i].value;
            let karakter = Number(eksamen[i+1].value) || 0;
            vitnemaal[fag2] = karakter;
            innhold += ` ${fag2}: ${karakter} <br>`;
        }
        divOppsum.innerHTML = innhold;
    }


}