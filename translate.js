const Lportugues = document.createElement('script');
Lportugues.src = 'idioma/portugues.js';
document.head.appendChild(Lportugues);

const Lespanhol = document.createElement('script');
Lespanhol.src = 'idioma/espanhol.js';
document.head.appendChild(Lespanhol);

const Lfrances = document.createElement('script');
Lfrances.src = 'idioma/frances.js';
document.head.appendChild(Lfrances);

const Lingles = document.createElement('script');
Lingles.src = 'idioma/english.js';
document.head.appendChild(Lingles);

let Idioma = document.querySelector('#idioma')
Idioma.addEventListener('change', function () {
    translate(this.value);
})

function translate(Idioma) {
    const traducao = (Idioma == 'es') ? espanhol() :
        (Idioma == 'en') ? ingles() :
            (Idioma == 'fr') ? frances() :
                (Idioma == 'br') ? portugues() :
                    null;
    setLanguage(traducao);
}
function setLanguage(traducao) {
    btSoma = document.getElementById('btSoma')
    btsub = document.getElementById('btSubtração')
    btMulti = document.getElementById('btMultiplicação')
    btdivisão = document.getElementById('btDivisão')
    titulo = document.getElementById('titulo')
    boasvindas == document.getElementById('boasVindas')

    btSoma.value = traducao.soma
    btsub.value = traducao.subtracao
    btMulti.value = traducao.multiplicacao
    btdivi.value = traducao.divisao
    titulo.innerHTML = traducao.titulo
    boasvindas.innerHTML = traducao.boasVindas
}