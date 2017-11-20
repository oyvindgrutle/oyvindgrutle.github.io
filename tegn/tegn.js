function setup() {
    let firkantDiv = document.getElementById("firkant")
    let sirkelDiv = document.getElementById("sirkel")
    let trekantDiv = document.getElementById("trekant")
    let rodDiv = document.getElementById("rod")
    let gronnDiv = document.getElementById("gronn")
    let blaDiv = document.getElementById("bla")
    let can = document.getElementById("tegning");

    can.addEventListener("click", tegnNoe);


    function tegnNoe(e) {
        xpos = e.clientX -=129;
        ypos = e.clientY -=2
        console.log(e.clientX -=137, e.clientY -=8);
    }

}