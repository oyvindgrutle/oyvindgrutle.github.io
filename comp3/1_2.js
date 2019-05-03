function setup() {


    let inpName = document.getElementById("name");
    let inpYearOfBirth = document.getElementById("yearOfBirth");
    let inpAge = document.getElementById("age");
    let message = document.getElementById("message");
    let btnSubmit = document.getElementById("submit");
    let btnReset = document.getElementById("reset");

    btnSubmit.addEventListener("click", submit);
    btnReset.addEventListener("click", reset);

    function submit() {

        let name = inpName.value;
        let age = inpAge.valueAsNumber;
        let yearOfBirth = inpYearOfBirth.valueAsNumber;

        console.log(age);

        let currentTime = new Date()
        if (age > 2019 - yearOfBirth ){
            alert("Don't lie about your age");
        }

        else if (name == "" || age == NaN || yearOfBirth == NaN){
            alert("You must fill in all fields");
        } else {
            message.innerHTML = "Hei " + name + 
            ". Year of birth: " + 
            yearOfBirth + "  Age: " + age;
        }

    }

    function reset(){
        location.href="1_2.html";
    }
}