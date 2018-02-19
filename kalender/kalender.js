// @ts-check
function setup() {

    // lag ref
    let mndNavn = "Jan,Feb,Mar;Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(",");
    let ukeNavn = "Man,Tir,Ons,Tor,Fre,Lor,Son".split(",");

    let btnprvYear = document.getElementById("prev_year");
    let btnnxtYear = document.getElementById("next_year");
    let btnprvMonth = document.getElementById("prev_month");
    let btnnxtMonth = document.getElementById("month_next");

    let ukedager = document.getElementById("ukedager");
    let datoer = document.getElementById("datoer");

    btnprvMonth.addEventListener("click",prevMonth);

    
    //legg til eventlisteners (knappene)
 
    //løkke som lager navn på ukedager
    //løkke som legger inn 7*6=42 DIVer for datoer
 
    function visKalender(y,m,d) {
      //se egen pseudo
    }
 
    // kobla til eventlisteners
    function nextYear(e) { }
    function prevYear(e) { }
    function nextMonth(e) { }
    function prevMonth(e) { }
  }