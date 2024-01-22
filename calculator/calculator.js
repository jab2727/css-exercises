let firstNumber = 0;
let secondNumber = 0;
let operator;
let displayNumber = 0;
let output = document.getElementById("output");
let txt;
let decimal = false;
let add = false;
let subtract = false;
let multiply = false;
let divide = false;
let equals = false;
let reset = true;

document.getElementById("1").addEventListener("click", () => {
    displayNumberCheck("1");}
);
document.getElementById("2").addEventListener("click", () => {
    displayNumberCheck("2");}
);
document.getElementById("3").addEventListener("click", () => {
    displayNumberCheck("3");}
);
document.getElementById("4").addEventListener("click", () => {
    displayNumberCheck("4");}
);
document.getElementById("5").addEventListener("click", () => {
    displayNumberCheck("5");}
);
document.getElementById("6").addEventListener("click", () => {
    displayNumberCheck("6");}
);
document.getElementById("7").addEventListener("click", () => {
    displayNumberCheck("7");}
);
document.getElementById("8").addEventListener("click", () => {
    displayNumberCheck("8");}
);
document.getElementById("9").addEventListener("click", () => {
    displayNumberCheck("9");}
);
document.getElementById("0").addEventListener("click", () => {
    displayNumberCheck("0");}
);
document.getElementById(".").addEventListener("click", () => {
    if (!displayNumber.toString().includes('.')){
        decimal = true;
        output.textContent = displayNumber + ".";
        }
    }
);

document.getElementById("CLEAR").addEventListener("click", () => {
    displayNumber = 0;
    output.textContent = displayNumber;
    }
);
document.getElementById("ALL_CLEAR").addEventListener("click", () => {
    displayNumber = firstNumber = secondNumber = 0;
    reset = true;
    output.textContent = displayNumber;
    }
);

document.getElementById("add").addEventListener("click", () => {
    functionCheck();
    add = true;
    subtract = multiply = divide = false;
    }
);  
document.getElementById("subtract").addEventListener("click", () => {
    functionCheck();
    subtract = true;
    add = multiply = divide = false;
    }
); 
document.getElementById("multiply").addEventListener("click", () => {
    functionCheck();
    multiply = true;
    add = subtract = divide = false;
    }
); 
document.getElementById("divide").addEventListener("click", () => {
    functionCheck();
    divide = true;
    add = subtract = multiply = false;
    }
);   
document.getElementById("equals").addEventListener("click", () => {
    functionCheck();
    add = subtract = multiply = divide = false;
    }
);           

function displayNumberCheck(newDigit){   
    if (displayNumber.toString().length > 11){
        displayNumber = "Go find a bigger calculator...";
    } else if (decimal == true) {
        displayNumber = displayNumber + "." + newDigit;
        decimal = false;
    }else if (displayNumber.toString().includes('.')){
        displayNumber = displayNumber.toString() + newDigit.toString();
    } else {
        displayNumber = Number(displayNumber + newDigit);
    }
    output.textContent = displayNumber;
}   

displayNumberCheck('0');

function functionCheck(){  
    if (add == true){
        console.log("entered addition loop.")
        add = false;
        firstNumber = secondNumber;
        secondNumber = displayNumber;
        displayNumber = Number(firstNumber) + Number(secondNumber);
        secondNumber = displayNumber;
        output.textContent = displayNumber;
        displayNumber = '0';
    } else if (subtract == true){
        console.log("entered subtraction loop.")
        subtract = false;
        firstNumber = secondNumber;
        secondNumber = displayNumber;
        displayNumber = Number(firstNumber) - Number(secondNumber);
        secondNumber = displayNumber;
        output.textContent = displayNumber;
        displayNumber = '0';
    }else if (multiply == true){
        console.log("entered multiplication loop.")
        multiply = false;
        firstNumber = secondNumber;
        secondNumber = displayNumber;
        displayNumber = (Number(firstNumber) * Number(secondNumber)).toFixed(2);
        secondNumber = displayNumber;
        output.textContent = displayNumber;
        displayNumber = '0';
    }else if (divide == true){
        console.log("entered division loop.")
        divide = false;
        console.log("The display number is: " + displayNumber)
        if (displayNumber == '0'){
            displayNumber = "Benjamin is a turd.";
            console.log("Turd loop complete.");
        } else {
            firstNumber = secondNumber;
            secondNumber = displayNumber;
            displayNumber = (Number(firstNumber) / Number(secondNumber)).toFixed(2);
            secondNumber = displayNumber;
        }
        output.textContent = displayNumber;
        displayNumber = '0';
    }else if(reset==true){
        reset=false;
        secondNumber = displayNumber;
        firstNumber = secondNumber;
        displayNumber = '0';
    }
    else{
        console.log("entered equals loop.")
        firstNumber = secondNumber;
        displayNumber = '0';
        // displayNumberCheck(0);
    }

    console.log("--------")

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(displayNumber);
    
    console.log("Completed operation loops.")
}
