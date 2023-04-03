/*

//Descrição X-EGG

let btnHamburguerXEGG = document.getElementById('01');
btnHamburguerXEGG.addEventListener('click', () => {
    document.getElementById('descricao').style.display = 'flex';

    let btnVoltar = document.getElementById('sairDescricao');
    let mudarDescricao = document.getElementById('todaDescrição');
    let mudarTituloDescricao = document.getElementById('tituloDescricao');

    mudarTituloDescricao.innerHTML = 'Descrição X-EGG';
    mudarDescricao.innerHTML = 'Pão, maionese, hambúrguer, queijo, presento, ovo, tomate, alface, milho, cheddar, catupiry e batata palha';
    
    btnVoltar.addEventListener('click', () => {
        document.getElementById('descricao').style.display = 'none';
    });
});

//Descrição X-BURGUER

let btnHamburguerXBURGUER = document.getElementById('02');
btnHamburguerXEGG.addEventListener('click', () => {
    document.getElementById('descricao').style.display = 'flex';

    let btnVoltar = document.getElementById('sairDescricao');
    let mudarDescricao = document.getElementById('todaDescrição');
    let mudarTituloDescricao = document.getElementById('tituloDescricao');

    mudarTituloDescricao.innerHTML = 'Descrição X-EGG';
    mudarDescricao.innerHTML = 'Pão, maionese, hambúrguer, queijo, presento, ovo, tomate, alface, milho, cheddar, catupiry e batata palha';
    
    btnVoltar.addEventListener('click', () => {
        document.getElementById('descricao').style.display = 'none';
    });
});

*/

function descricao(h1, p) {
    document.getElementById('tituloDescricao').textContent = h1;
    document.getElementById("todaDescrição").textContent = p;

    document.getElementById('descricao').style.display = 'flex';
    let btnVoltar = document.getElementById('sairDescricao');

    btnVoltar.addEventListener('click', () => {
        document.getElementById('descricao').style.display = 'none';
    })
}