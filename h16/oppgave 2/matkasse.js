class Kunde {
    constructor(navn, adresse) {
        this.navn = navn;
        this.adresse = adresse;
    }
}

function setup() {
    let kunde;  // skal lagre data om kunden
    let inpNavn = document.getElementById("navn");
    let inpAdresse = document.getElementById("adresse");

    let inpPersoner = document.getElementById("antallpers");
    let inpMiddager = document.getElementById("antallmiddager");
    let divPrisvis = document.getElementById("prisvis");
    let divMiddag = document.getElementById("middager");

    let prisperson;

    let btnKjop = document.getElementById("kjop");
    btnKjop.addEventListener("click", kjopVarer);

    inpMiddager.addEventListener("change", visMiddager);

    function visMiddager() {
        let middag = Number(inpMiddager.value);
        if (middag === 2) {
            divMiddag.className = "tomiddager";
        } else if (middag === 3) {
            divMiddag.className = "tremiddager";
        }
    }



    function kjopVarer(e) {
        let antallpersoner = inpPersoner.valueAsNumber;
        let antallmiddager = Number(inpMiddager.value);
        let navn = inpNavn.value;
        let adresse = inpAdresse.value;
        kunde = new Kunde(navn, adresse);
        let prisperson;



        if (antallpersoner >= 5) {
            prisperson = 70;
        } else {
            prisperson = 80;
        }

        let pris = (antallpersoner * prisperson) * antallmiddager;
        // let pris = (antallpersoner * 70) * antallmiddager;

        if (antallpersoner > 25) {
            divPrisvis.innerHTML = "Kafaen ska dokker ha orgy eller"
        } else {
            divPrisvis.innerHTML = `
                Kjære ${kunde.navn} <br>
                Ordrebekreftelse: Du har bestillt ${antallmiddager} middager
                for ${antallpersoner} personer`
                + `<br>Varene sendes til ${kunde.adresse}<br>`
                + "Dette vil koste " + pris + "kr.";
        }

    }

}