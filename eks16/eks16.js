// @ts-check

function setup() {
    let divPeter = document.getElementById("peter");
    let divEx = document.getElementById("ex");
    let divStorPeter = document.getElementById("storpeter");

    divPeter.addEventListener("click", visStorPeter);

    divStorPeter.addEventListener("click", visLillePeter);

    function visStorPeter(e) {
        divEx.style.display = "none";
        divStorPeter.style.display = "block";
    }

    function visLillePeter(e) {
        divEx.style.display = "flex";
        divStorPeter.style.display = "none";
    }

}