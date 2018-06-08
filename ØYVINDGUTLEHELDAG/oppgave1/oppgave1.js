// @ts-check

function setup() {
    let inpSvar1 = document.getElementById("sporsmal1");
    let inpSvar2 = document.getElementById("sporsmal2");
    let inpSvar3 = document.getElementById("sporsmal3");
    let divVispoeng = document.getElementById("vispoeng");

    let btnSvar = document.getElementById("svar");
    btnSvar.addEventListener("click", provSvar);

    

    function provSvar() {
        let poeng = 0; // velger å ha poeng inne i funksjonen, dette er fordi
        // hvis jeg har den utenfor vil du kunne prøve flere ganger, og poengene du får
        // vil legge seg sammen. Dette problemet fikses ved å legge den inn i funksjonen
        // da vil poengene starte på null for hver gang du trykker på knappen
        // @ts-ignore
        let svar1 = inpSvar1.value;
        // @ts-ignore
        let svar2 = inpSvar2.value;
        // @ts-ignore
        let svar3 = inpSvar3.value;

        if(svar1 === "1") {
            poeng ++;
        } 
        if (svar2 === "2") {
            poeng++;
        }
        if(svar3 === "3"){
            poeng++
        }
        
        if(poeng ===3) {
        divVispoeng.innerHTML = "Du klarte alle " + poeng + "."
        + "<h3> Gratulerer! </h3>"
        } else if(poeng > 0) {
            divVispoeng.innerHTML ="Beklager, men alt var ikke rett. Du fikk " + poeng + " av 3 rett." 
            + "<br> <h3>Bedre lykke neste gang!</h3>";

        } else if (poeng === 0) {
            divVispoeng.innerHTML ="Du fikk " + poeng + " av 3 rett." 
            + "<br> <h3>Dette var du ikke noe flink til!</h3>";
        }


    }
}