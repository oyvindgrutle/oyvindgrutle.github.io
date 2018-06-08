

function setup() {
    let aktiv = false;
    let party;
    let divHovedSide = document.getElementById("hovedside");
    let piano = document.querySelector("audio");
    let video = document.querySelector("video");
    divHovedSide.addEventListener("click", visPresentasjon, true);
    document.addEventListener("click", skjulPresentasjon)

    let partyCode = {
        start: {
            mdg: () => { piano.play(); },
            sp: () => { video.play(); }
        },
        stop: {
            mdg: () => { piano.pause(); },
            sp: () => { video.pause(); }
        }
    }

    function visPresentasjon(e) {
        if (e.target.dataset && e.target.dataset.parti) {
            //klikk på en partilogo
            let id = party = e.target.dataset.parti;
            let divParti = document.getElementById(id);
            divParti.classList.add("show");
            if (partyCode.start[party]) {
                partyCode.start[party]();
            }
        }
    }

    function skjulPresentasjon(e) {
        if (aktiv) {
            let partiene = Array.from(document.querySelectorAll("#partiene > div"));
            partiene.forEach(e => e.classList.remove("show"));
            aktiv = false;
            if (partyCode.stop[party]) {
                partyCode.stop[party]();
            }
            party = null;
        } else {
            aktiv = true;
        }
    }
}
