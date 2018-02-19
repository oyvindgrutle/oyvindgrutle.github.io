// @flow

function setup() {
let divSanta = document.querySelector("#santa");
let divMain2 = document.querySelector("#main2");
divSanta.addEventListener("click", bombsAway);

function bombsAway(e) {
let p = document.createElement('div');
p.className = "pakke";
divMain2.appendChild(p);
p.animate(
[
{top : "100px"},
{top : "90hv" }

], {fill:"forwards", duration:3000});
)
}

}