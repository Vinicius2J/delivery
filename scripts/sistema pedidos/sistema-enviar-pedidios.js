function monstrarComplementos() {
    document.getElementById('descricao').style.display = 'flex';
    let btnVoltar = document.getElementById('sairDescricao');

    btnVoltar.addEventListener('click', () => {
        document.getElementById('descricao').style.display = 'none';
    })
}   