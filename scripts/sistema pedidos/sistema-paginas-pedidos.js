//Mostra as pagians das bebidas
let botaoCoca = document.getElementById('btnCoca');

botaoCoca.addEventListener('click', () => {
    document.getElementById('cocas').style.display = 'block';
    document.getElementById('removePageCoca').style.display = 'flex';

    let btnRemovCoca = document.getElementById('removePageCoca');

    btnRemovCoca.addEventListener('click', () => {
        document.getElementById('cocas').style.display = 'none';
        document.getElementById('removePageCoca').style.display = 'none';
    })
})

//PEDIDIOS ABAIXO

//HAMBURGUER 1
let btn = document.getElementById('hamburguer1');
btn.addEventListener('click', () => {
    document.querySelector('footer').style.display = 'none'; //some o footer
    document.querySelector('header').style.display = 'none'; //some o header
    document.querySelector('main').style.display = 'none'; //some o main

    //Apareçe a pagina de peidos e complementos
    document.getElementById('fazer-pedidos').style.display = 'flex';
    document.getElementById('nomePedido').innerHTML = '< CARRINHO';
    let voltarPage = document.getElementById('nomePedido');

    //Volta para a pagina inicial
    voltarPage.addEventListener('click', () => {
        document.getElementById('fazer-pedidos').style.display = 'none'; //some com a pagina de produtos

        document.querySelector('footer').style.display = 'flex'; //Volta o footer
        document.querySelector('header').style.display = 'flex'; //Volta o header
        document.querySelector('main').style.display = 'flex'; //Volta o main
    })
})