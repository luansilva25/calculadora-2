function clq1() {
    alert('voce clicou botão 1')
}
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', clq2)

function clq2() {
    alert('voce clicou com o botão 2')
}

let valor1 = document.querySelector('#valor-1')
let valor2 = document.querySelector('#valor-2')
let resul = document.querySelector('#resul')

let btSoma = document.querySelector('#btSoma')
btSoma.addEventListener('click', function () {
    Soma(Number(valor1.value), Number(value2.value))
})

function Soma(a, b) {
    resul.textContent(a + b);
}
let btSub = document.querySelector('#btSubtração')
btSub.addEventListener('click', function () {
    Subtração(Number(valor1.value), Number(value2.value))
})

function Subtração(a, b) {
    resul.textContent(a - b);
}

let btMulti = document.querySelector('#btMultiplicação')
btMulti.addEventListener('click', function () {
    Multiplicação(Number(valor1.value), Number(value2.value))
})

function Multiplicação(a, b) {
    resul.textContent(a * b);
}

let btdivi = document.querySelector('#btDivisão')
btdivi.addEventListener('click', function () {
    Divisão(Number(valor1.value), Number(value2.value))
})

function Divisão(a, b) {
    resul.textContent(a / b);
}
let selectIdioma = document.querySelector('#idioma')
selectIdioma.addEventListener('change', function() {
    if(this.value == `br`){
        btSoma.value = 'Somar'
    }
    else if(this.value == `es`){
        btSoma.value = 'Sumar'
    }
    else if(this.value == `en`){
        btSoma.value = 'Sum'
    }
    else if()
    else if(this.value == `br`){
        btSoma.value = 'Subtração'
    }
    else if(this.value == `es`){
        btSoma.value = 'S'
    }
    else if(this.value == `en`){
        btSoma.value = 'Subtration'
    }
    else if(this.value == `br`){
        btSoma.value = 'Soma'
    }
})