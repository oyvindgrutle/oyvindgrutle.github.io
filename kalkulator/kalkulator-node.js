// @ts-check

const m = Math;
const π = m.PI;
const sin = m.sin;
const cos = m.cos;
const tan = m.tan;
const sqrt = m.sqrt;


function getInput() {

}

let stdin = process.openStdin();

stdin.addListener("data", function (d) {
    let raw = d.toString().trim();
    let expression = "";
    let f = "";
    for (let b of raw) {
        //logikk som sjekker om du har xx
        //skifet til x*x
        if (f === b && b >= "a" && b <= "z") {
            expression += "*";
        }

        if (f >= "0" && f <= "9" && b >= "a" && b <= "z") {
            expression += "*";
        }
        expression += b;
        f = b;
    }
    let value;
    try {
        value = eval(expression);
    } catch (error) {
        console.log(error.message);
    }
    console.log(expression, "=", value);
});