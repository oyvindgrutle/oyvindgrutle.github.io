function setup() {
    let divMolle = document.getElementById("molle");
    let inpVindstyrke = document.getElementById("vindstyrke");
    let inpVindfart = document.getElementById("vindfart");
    let btnBeregn = document.getElementById("beregn");
    let divTre = document.getElementById("tre");
    let lyd = document.querySelector("audio");
    let divMelding = document.getElementById("melding");

    let tekster = {
        "stille": "Det er stille",
        "littvind": "litt vind",
        "myevind": "satan ka det blåse"
    }



    inpVindstyrke.addEventListener("change", vindEndring);
    btnBeregn.addEventListener("click", beregnWatt)

    function vindEndring() {
        let vindstyrke = Number(inpVindstyrke.value);
        if (vindstyrke === 1) {
            divMolle.className = "stille";
        } else if (vindstyrke === 2) {
            divMolle.className = "bris";
            divTre.style.animation = "vind 2s linear infinite";
        } else if (vindstyrke === 3) {
            divMolle.className = "kuling"
            divTre.style.animation = "myevind 2s linear infinite";
        }

        if(vind === "stille") {
            lyd.pause();
        } else {
            lyd.play();
        }

    }

    function beregnWatt() {
        let fart = inpVindfart.valueAsNumber;
        
    }

}