


function navnPaaFunksjon(parameter1, p2) {
    // den neste linja er vanlig
    var r;  // verdien som skal returneres
    // programkode
    // en eller flere linjer, løkker, betingelser osv
    // som oftest gir funksjonen en verdi tilbake
    return r;
 }

 // anta var elever er en array
for (var i = 0; i < elever.length; i++) {
    // vi gjør noe med elementet elever[i]
    // f.eks vi kjører en funksjon på elementet
    sendBrev(elever[i]);  // sender email til valgt elev
  }

  function forAlle(arr, handling) {
    for (var i = 0; i < arr.length; i++) {
       handling( arr[i] );
    }
  }
  
  // eksempel på bruk
  forAlle( elever, sendBrev );

  // anta var priser er en array
for (var i = 0; i < priser.length; i++) {
    priser[i] *= 1.05;   // legger til 5%
  }

  function endreAlle(arr, endring) {
    for (var i = 0; i < arr.length; i++) {
       arr[i]  = endring( arr[i] );
    }
  }
  
  // eksempel på bruk
  function prisVekst(pris) { return pris*1.05; }
  
  endreAlle(priser, prisVekst);

  elever.forEach(sendBrev);
var nyePriser = priser.map(prisVekst);  
// merk at map lager en ny array
// endreAlle funksjonen vi laga over endrer originalen

let elevTabell = [ "Ole","Per","Kari","Lise","Lars","Oda" ];
let it;  // løkketelleren
let ant = elevTabell.length;  // antall elementer
for (i = 0; i < ant; i++) {
   console.log(elevTabell[i]);
}

// du kan også bruke denne metoden (es2016)
for (let elev of elevTabell) {
  console.log(elev);
}
// i denne løkka tilsvarer elev elevTabell[i]

let arrElever = [
    { fornavn:"Ole", etternavn:"Olsen", klasse:"3A", poeng:20 },
    { fornavn:"Lise", etternavn:"Larsen", klasse:"3A", poeng:22 },
    { fornavn:"Lars", etternavn:"Nilsen", klasse:"3B", poeng:21 }
  ];