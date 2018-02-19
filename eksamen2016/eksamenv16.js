// @ts-check

function setup(){
    let divStPetersburg = document.getElementById("stpetersburg");
    let divRoma = document.getElementById("roma");
    let divNewYork = document.getElementById("roma");

    divStPetersburg.addEventListener("click", visStPetersburg);
    divRoma.addEventListener("click", visRoma);
    divNewYork.addEventListener("click", visNewYork);

    function visStPetersburg(){
        document.getElementById("twintowers").style.backgroundImage = 'url("stpetersburg.jpg")';
    }
    
    function visRoma() { 

    }

    function visNewYork() {

    }
}