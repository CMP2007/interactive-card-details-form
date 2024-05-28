const input1 = document.getElementById("input_1");
const input2 = document.getElementById("input_2");
const input3 = document.getElementById("input_3");
const input4 = document.getElementById("input_4");
const input5 = document.getElementById("input_5");

const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".cardName");
const MM = document.getElementById("MM");
const YY = document.getElementById("YY");
const cvc = document.getElementById("cvc");
let id;


document.addEventListener("click", (event)=>{
    getInput(event)
    getName()
    getNumber()
    getMonth()
    getYear()
    getCvc()
})

function getInput(event) {
    let input = event.target.id
    if (input.includes("input")) {
       id = input.slice(-1)
     }
}

/***************************************** functions get values ************************************************** */

function getName() {
    if (id == "1") {
        input1.addEventListener("input", ()=>{
            let name = input1.value;
            name = name.toUpperCase();
            cardName.innerHTML = name;
        })
        console.log(id);
    }
}

function getNumber() {
    if (id == "2") {
        input2.addEventListener("input", ()=>{
            let number = input2.value;
            let formNumber = number.padEnd(16, 0)
            let subNumber = formNumber.match(new RegExp('.{1,' + 4 + '}', 'g'));
            let cardNumberValue = subNumber.join(" ");
            cardNumber.innerHTML = cardNumberValue;
        })
        console.log(id);
    }
}

function getMonth() {
    if (id == "3") {
        input3.addEventListener("input", ()=>{
            let month = input3.value;
            MM.innerHTML = month;
        })
    }
}

function getYear() {
    if (id == "4") {
        input4.addEventListener("input", ()=>{
            let year = input4.value;
            YY.innerHTML = year;
        })
    }
}

function getCvc() {
    if (id == "5") {
        input5.addEventListener("input", ()=>{
            let cvcValue = input5.value;
            cvc.innerHTML = cvcValue;
        })
    }
}
/******************************************************************************************* */