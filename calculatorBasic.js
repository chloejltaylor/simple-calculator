// select buttons 

let allNumbers = document.querySelectorAll(".calc-number");


let button0 = document.querySelector("#calc0");
let button1 = document.querySelector("#calc1");
let button2 = document.querySelector("#calc2");
let button3 = document.querySelector("#calc3");
let button4 = document.querySelector("#calc4");
let button5 = document.querySelector("#calc5");
let button6 = document.querySelector("#calc6");
let button7 = document.querySelector("#calc7");
let button8 = document.querySelector("#calc8");
let button9 = document.querySelector("#calc9");

let buttonPlus = document.querySelector("#calcPlus");
let buttonSubtract = document.querySelector("#calcSubtract");
let buttonMultiply = document.querySelector("#calcMultiply");
let buttonDivide = document.querySelector("#calcDivide");
let buttonEquals = document.querySelector("#calcEquals");
let buttonDecimalPoint = document.querySelector("#calcPoint");


let display = document.querySelector("#screen");
let buttonClear = document.querySelector("#calcC");

// SET UP

let displayedNumber = 0;
display.innerText = displayedNumber;
let operationSelected = false;
let addSelected = false;
let subtractSelected = false;
let multiplySelected = false;
let divideSelected = false;
let equalsPressed =false;
let decimalPressed = false;
let decimalDisplayed=false;
let numberSelected = false;

// to record the entered figures to be calculated
let first = 0;
let nextEntry = 0;


//to count decimal places
let countNumbers = 1;


function clearDisplay(){
    displayedNumber = 0;
    first=0;
    display.innerText =displayedNumber;
    resetCountNumbers()
    decimalPressed=false;
}

function resetCountNumbers(){
    countNumbers=1;
}

function noDecimalAdded(digit){
    displayedNumber = displayedNumber*10+digit;
}

function decimalAdded(digit){
    let decimal=0;
    decimal = digit * ((Math.pow(1/10, countNumbers)));
    displayedNumber += decimal;
    countNumbers++;
}


function zero() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(0);
    } else {
        decimalAdded(0)
    }
}


function one() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(1);
    } else {
        decimalAdded(1)
    }
}

function two() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(2);
    } else {
        decimalAdded(2)
    }
}


function three() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(3);
    } else {
        decimalAdded(3)
    }
}

function four() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(4);
    } else {
        decimalAdded(4)
    }
}

function five() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(5);
    } else {
        decimalAdded(5)
    }
}

function six() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(6);
    } else {
        decimalAdded(6)
    }
}

function seven() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(7);
    } else {
        decimalAdded(7)
    }
}

function eight() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(8);
    } else {
        decimalAdded(8)
    }
}

function nine() {
    testForEquals();
    if(decimalPressed==false){
        noDecimalAdded(9);
    } else {
        decimalAdded(9)
    }
}

function testForEquals() {
    if(equalsPressed ==true) {
        displayedNumber = 0;
        first = 0;
        equalsPressed =false;
    }
}

function number(){
    numberSelected = true;
    display.innerText = Math.round( displayedNumber * 10000000) / 10000000;
    if (operationSelected===false) {
        first = displayedNumber;
        return first;
    } else {
        nextEntry = displayedNumber;
        return nextEntry;
    }
    

}

function numberReset (){
    equalsPressed =false;
    displayedNumber = 0;
    operationSelected =true;
    decimalPressed=false;
    resetCountNumbers();
}


let plus = function () {
    numberReset ();
    addSelected =true;
    display.innerText =" +";
    calculate();
    return plus;
}

let subtract = function () {
    numberReset ();
    subtractSelected =true;
    display.innerText ="-";
    return subtract;
}

let multiply = function () {
    numberReset ()
    multiplySelected =true;
    display.innerText ="×";
    return multiply;
}

let divide = function () {
    numberReset ()
    divideSelected =true;
    display.innerText ="÷";
    return divide;
}

function answer() {
    // let answer = 0;
    calculate();
    first = answer;
    // nextEntry = 0;
    displayedNumber = answer;
    display.innerText = Math.round( answer * 10000000) / 10000000
    operationSelected =false;
    addSelected =false;
    subtractSelected =false;
    multiplySelected =false;
    divideSelected =false;
    equalsPressed =true;
    resetCountNumbers();
    decimalPressed=false;
    return answer;
}

function calculate(){
    if(addSelected==true){
        answer = first + nextEntry;
    } else
     if (subtractSelected==true){
        answer = first - nextEntry;
    } else if (multiplySelected==true){
        answer = first * nextEntry;
    } else if (divideSelected==true){
        answer = first / nextEntry;
    } else {
        console.log("nothing to see here")
    }
}


function point(){
    if(decimalPressed==false){
        display.innerText =displayedNumber + ".";
        decimalDisplayed=true;
        decimalPressed=true;
    }
}



buttonClear.addEventListener("click", clearDisplay);

button0.addEventListener("click", zero);
button1.addEventListener("click", one);
button2.addEventListener("click", two);
button3.addEventListener("click", three);
button4.addEventListener("click", four);
button5.addEventListener("click", five);
button6.addEventListener("click", six);
button7.addEventListener("click", seven);
button8.addEventListener("click", eight);
button9.addEventListener("click", nine);
buttonDecimalPoint.addEventListener("click", point);

for(let i=0;i<10;i++){
    allNumbers[i].addEventListener("click",number);
}

buttonEquals.addEventListener("click", answer);
buttonPlus.addEventListener("click", plus);
buttonSubtract.addEventListener("click", subtract);
buttonMultiply.addEventListener("click", multiply);
buttonDivide.addEventListener("click", divide);


