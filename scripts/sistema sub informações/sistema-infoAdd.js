//Informações adicionais

let botaoInformações = document.getElementById('subInfoInformações');

botaoInformações.addEventListener("click", informaçõesAdicionais);

//Esta função executa uma simples troca de telas para o usuario poder ver as informações adicionais sobre o estabelecimento

function informaçõesAdicionais() {
    var paginaInformaçõesAdicionais = document.getElementById('infoAdd').style.display = 'flex';

    paginaInicial = document.getElementById('pagina').style.display = 'none';
    footer = document.querySelector('footer').style.display= 'none';

    var botaoVoltarInfoAdd = document.getElementById('voltarInfo');

    botaoVoltarInfoAdd.addEventListener("click", () => {
        
        paginaInformaçõesAdicionais = document.getElementById('infoAdd').style.display = 'none';
        

        paginaInicial = document.getElementById('pagina').style.display = 'flex';
        paginaInicial = document.getElementById('pagina').style.flexDirection = 'column';

        footer = document.querySelector('footer').style.display= 'flex';
    })
}