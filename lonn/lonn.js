function setup() {
    let inpTimer = document.getElementById("timer");
    let inpLonn = document.getElementById("lonn");
    let inpTimerihelg = document.getElementById("timerihelg");

    let btntid2lonn = document.getElementById("tid2lonn");
    btntid2lonn.addEventListener("click", tid2lonn);

    let btnlonn2tid = document.getElementById("lonn2tid");
    btnlonn2tid.addEventListener("click", lonn2tid);

    function tid2lonn(event) {
        let timer = inpTimer.valueAsNumber;
        let timerihelg = inpTimerihelg *28;
        let lonn = timer * 149.38;
        inpLonn.value = (lonn.toFixed(2));
    }
    function lonn2tid(event) {
        let lonn = inpLonn.valueAsNumber;
        let timer = lonn / 149.38;
        inpTimer.value = (timer.toFixed(2));
    }

}