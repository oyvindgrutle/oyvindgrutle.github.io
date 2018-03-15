function setup() {
  let inpTimer = document.getElementById("timer");
  let btnBeregn = document.getElementById("beregn");
  let divTotal = document.getElementById("total");
  let btnEyecandy = document.getElementById("eyecandy");
  let btnMerEyecandy = document.getElementById("mereyecandy");
  let btnMerEyecandy2 = document.getElementById("mereyecandy2");
  let btnSundEyecandy = document.getElementById("sundeyecandy");

  btnBeregn.addEventListener("click", beregn); //funksjonen beregn blir kjørt når knappen beregn blir trykket på
  btnEyecandy.addEventListener("click", visEyecandy);
  btnMerEyecandy.addEventListener("click", visMerEyecandy);
  btnMerEyecandy2.addEventListener("click", visMerEyecandy2);
  btnSundEyecandy.addEventListener("click", visSundEyecandy);

  let timelonn = 156.78;


  function beregn() {

    let antallTimer = inpTimer.valueAsNumber;

    let a = antallTimer * timelonn;
    let total = a;

    // runder av total lønn til nærmeste hundre
    let avrunda = Math.round(total / 100) * 100;
    //skatt hentet fra tabell 7100, egen liste liste.js
    let skatt = liste[avrunda];

    divTotal.innerHTML = "Lisa Martine Ott aka den hyggelige tyskeren tjener denne måneden " + total.toFixed(2) + "kr denne måneden." + " Du må betale " + skatt + "kr i skatt. Du får da " + (total.toFixed(2) - skatt) + "kr til lønnskonto."


    

  }
  function visEyecandy() {
    window.open("pb.jpg", "_blank", "resizeable=yes, width=600, height=400");
  }

  function visMerEyecandy() {
    window.open("fly.m4v", "_blank", "resizeable=yes, width=600, height=400");
  }

  function visMerEyecandy2() {
    window.open("mm.jpg", "_blank", "resizeable=yes, width=600, height=400");
  }

  function visSundEyecandy() {
    window.open("eyecandysund.jpg", "_blank", "resizeable=yes, width=600, height=400");
  }



} 