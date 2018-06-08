function setup() {
    let inpForslag = document.getElementById("forslag");
    let divVisforslag = document.getElementById("visforslag");
    let divBilde = document.getElementById("bilde");
    let divVisfeil = document.getElementById("visfeil");


    let btnSvar = document.getElementById("svar");
    btnSvar.addEventListener("click", visResultat);

    let audio1 = new Audio('gay.mp3');
    let audio2 = new Audio('gay2.mp3');

    let skinkevekt = 8;
    let antallfeil = 0;
    function visResultat() {
        let forslag = Number(inpForslag.value);
        if (forslag === skinkevekt) {
            divVisforslag.innerHTML = "Gratulerer! Du svarte riktig."
        } else if (forslag < skinkevekt) {
            divBilde.className = "lite";
            divVisforslag.innerHTML = "Du svarte feil. Du var " + (Math.abs(skinkevekt - forslag)) +
                " fra riktig svar. "
            audio1.play();
        } else if (forslag > skinkevekt) {
            divBilde.className = "mye";
            divVisforslag.innerHTML = "Du svarte feil. Du var " + (Math.abs(skinkevekt - forslag)) +
                " fra riktig svar. "
            audio2.play();

        }


        if (forslag < 8 || forslag > 8) {
            antallfeil++;
            divVisfeil.innerHTML = "Du har " + antallfeil + " feil.";
        } else {
            divVisfeil.innerHTML = "Du brukte " + antallfeil + " forsøk på å få korrekt. Du suge";
        }
    }

}