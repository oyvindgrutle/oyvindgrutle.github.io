function setup() {
    let divMain = document.getElementById("main");

    let yTop = 43.3;

    for (let i = 0; i<100; i++) {
        for (let j = 0; j < 30; j++) {
            let t = document.createElement('div');
            t.className = 'hexagon'
            t.style.left = i * 26 + "px";
            t.style.top = i * 87 + "px";
            divMain.appendChild(t)
        }
        if(yTop < 44) {
            yTop += 43.8;
        }
        else {
            yTop -= 43.8;
        }
    }
}