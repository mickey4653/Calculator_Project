// function add(n1, n2) {
    // return n1 + n2;

// }

// function substract(n1, n2) {
    // return n1 - n2;

// }

// function multiply(n1, n2) {
    // return n1 * n2;

// }

// function divide(n1, n2) {
    // return n1 / n2;

// }

// function operate(operator, n1, n2) {
    // if (operator === "+") {
        // return add(n1, n2);

    // }else if(operator === "-"){
		// return substract(n1, n2);
	// }else if(operator === "*"){
		// return multiply(n1, n2);
	// }else if(operator === "/"){
		// return divide(n1, n2);
	// }

// }
var displayVal = '0';
var pendingVal = null;




var numbers = document.getElementsByClassName('numbs');
// console.log(numbers);

var operators = document.getElementsByClassName('operations');
// console.log(operators);


// var disp = document.querySelector('input');



function display() {
    var disp = document.querySelector('input');
    disp.value = displayVal;


}

display();





function num1() {
    var btn1 = document.querySelector('input');
    if (btn1.value === '0') {
        btn1.value = '';

    }
    btn1.value += 1;
}

function num2() {
    const btn2 = document.querySelector('input');
    if (btn2.value === '0') {
        btn2.value = '';

    }
    btn2.value += 2;
}

function num3() {
    var btn3 = document.querySelector('input');
    if (btn3.value === '0') {
        btn3.value = '';

    }
    btn3.value += 3;
}

function num4() {
    var btn4 = document.querySelector('input');
    if (btn4.value === '0') {
        btn4.value = '';

    }
    btn4.value += 4;
}

function num5() {
    var btn5 = document.querySelector('input');
    if (btn5.value === '0') {
        btn5.value = '';

    }
    btn5.value += 5;
}

function num6() {
    var btn6 = document.querySelector('input');

    if (btn6.value === '0') {
        btn6.value = '';

    }
    btn6.value += 6;
}

function num7() {
    var btn7 = document.querySelector('input');
    if (btn7.value === '0') {
        btn7.value = '';

    }
    btn7.value += 7;
}

function num8() {
    var btn8 = document.querySelector('input');
    if (btn8.value === '0') {
        btn8.value = '';

    }
    btn8.value += 8;
}

function num9() {
    var btn9 = document.querySelector('input');
    if (btn9.value === '0') {
        btn9.value = '';

    }
    btn9.value += 9;
}

function num0() {
    var btn0 = document.querySelector('input');

    btn0.value += 0;
}

function plus(num) {

    var btnPlus = document.querySelector('input');
    btnPlus.value += '+';
    // var firstValue = btnPlus.value;

    // if (firstValue) {
    //     num = firstValue;

    //     alert(firstValue);



    // }

}

function minus() {

    var btnMinus = document.querySelector('input');
    btnMinus.value += '-';
}

function multi() {

    var btnMulti = document.querySelector('input');
    btnMulti.value += '*';
}

function divi() {

    var btnDivi = document.querySelector('input');
    btnDivi.value += '/';
}

function clean() {
    var btnClean = document.querySelector('input');
    btnClean.value = "";
    if (btnClean.value === '') {
        btnClean.value = '0';

    }
}

function dot() {
    var btnDot = document.querySelector('input');
    // document.querySelector('.dot').disabled = true;
    // alert("Oops! Only one dot required");
    if (!btnDot.value.includes('.')) {
        btnDot.value += '.';
        btnDot.innevar = btnDot.value;
    }
}

function eq() {
    var btnEquals = document.querySelector('input');
    btnEquals.value = eval(btnEquals.value);



    // if (operators === '+') {

    // }

}

function backSpac() {
    var btnBackSpace = document.querySelector('input');
    var lengthOfDisplay = btnBackSpace.value.length;
    btnBackSpace.value = btnBackSpace.value.slice(0, lengthOfDisplay - 1);
    document.getElementById('inpDisplay').innerText = btnBackSpace;

}