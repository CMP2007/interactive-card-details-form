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

const borderInput1 = document.getElementById("divInputBig1");
const borderInput2 = document.getElementById("divInputBig2");
const borderInput3 = document.querySelector(".borderInputSmall1");
const borderInput4 = document.querySelector(".borderInputSmall2");
const borderInput5 = document.querySelector(".borderInputMed");

document.addEventListener("click", (event)=>{
    getInput(event)
    getName()
    getNumber()
    getMonth()
    getYear()
    getCvc()  
})

/***************************************** event listeners border ************************************************** */

input1.addEventListener("focus",()=>{
    borderInput1.style.setProperty("--visibleNumber", "inline")
})
input1.addEventListener("blur",()=>{
    if (input1.value) {
        nameOk = true;
    }
    else { 
        nameOk = false;
    }
    borderInput1.style.setProperty("--visibleNumber", "none")
})


input2.addEventListener("focus",()=>{
    borderInput2.style.setProperty("--visibleNumber", "inline")
})
input2.addEventListener("blur",()=>{
    if (numberOk == true && input2.value.length > 15 || input2.value.length == 0) {
        borderInput2.style.setProperty("--visibleNumber", "none")
    }
})


input3.addEventListener("focus",()=>{
    borderInput3.style.setProperty("--visibleNumber", "inline")
})
input3.addEventListener("blur",()=>{
    if (monthOk == true && input3.value.length == 2 || input3.value.length == 0) {
        borderInput3.style.setProperty("--visibleNumber", "none")
    }
})


input4.addEventListener("focus",()=>{
    borderInput4.style.setProperty("--visibleNumber", "inline")
})
input4.addEventListener("blur",()=>{
    if (yearOk == true && input4.value.length == 2 || input4.value.length == 0) {
        borderInput4.style.setProperty("--visibleNumber", "none")
    }
})


input5.addEventListener("focus",()=>{
    borderInput5.style.setProperty("--visibleNumber", "inline")
})
input5.addEventListener("blur",()=>{
    if (cvcOk == true && input5.value.length == 3 || input5.value.length == 0) {
        borderInput5.style.setProperty("--visibleNumber", "none")   
    }
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
            validateName();
        })
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
            validateNumber(number);
        })
        console.log(id);
    }
}

function getMonth() {
    if (id == "3") {
        input3.addEventListener("input", ()=>{
            let month = input3.value;
            let formMonth = month.padEnd(2, 0)
            MM.innerHTML = formMonth;
            validateMonth(month)
        })
    }
}

function getYear() {
    if (id == "4") {
        input4.addEventListener("input", ()=>{
            let year = input4.value;
            let formYear = year.padEnd(2, 0);
            YY.innerHTML = formYear;
            validateYear(year);
        })
    }
}

function getCvc() {
    if (id == "5") {
        input5.addEventListener("input", ()=>{
            let cvcValue = input5.value;
            let formCvc = cvcValue.padEnd(3, 0);
            cvc.innerHTML = formCvc;
            validateCvc(cvcValue)
        })
    }
}

/********************************************* validate data ********************************************** */
let alert1 = document.querySelector(".alert1");
let alert2 = document.querySelector(".alert2");
let alert3 = document.querySelector(".alert3");
let nameOk = false
let numberOk = false;
let monthOk = false;
let yearOk = false
let cvcOk = false;

function validateName() {
    if (input1.value) {
        borderInput1.style.setProperty("--borderColor", " linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))");
    }
}

function validateNumber(number) {
    let numberCheck =  Number(number)
        if (!isNaN(numberCheck) && input2.value.length) {
            numberOk = true;
            alert1.style.setProperty("display", "none");
            borderInput2.style.setProperty("--borderColor", " linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))");
        }
        else{
            numberOk = false;
            alert1.style.setProperty("display", "block");
            borderInput2.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
        }
}

function validateMonth(month) {
    let monthCheck = Number(month);
    if (!isNaN(monthCheck) && input3.value.length) {
        monthOk = true;
        alert2.style.setProperty("display", "none");
        borderInput3.style.setProperty("--borderColor", " linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))");
    }
    else{
        monthOk = false;
        borderInput3.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
    }
}

function validateYear(year) {
    let yearCheck = Number(year);
    if (!isNaN(yearCheck) && input4.value.length) {
        yearOk = true;
        alert2.style.setProperty("display", "none");
        borderInput4.style.setProperty("--borderColor", " linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))");
    }
    else{
        yearOk = false;
        borderInput4.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
    }
}

function validateCvc(cvcValue) {
    let cvcCheck = Number(cvcValue);
    if (!isNaN(cvcCheck) && input5.value.length) {
        cvcOk = true;
        alert3.style.setProperty("display", "none");
        borderInput5.style.setProperty("--borderColor", " linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))");
        console.log(cvcOk);
    }
    else{
        cvcOk = false;
        borderInput5.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
        console.log(cvcOk)
    }
}

function alertLetters(letters) {
    
}
/********************************************* buttons ********************************************** */
const button = document.querySelector(".button");
const form = document.querySelector(".sect_2");
const thanks = document.querySelector(".sect_3");

button.addEventListener("click", ()=>{
    if (nameOk && numberOk && monthOk && yearOk && cvcOk) {
        form.classList.add("formOff");
        thanks.classList.remove("thanksOff");
    }
    else{
        let errorData = [nameOk, numberOk, monthOk, yearOk, cvcOk];
        errorData.forEach(function(data) {
            let cont = errorData.findIndex(value => !value);
            
            switch (cont){
                case 0 :
                    borderInput1.style.setProperty("--visibleNumber", "inline");
                    borderInput1.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
                    break
                case 1 :
                    borderInput2.style.setProperty("--visibleNumber", "inline");
                    borderInput2.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
                    break
                case 2 :
                    alert2.style.setProperty("display", "inline");
                    borderInput3.style.setProperty("--visibleNumber", "inline")
                    borderInput3.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
                    break
                case 3 :
                    alert2.style.setProperty("display", "inline");
                    borderInput4.style.setProperty("--visibleNumber", "inline")
                    borderInput4.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
                    break
                case 4 :
                    alert3.style.setProperty("display", "inline");
                    borderInput5.style.setProperty("--visibleNumber", "inline")
                    borderInput5.style.setProperty("--borderColor", "hsl(0, 100%, 66%)");
                    break
                default:
                    console.log(cont);
            };
        });
        }
})

/******************************* button continue *************************/
const carryON = document.getElementById("continue");

carryON.addEventListener("click", ()=>{
    location.reload()
})