// @ts-check

function setup () {
    let hoteller = {};
    let prisliste = {
        newyork: {
            TrumpTower: [1500, 2345],
            Raddison: [1200, 2300],
            BigApple: [2500, 4999],
        }
    }

    hoteller.newyork = "TrumpTower,Raddison,BigApple".split(",");
    hoteller.roma = "Heil Tower, Baddison,Little Apple".split(",");

    let selBy = document.getElementById("by");
    let divByInfo = document.getElementById("byinfo");

    selBy.addEventListener("change", valgtBy);

    function valgtBy(e) {
        let by = selBy.value;
        divByInfo.innerHTML = "";
        if (hoteller[by]) {
            let byHotell = hoteller[by];
            let selHotell = document.createElement('select');
            let s = "";
            for (let hotell of byHotell) {
                s += `<option>${hotell}</option>`;
            }
            selHotell.innerHTML = s;
            divByInfo.appendChild(selHotell);
        }
    }
    
}