/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = 0; // Lagrat/gammalt värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /
let isComma = false;

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        addDigit(digit);
    } 
    // Inte en siffertangent, övriga tangenter.
    else if (btn === 'add') { 
        setOperator('add');
    } 
    else if (btn === 'sub') {
        setOperator('sub');
    } 
    else if (btn === 'mul') {
        setOperator('mul');
    }
    else if (btn === 'div') {
        setOperator('div');
    }
    else if (btn === 'comma') {
        addComma('comma');
    }
    else if (btn === 'enter') {
        calculate();
    }
    else if (btn === 'clear') {
        memClear();
    }
}

/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
    lcd.value = lcd.value + digit;
}

/**
 * Lägger till decimaltecken
 */
function addComma(comma) {
    if(isComma === false) {
        lcd.value = lcd.value + '.';
        isComma = true;
    }
    else {
        console.log("komma finns")
    }

}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator){
    memory = lcd.value;
    if(operator === 'add') {
        arithmetic = '+';
    }
    else if(operator === 'sub'){
        arithmetic = '-';
    }
    else if(operator === 'mul') {
        arithmetic = '*';
    }
    else if(operator === 'div') {
        arithmetic = '/';
    }

    clearLCD(); 
}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {
    if(arithmetic === '+') {
        lcd.value = +memory + +lcd.value;
    }
    else if(arithmetic === '-') {
        lcd.value = memory - lcd.value;
    }
    else if(arithmetic === '*') {
        lcd.value = memory * lcd.value;
    }
    else if(arithmetic === '/') {
        lcd.value = memory / lcd.value;
    }

}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear(){
    memory = 0;
    arithmetic = null;
    clearLCD();
}


window.onload = init;