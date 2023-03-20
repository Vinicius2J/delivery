//sistema botao mudar de cor

const botaoCombos =  document.getElementById('btn-combos');
const botaoBebidas = document.getElementById('btn-bebidas');
const botaoSaches =  document.getElementById('btn-saches');
const botaoDiversos = document.getElementById('btn-diversos');

//Botao combo clickado

botaoCombos.addEventListener('click', mudarCorBotaoCombos);

function mudarCorBotaoCombos() {
    botaoCombos.style.color="red";//botao principal

    //botoes segundario

    botaoBebidas.style.color = 'black'
    botaoSaches.style.color = 'black'
    botaoDiversos.style.color = 'black';
}

//Botao bebidas clickado

botaoBebidas.addEventListener('click', mudarCorBotaoBebidas);

function mudarCorBotaoBebidas() {
    botaoBebidas.style.color="red";//botao principal

    botaoCombos.style.color = 'black'
    botaoDiversos.style.color = 'black'
    botaoSaches.style.color = 'black';
}

//Botao saches clickado

botaoSaches.addEventListener('click', mudarCorBotaoSashes);

function mudarCorBotaoSashes() {
    botaoSaches.style.color="red";//botao principal

    botaoCombos.style.color = 'black'
    botaoDiversos.style.color = 'black' 
    botaoBebidas.style.color = 'black';
}

//Botao diversos clickado

botaoDiversos.addEventListener('click', mudarCorBotaoDiversos);

function mudarCorBotaoDiversos() {
    botaoDiversos.style.color="red";//botao principal

    botaoCombos.style.color = 'black'
    botaoSaches.style.color = 'black' 
    botaoBebidas.style.color = 'black';
}