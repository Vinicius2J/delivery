let botaoCombos = document.getElementById('btn-combos');
let botaoHamburguer = document.getElementById('btn-hanburguer');
let botaoBebidas = document.getElementById('btn-bebidas');
let botaoSaches = document.getElementById('btn-saches');
let botaoDiversos = document.getElementById('diversos');

//Combos

function scrollToSectionCombos(combos) {
    const section = document.getElementById('combos');
    section.scrollIntoView({behavior:"smooth"});
};

//Hambúrguer

function scrollToSectionHamburguer(hanburguer) {
    const section = document.getElementById('hanburguer');
    section.scrollIntoView({behavior:"smooth"});
};

//bebidas

function scrollToSectionBebidas(bebidas) {
    const section = document.getElementById('bebidas');
    section.scrollIntoView({behavior:"smooth"});
};

//saches

function scrollToSectionSaches(saches) {
    const section = document.getElementById('saches');
    section.scrollIntoView({behavior:"smooth"});
};

//diversos

function scrollToSectionDiversos(diversos) {
    const section = document.getElementById('diversos');
    section.scrollIntoView({behavior:"smooth"});
};


//Cabaçario fixo

var minhaDiv = document.getElementById('botoes-cima');
var alturaMinhaDiv = minhaDiv.offsetHeight * 15;
window.addEventListener('scroll', function() {
  if (window.pageYOffset >= alturaMinhaDiv) {
    minhaDiv.classList.add('minha-div-fixa');
  } else {
    minhaDiv.classList.remove('minha-div-fixa');
  }
});

