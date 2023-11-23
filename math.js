
let valor1 = document.querySelector('#valor-1')
let valor2 = document.querySelector('#valor-2')
let resul = document.querySelector('#resul')

let btSoma = document.querySelector('#btSoma')
btSoma.addEventListener('click', function () {
    Soma(Number(valor1.value), Number(valor2.value))
})

function Soma(a, b) {
    resul.innerHTML = (a + b);
}
let btSub = document.querySelector('#btSubtração')
btSub.addEventListener('click', function () {
    Subtração(Number(valor1.value), Number(valor2.value))
})

function Subtração(a, b) {
    resul.innerHTML = (a - b);
}

let btMulti = document.querySelector('#btMultiplicação')
btMulti.addEventListener('click', function () {
    Multiplicação(Number(valor1.value), Number(valor2.value))
})

function Multiplicação(a, b) {
    resul.innerHTML = (a * b);
}

let btdivi = document.querySelector('#btDivisão')
btdivi.addEventListener('click', function () {
    Divisão(Number(valor1.value), Number(valor2.value))
})

function Divisão(a, b) {
    resul.innerHTML = (a / b);
}

let reset = document.querySelector('#reset')
reset.addEventListener('click',function(){
    reset(resul.innerHTML = '')
})
