class Perk {
    constructor(perks) {
        this.money = perks.money || "0";
        this.move = perks.move || "0";
        this.war = perks.war || "0";
        this.science = perks.science || "0";
    }
    render() {
        let s = `
        <ul>
            <li>Money: ${this.money}
            <li>Move: ${this.move}
            <li>War: ${this.war}
            <li>Science: ${this.science}
        </ul>`;
        return s;
    }
}

class Nation {
    constructor(navn, info, perk) {
        this.navn = navn;
        this.title = info.title || "King";
        this.leader = info.leader || "Kong";
        this.capital = info.capital || "Yavin 4";
        this.picture = info.picture || "0";
        this.perk = perk || new Perk ({});
    }

    render() {
        let s = `
        <ul>
            <li>Name: ${this.navn}
            <li>Leader: ${this.title} ${this.leader}
            <li>Capital: ${this.capital}
            <li>Picture: <img class="portrait" src ="${this.picture}">
            <li>Perks: ${this.perk.render()}
        </ul>`;
        return s;
    }
}

function setup() {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDaxDtWGAktiW7fP3YJkDpARfBTaLqDDb4",
        authDomain: "civilization-8c92f.firebaseapp.com",
        databaseURL: "https://civilization-8c92f.firebaseio.com",
        projectId: "civilization-8c92f",
        storageBucket: "civilization-8c92f.appspot.com",
        messagingSenderId: "595357053981"
    };
    firebase.initializeApp(config);
    const database = firebase.database;

    let divListe = document.querySelector("#liste");
    let ref = database().ref("nations");

    ref.once("value").then(function (snapshot) {
        let landene = snapshot.val();
        if (landene) {
            for (let l in landene) {
                let info = landene[l];
                let perk = info.perk || {};
                let p = new Perk(perk);
                let n = new Nation(l, info, p);
                divListe.innerHTML += n.render();
                //<h4>${l}</h4>
                //<ul>
                //  <li> Hovedstad: ${info.capital}
                //<li> Leder: ${info.title} ${info.leader}
                //</ul>

                //  </div>`;
            }

        }
    }
    );


}