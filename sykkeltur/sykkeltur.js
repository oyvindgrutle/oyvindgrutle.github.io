function setup() {
    let divHalden = document.getElementById("halden");
    let divFredrikstad = document.getElementById("fredrikstad");

    let btnHalden = document.getElementById("halden");
    let btnFredrikstad = document.getElementById("fredrikstad");

    divHalden.addEventListener("click", visHalden);
    divFredrikstad.addEventListener("click", visFredrikstad);

    function visHalden() {
        window.open("jfk.mp4", "_blank", "resizeable=yes, width=600, height=400");
    }

    function visFredrikstad() {
        window.open("911.mp4", "_blank", "resizeable=yes, width=600, height=400");
    }
}

//https://www.w3schools.com/jsref/met_win_open.asp