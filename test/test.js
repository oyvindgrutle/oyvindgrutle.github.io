function setup() {

    let input = document.getElementById("input");
    let navnDiv = document.getElementById("navn");
    let btn = document.getElementById("button");
    btn.addEventListener("click", niceName);


    function niceName(s) {
        let ferdigNavnArray = [];
        let biterOriginal = input.value.toLowerCase();
        let biter = biterOriginal.split(" ");
        for (let n of biter) {
            let m = n.charAt(0).toUpperCase();
            let o = n.substr(1);
            let p = m+o;
            ferdigNavnArray.push(p);
        }
        let ferdigNavn = ferdigNavnArray.join(" ");
        navnDiv.innerHTML = ferdigNavn;

    }

}