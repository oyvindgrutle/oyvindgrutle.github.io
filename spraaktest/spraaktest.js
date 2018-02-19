// @ts-check

function setup() {

  let divText = document.getElementById("text");
  let divAlternativer = document.getElementById("alternativ");
  let divKontroll = document.getElementById("kontroll");

  let spraak = [];

  let amerikansk = [];
  // her er enkelt å legge til flere språk senere

  spraak.push(amerikansk);

  // legger til sprsml til amerikansk
  // her bør vi egentlig lese sprsml fra filen, men 
  // det rekker jeg ikke nå
  amerikansk.push("Hva er tilbakestående på amerikansk?:potato,nazi,+Kenneth Midtun slett den kommentaren Kenneth og skjerp deg!");
  amerikansk.push("Hva er dum på amerikansk?:potato,nazi,+Sondre Frøyland");
  amerikansk.push("Hva er teit på amerikansk?:potato,nazi,+Bendik");

  let total = 0;
  let riktigsvar = "";
  let index = 0;
  let valgtSpraak = spraak[0];
  // dette er en forenklet løsning da vi bare har amerikansk 
  //senere bør dette endres slik at bruker kan velge språk

  function visNeste() {
    visSporsmaal(index);
  }

  function vurder() {
    let valgte = Array.from(document.querySelectorAll("input:checked"));
    let riktig = 0;
    let feil = 0;
    for (let valg of valgte) {
      if (valg.value === riktigsvar) {
        riktig++;
      } else {
        feil++;
      }
    }
    total = riktig - feil;
    if (valgtSpraak.length > index + 1){
      index++;
      visNeste();
    } else {
      visResultat();
    }
  }

  function visResultat() {
    let melding = "";
    if (total < 0) {
      melding = "Ikke noe håp"
    }
    if (total === 3) {
      melding = "Alt rett, try hard";
    }
    if ( total >= 0 && total < 3) {
      melding = "Ta deg en tur til New York"
    }
    document.getElementById("main").innerHTML = melding;
  }

  let liste = "";
  function visSporsmaal(index) {
    let sprsml = valgtSpraak[index];
    // bruker nye funksjoner fra es7, destructing assignment
    let [ledetekst, resten] = sprsml.split(":");
    let alternativer = resten.split(",");
    divText.innerHTML = ledetekst;

    let liste = '';
    for (let valg of alternativer) {
      if (valg.charAt(0) === "+") {
        valg = valg.substr(1);
        riktigsvar = valg;
      }
      liste += `<br><input value="${valg}" type="checkbox">` + valg;
    }


   liste += '<div><button id="vurder" type="button">Vurder</button></div>';

    divAlternativer.innerHTML = liste;
    document.getElementById("vurder").addEventListener("click", vurder);
  }
  visNeste();

}