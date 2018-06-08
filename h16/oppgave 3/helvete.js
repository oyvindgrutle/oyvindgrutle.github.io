function setup() {
    let inpUkenr = document.getElementById("ukenr");
    let inpAntmiddag = document.getElementById("antmiddag");
    let inpAntvoksne = document.getElementById("antvoksne");
    let inpAntbarn = document.getElementById("antbarn");
    let inpAntungdom = document.getElementById("antungdom");
    let divVisbestilling = document.getElementById("visbestilling");
    let divVisbehov = document.getElementById("visbehov");

    let btnRegistrer = document.getElementById("registrer");
    btnRegistrer.addEventListener("click", registrerBestilling);

    let btnBehov = document.getElementById("behov");
    btnBehov.addEventListener("click", finnBehov);



    let bestillingRegister = [];


    function registrerBestilling() {
        let ukenr = Number(inpUkenr.value);
        let antallmiddager = Number(inpAntmiddag.value);
        let antvoksne = Number(inpAntvoksne.value);
        let antbarn = Number(inpAntbarn.value);
        let antugdom = Number(inpAntungdom.value);

        let bestilling = [ukenr, antallmiddager, antvoksne, antbarn, antugdom];
        bestillingRegister.push(bestilling);

        let string = "";

        for (let i = 0; i < bestillingRegister.length; i++) {
            let nummer = bestillingRegister[i][0];
            let middag = bestillingRegister[i][1];
            let voksne = bestillingRegister[i][2];
            let barn = bestillingRegister[i][3];
            let ungdom = bestillingRegister[i][4];
            string += `Bestilling ${i}  uke nummer ${nummer} den har ${barn} barn, ${voksne} voksne
        og ${ungdom} ungdom <br>
        <br>
        `
            divVisbestilling.innerHTML = string;
        }
    }

    //barn(0), ungdom(1), voksne(2)
    //torsk(0), sei(1), makrell(2), reker(3), krabbe(4), laks(5)
    let raavaretabell = [
        [200, 200, 200, 250, 300, 200],
        [300, 300, 300, 500, 500, 300],
        [350, 350, 350, 500, 600, 350]
    ];

    let barn1 = 0;
    let barn2 = 0;
    let barn3 = 0;
    let ungdom1 = 0;
    let ungdom2 = 0;
    let ungdom3 = 0;
    let voksen1 = 0;
    let voksen2 = 0;
    let voksen3 = 0;

    function finnBehov() {
        barn1 = 0;
        barn2 = 0;
        barn3 = 0;
        ungdom1 = 0;
        ungdom2 = 0;
        ungdom3 = 0;
        voksen1 = 0;
        voksen2 = 0;
        voksen3 = 0;
        for (let i = 0; i < bestillingRegister.length; i++) {
            if (bestillingRegister[i][0] === 26) {
                if (bestillingRegister[i][0] === 1) {
                    barn1 += bestillingRegister[i][2];
                    ungdom1 += bestillingRegister[i][4]
                    voksen1 += bestillingRegister[i][3]
                } else if (bestillingRegister[i][0] === 2) {
                    barn2 += bestillingRegister[i][2];
                    ungdom2 += bestillingRegister[i][4]
                    voksen2 += bestillingRegister[i][3]
                } else if (bestillingRegister[i][0] === 3) {
                    barn3 += bestillingRegister[i][2];
                    ungdom3 += bestillingRegister[i][4]
                    voksen3 += bestillingRegister[i][3]
                }

            } else {
                return;
            }
        }
    }
}