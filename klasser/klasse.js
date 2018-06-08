class Elev {
    constructor(navn, klasse, faar, kjønn) {
        this.navn = navn;
        this.klasse = klasse;
        this.faar = faar;
        this.kjønn = kjønn;
    }

    get alder() {
        let now = new Date().getFullYear();
        let diff = now - this.faar;
        return diff;
    }
}

let per = new Elev("ole", "3a", 13, "M");

function test() {
    //har ingen parameter
}

function test2(event) {

}


/**
 * Summer tre tallverdier
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number}
 */
function summer(a,b,c) {
    return a+b+c;
    //3 parametere
}

/**
 * @returns {number} summen av alle parametre
 */
function summer2(... resten) {
    let sum = 0;
    for (let v of stuff) {
        sum += v;
    }
    return sum;
    //ta i mot vanligvis 2, lagre hvis det kommer flere i resten
}

summer2(1,2,3,4,5,6)

