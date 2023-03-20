//Forma de Pagamento

let botaoPagamentos = document.getElementById('subInfoPagamentos');

botaoPagamentos.addEventListener("click", informaçõesSobrePagamento);

//Esta função executa uma simples troca de telas para o usuario poder ver como e as formas de pagamento

function informaçõesSobrePagamento() {
    var paginaPagamentos = document.getElementById('pagamentos').style.display = 'flex';

    var paginaInicial = document.getElementById('pagina').style.display = 'none';

    let botaoVoltarPagamentos = document.getElementById('voltarPaginaInicial');
    
    footer = document.querySelector('footer').style.display= 'none';

    botaoVoltarPagamentos.addEventListener("click", () => {
        paginaPagamentos = document.getElementById('pagamentos').style.display = 'none';

        paginaInicial = document.getElementById('pagina').style.display = 'flex';
        paginaInicial = document.getElementById('pagina').style.flexDirection = 'column';

        footer = document.querySelector('footer').style.display= 'flex';
    });
};