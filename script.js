const h1 = document.querySelector('h1');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const btnResult = document.querySelector("#result");

btn.addEventListener('click',btnOnClick);

function btnOnClick () {
    const sumInputs = input1.value+input2.value;
    btnResult.innerText = "El resultado es: " + sumInputs; 
}



