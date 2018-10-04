const controleLed = action => {
    fetch(`http://localhost:3000/led?statusLed=${action}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

let btnOn = document.getElementById("btn-on");
let btnOff = document.getElementById("btn-off");

btnOn.addEventListener("click",() => controleLed("on"));
btnOff.addEventListener("click", () => controleLed("off"));