// @flow

/*
@startuml

title While Loop - Activity Diagram 


start

while (Hungry?)  is (Yes)
  :Eat Hot Wings;
  :Drink Homebrew;
endwhile (No)

:Go To Sleep;

stop

@enduml
*/

class Sprite {
    // div;x;y ....
    /*
    div: any;
    x: number;
    y: number;
    vx: number;
    vy: number;
    w: number;
    h: number;
    rot: number;
    bounce: boolean;
    alive: boolean;
    // */
    constructor(div, x, y, vx, vy, w, h, bounce = true) {
        this.div = div;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.rot = 0;
        this.bounce = bounce;
        this.alive = true;
    }



    flytt() {
        if (!this.alive) return;
        let ok = true;
        this.x += this.vx;
        this.y += this.vy;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        if (this.x < 0) {
            this.vx = Math.floor(Math.random() * 10) + 1;
            ok = false;
        }
        if (this.x > 800 - this.w) {
            this.vx = - (Math.floor(Math.random() * 10) + 1);
            ok = false;
        }
        if (this.y < 0) {
            this.vy = Math.floor(Math.random() * 10) + 1;
            ok = false;
        }
        if (this.y > 600 - this.h) {
            this.vy = - (Math.floor(Math.random() * 10) + 1);
            ok = false;
        }
        if (!ok && !this.bounce) {
            this.alive = false;
            this.div.classList.add("hidden");
        }
    }

    roter(delta) {
        this.rot += delta;
        this.div.style.transform = "rotate(" + this.rot + "deg)";
        let angle = this.rot;
        let velocity = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        let vinkel = angle * Math.PI / 180
        this.vx = velocity * Math.cos(vinkel);
        this.vy = velocity * Math.sin(vinkel);
    }

    respawn() {
        this.x = Math.floor(Math.random() * 500) + 10;
        this.y = Math.floor(Math.random() * 500) + 10;
        this.vy = - (Math.floor(Math.random() * 10) + 1);
        this.vx = Math.floor(Math.random() * 10) + 1;
        this.alive = true;
    }
}



function setup() {
    let poeng = 0;

    let divPoeng = document.getElementById("poeng");

    const ANTALL$BLINKER = 4;

    let keys = {}; // registrerer alle keys som er trykket ned
    let manyBlinks = [];

    let divKanon = document.getElementById("kanon");
    //let divBlink = document.getElementById("blink");
    let divSkudd = document.getElementById("skudd");

    // her lager vi alle blinkene
    for (let i = 0; i < ANTALL$BLINKER; i++) {
        let divBlink = document.createElement('div');
        divBlink.className = "sprite blink";
        let divMain = document.getElementById("main");
        if (divMain !== null) {
            divMain.appendChild(divBlink);
        }
        let xpos = Math.floor(Math.random() * 700) + 10;
        let ypos = Math.floor(Math.random() * 500) + 10;
        let vx = Math.floor(Math.random() * 20) - 10;
        let vy = Math.floor(Math.random() * 20) - 10;
        let blinkSprite = new Sprite(divBlink, xpos, ypos, vx, vy, 30, 30);
        manyBlinks.push(blinkSprite);
    }





    let kanonSprite = new Sprite(divKanon, 250, 250, 1, 0, 30, 30);
    let skuddSprite = new Sprite(divSkudd, 260, 260, 0, 0, 10, 10, false);

    kanonSprite.flytt();

    setInterval(gameEngine, 40);

    window.addEventListener("keydown", registrerKey);
    window.addEventListener("keyup", cancelKey);

    function registrerKey(keyEvent) {
        keys[keyEvent.keyCode] = 1; // marker at denne key er aktiv
    }

    function cancelKey(keyEvent) {
        keys[keyEvent.keyCode] = 0; // bruker slapp opp denne key-en
    }



    function gameEngine(e) {
        for (let blink of manyBlinks) {
            blink.flytt();
        }

        skuddSprite.flytt();
        kanonSprite.flytt();
        styrSpillet();
        kollisjonSkudd();
        kollisjonTanks();
    }

    function kollisjonSkudd() {
        for (let blink of manyBlinks) {
            if (!blink.alive || !skuddSprite.alive) return;
            if (overlap(blink, skuddSprite)) {
                poeng += 1;
                divPoeng.innerHTML = String(poeng);
                blink.alive = false;
                skuddSprite.alive = false;
                skuddSprite.div.classList.add("hidden");
                setTimeout(() => blink.respawn(), 1000);
            }

        }
    }

    function kollisjonTanks() {
        for (let blink of manyBlinks) {
            if (!blink.alive || !kanonSprite.alive) return;
            if (overlap(blink, kanonSprite)) {
                blink.alive = false;
                poeng -= 1;
                divPoeng.innerHTML = String(poeng);
                setTimeout(() => blink.respawn(), 1000);
            }
        }
    }

    function overlap(a, b) {
        return (a.x < b.x + b.w &&
            a.x > b.x - a.w &&
            a.y < b.y + b.h &&
            a.y > b.y - a.h
        )
    }

    function skyt() {
        let angle = kanonSprite.rot;
        let vinkel = angle * Math.PI / 180
        let vx = 20 * Math.cos(vinkel);
        let vy = 20 * Math.sin(vinkel);
        skuddSprite.vx = vx;
        skuddSprite.vy = vy;
        skuddSprite.x = kanonSprite.x + 10;
        skuddSprite.y = kanonSprite.y + 10;
        skuddSprite.alive = true;
        skuddSprite.div.classList.remove("hidden");
    }

    function styrSpillet() {
        if (keys[39] === 1) {
            kanonSprite.roter(5);
        }
        if (keys[37] === 1) {
            kanonSprite.roter(-5);
        }
        if (keys[32] === 1) {
            skyt();
        }
    }
}