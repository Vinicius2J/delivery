// objeto carrinho
let carrinho = {
    itens: [],
    precoTotal: 0
  };
  
  // função para adicionar item ao carrinho
  
  function addItem(nome, preco) {
    const itemIndex = carrinho.itens.findIndex(item => item.nome === nome);
    if (itemIndex !== -1) {
      carrinho.itens[itemIndex].quantidade += 1;
    } else {
      carrinho.itens.push({ nome, preco, quantidade: 1 });
    }
    carrinho.precoTotal += preco;
    renderizarCarrinho();
  }
  
  // função para remover item do carrinho
  
  function removeItem(nome, preco) {
    const itemIndex = carrinho.itens.findIndex(item => item.nome === nome);
    let totalItens = carrinho.itens[itemIndex].quantidade;
  
    if (totalItens > 1) {
  
      if (itemIndex !== -1) {
        carrinho.itens[itemIndex].quantidade -= 1;
      } else {
        carrinho.itens.push({ nome, preco, quantidade: 1 });
      }
      carrinho.precoTotal -= preco;
      renderizarCarrinho();
  
    }else {
      const index = carrinho.itens.findIndex(item => item.nome === nome);
      if (index !== -1 && carrinho.itens[index].preco === preco) {
        carrinho.itens.splice(index, 1);
        carrinho.precoTotal -= preco;
        renderizarCarrinho();
      } else {
        console.log(`O item ${nome} não foi encontrado no carrinho.`);
      };
    }
  }
  
  // função para limpar o carrinho
  function limparCarrinho() {
    carrinho.itens = [];
    carrinho.precoTotal = 0;
    carrinho.totalItens = 0;

     //XEGG
     let quantidadeCOCA350 = document.getElementById('quantidadeCoca350');
     let valorAtualCoca350 = parseInt(quantidadeCOCA350.textContent);
     let novoValor350 = valorAtualCoca350 = 0;
     quantidadeCOCA350.textContent = novoValor350;

     //XBURGUER

     let quantidadeCOCA550 = document.getElementById('quantidadeCoca550');
     let valorAtualCoca550 = parseInt(quantidadeCOCA550.textContent);
     let novoValorCoca550 = valorAtualCoca550 = 0;
     quantidadeCOCA550.textContent = novoValorCoca550;

     //XSALADA

     let quantidadeCOCA2L = document.getElementById('quantidadeCoca2L');
     let valorAtualCoca2L = parseInt(quantidadeCOCA2L.textContent);
     let novoValorCoca2L = valorAtualCoca2L = 0;
     quantidadeCOCA2L.textContent = novoValorCoca2L;

     //XBACON

     let quantidadeXBACON = document.getElementById('quantidadeXbacon');
     let valorAtualXbacon = parseInt(quantidadeXBACON.textContent);
     let novoValorXbacon = valorAtualXbacon = 0;
     quantidadeXBACON.textContent = novoValorXbacon;

     //XCALABRESA

     let quantidadeXCALABRESA = document.getElementById('quantidadeXcalabresa');
     let valorAtualXcalabresa = parseInt(quantidadeXCALABRESA.textContent);
     let novoValorXcalabresa = valorAtualXcalabresa = 0;
     quantidadeXCALABRESA.textContent = novoValorXcalabresa;


    renderizarCarrinho();
  };
  

  var itensDoMeuCarrinho;
  function renderizarCarrinho() {
    const itensCarrinho = document.querySelector('#itens-carrinho');
    const precoTotal = document.querySelector('#preco-total');
    const produtos = document.querySelector('#produtos');

    itensCarrinho.innerHTML = '';
    
    
    //registra se um item foi adicionado ao carrinho
    carrinho.itens.forEach(item => {
      const li = document.createElement('li');
      li.textContent = ` ${item.quantidade+'°'} - 🛒 ${item.nome}`;
      itensCarrinho.appendChild(li);
    });
    precoTotal.textContent = `Preço total: R$ ${carrinho.precoTotal.toFixed(2).replace('.',(','))}`;

};
//pegar a variavel do botao e cria o evento de click
let btnVerificarCarrinho = document.getElementById('btnProximoPagamento');
btnVerificarCarrinho.addEventListener('click', verificarCarrinho);

//sair da tela do erro ao aperta no botao
function sairErro() {
    document.getElementById('erroCarrinho').style.display = 'none';
}

function sairErroForm() {
    document.getElementById('erroFormIncompleto').style.display = 'none';
}

//Função para se for selecioando a opçao entrega apraçer a opção de enderço abaixo

var semEndereco
var comEndereco

var testeEndereco = 0;

function exibirEndereco(select) {
  let campoEndereco = document.getElementById('endrecoCaso');
  if (select.value == "entrega") {
    comEndereco = campoEndereco.style.display = 'flex';
  }else {
    semEndereco = campoEndereco.style.display = 'none';
  };
};

//Verificar se tem item no carrinho
function verificarCarrinho() {
    if (carrinho.itens.length === 0) {
        document.getElementById('erroCarrinho').style.display = 'flex';
    } else {
        //ir para a tela de finalizar produto
        const btnVolvarCarrinho = document.getElementById('voltaCarrinho');
        document.getElementById('formFinal').style.display = 'flex';
        document.getElementById('fazer-pedidos').style.display = 'none';
        //voltar para tela do carrnho caso aperte no botal voltar
        btnVolvarCarrinho.addEventListener('click', () => {
        document.getElementById('formFinal').style.display = 'none';
        document.getElementById('fazer-pedidos').style.display = 'flex';
        });

        let btnVerificarDados = document.getElementById('finalizar_pedido');
        btnVerificarDados.addEventListener('click', verificarDados);
        function verificarDados(event) {
            event.preventDefault();
            var nomeSobrenome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var formaEnvio = document.getElementById('forma-envio').value;
            var endereco = document.getElementById('endereco').value;
            var formaPagamento = document.getElementById('forma-pagamento').value;

            //Parte com Email
            if (nomeSobrenome == "" || formaEnvio == "" || formaPagamento == "") {
              document.getElementById('erroFormIncompleto').style.display = 'flex';
              document.getElementById('finalizar_pedido').style.display = 'none';

              const btnVoltarPageForm = document.getElementById('sairErroForm');
              btnVoltarPageForm.addEventListener('click', () => {
                  document.getElementById('erroFormIncompleto').style.display = 'none';
                  document.getElementById('finalizar_pedido').style.display = 'flex';
              });
            }else {
              const divItens = document.getElementById('itensParaVer');
                divItens.innerHTML = '';

                carrinho.itens.forEach(item => {
                    const p = document.createElement('p');
                    p.textContent = `${item.quantidade}/9 - ${item.nome} 💵 R$:${item.preco} `;
                    divItens.appendChild(p);
                });

                document.getElementById('confirmarDados').style.display = 'flex';
                document.getElementById('formFinal').style.display = 'none';

                document.getElementById('nomeInfo').innerHTML = `Nome: ${nomeSobrenome}`;

                document.getElementById('emailInfo').style.display = 'flex';

                if (email == "") {
                  document.getElementById('emailInfo').style.display = 'none';
                }else {
                  document.getElementById('emailInfo').innerHTML = `Email: ${email}`;
                };

                if (semEndereco) {
                  document.getElementById('enderecoInfo').style.display = 'none';
                }else {
                  document.getElementById('enderecoInfo').innerHTML =  `Endereço: ${endereco}`;
                }
                document.getElementById('formaPagamentoInfo').innerHTML = `Forma de Pagamento: ${formaPagamento}`;
                document.getElementById('formaEnvio').innerHTML = `Forma de Envio: ${formaEnvio}`;
                document.getElementById('precoTotalInfo').innerHTML = `Preço Total: R$ ${carrinho.precoTotal.toFixed(2).replace('.',(','))}`;

                //Função comprar

                let botaoComprar = document.getElementById('comprar');
                botaoComprar.addEventListener('click', comprar);

                function comprar() {

                    //pegar valor do nome do prodtuo
                        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                        let nomePedido = '';
                        let numeroPedido = '';
                        for (let i = 0; i < 5; i++) {
                          nomePedido += letras.charAt(Math.floor(Math.random() * letras.length));
                          numeroPedido += letras.charAt(Math.floor(Math.random() * letras.length));
                        };


                    //Pegar valor Observações
                    const nomeSobrenome = document.getElementById('nome').value;
                    const endereco = document.getElementById('endereco').value;
                    const formaPagamento = document.getElementById('forma-pagamento').value;
                    const observacoes = document.getElementById('obs').value;

                    const div1 = document.getElementById("itens-carrinho");
                    const div2 = document.getElementById("mandar");
                    // Obter todos os valores dentro da div1
                    const valores = div1.textContent.trim().split('\n');
                    // Adicionar valores à div2 com tag <p>
                    valores.forEach((valor) => {
                    const p = document.createElement("p");
                    p.textContent = valor;  
                    div2.appendChild(p);
                    });
              
                    //Mensagem que vai ser envidad por whatssap para o numero de  telefone da loja

                    if (email == "" || semEndereco) {
                      textSemEmail = encodeURIComponent(`*⇩ Dados Pedido ⇩*\n\n*📌 Novo Pedido: ${ nomePedido }*\n*🏷️ Numero: ${numeroPedido}*\n*📜 Pedido: ${ valores }*\n\n*⇩ Dados cliente ⇩*\n\n*Nome e Sobrenome: ${ nomeSobrenome }*\n*\n\n*⇩ Dados Entraga ⇩*\n\n*Forma de pagamento: ${formaPagamento}*\n*Forma de Envio: ${formaEnvio}*\n\n*⇩ Observações ⇩*\n\n*${observacoes}*`);

                      let link = document.querySelector('a');
                      link.setAttribute('target', '_blank');
              
                      link = document.getElementById("zap").href = 'https://wa.me/554188217121?text='+textSemEmail;

                    }else {
                      textComEmail = encodeURIComponent(`*⇩ Dados Pedido ⇩*\n\n*📌 Novo Pedido: ${ nomePedido }*\n*🏷️ Numero: ${numeroPedido}*\n*📜 Pedido: ${ valores }*\n\n*⇩ Dados cliente ⇩*\n\n*Nome e Sobrenome: ${ nomeSobrenome }*\n*Email: ${email}*\n\n*⇩ Dados Entraga ⇩*\n\n*Endereço: ${endereco}*\n*Forma de pagamento: ${formaPagamento}*\n*Forma de Envio: ${formaEnvio}*\n\n*⇩ Observações ⇩*\n\n*${observacoes}*`);

                      let link = document.querySelector('a');
                      link.setAttribute('target', '_blank');
              
                      link = document.getElementById("zap").href = 'https://wa.me/554188217121?text='+textComEmail;
                    }  
              
                  };
            }
        };
    
            };
    };

//Função para adicionar quantidade escondida
            
            //COCA 350ML
          
            function addQuantidadeCoca350() {
                let quantidadeCOCA350 = document.getElementById('quantidadeCoca350');
                let valorAtualCoca350 = parseInt(quantidadeCOCA350.textContent);
                let novoValor350 = valorAtualCoca350 + 1;
                quantidadeCOCA350.textContent = novoValor350;
              }
            
              function removeQuantidadeCoca350() {
                let quantidadeCOCA350 = document.getElementById('quantidadeCoca350');
                let valorAtualCoca350 = parseInt(quantidadeCOCA350.textContent);
                let novoValor350 = valorAtualCoca350 - 1;
                quantidadeCOCA350.textContent = novoValor350;
              }
            
              //COCA550ML
            
              function addQuantidadeCoca550() {
                let quantidadeCOCA550 = document.getElementById('quantidadeCoca550');
                let valorAtualCoca550 = parseInt(quantidadeCOCA550.textContent);
                let novoValorCoca550 = valorAtualCoca550 + 1;
                quantidadeCOCA550.textContent = novoValorCoca550;
              }
            
              function removeQuantidadeCoca550() {
                let quantidadeCOCA550 = document.getElementById('quantidadeCoca550');
                let valorAtualCoca550 = parseInt(quantidadeCOCA550.textContent);
                let novoValorCoca550 = valorAtualCoca550 - 1;
                quantidadeCOCA550.textContent = novoValorCoca550;
              }
            
              //COCA 2L
            
              function addQuantidadeCoca2L() {
                let quantidadeCOCA2L = document.getElementById('quantidadeCoca2L');
                let valorAtualCoca2L = parseInt(quantidadeCOCA2L.textContent);
                let novoValorCoca2L = valorAtualCoca2L + 1;
                quantidadeCOCA2L.textContent = novoValorCoca2L;
              }
            
              function removeQuantidadeCoca2L() {
                let quantidadeCOCA2L = document.getElementById('quantidadeCoca2L');
                let valorAtualCoca2L = parseInt(quantidadeCOCA2L.textContent);
                let novoValorCoca2L = valorAtualCoca2L - 1;
                quantidadeCOCA2L.textContent = novoValorCoca2L;
              }

              //X BACON

              function addQuantidadeXbacon() {
                let quantidadeXBACON = document.getElementById('quantidadeXbacon');
                let valorAtualXbacon = parseInt(quantidadeXBACON.textContent);
                let novoValorXbacon = valorAtualXbacon + 1;
                quantidadeXBACON.textContent = novoValorXbacon;
              }

              function removeQuantidadeXbacon() {
                let quantidadeXBACON = document.getElementById('quantidadeXbacon');
                let valorAtualXbacon = parseInt(quantidadeXBACON.textContent);
                let novoValorXbacon = valorAtualXbacon - 1;
                quantidadeXBACON.textContent = novoValorXbacon;
              }

              //X CALABRESA

              function addQuantidadeXcalabresa() {
                let quantidadeXCALABRESA = document.getElementById('quantidadeXcalabresa');
                let valorAtualXcalabresa = parseInt(quantidadeXCALABRESA.textContent);
                let novoValorXcalabresa = valorAtualXcalabresa + 1;
                quantidadeXCALABRESA.textContent = novoValorXcalabresa;
              }

              function removeQuantidadeXcalabresa() {
                let quantidadeXCALABRESA = document.getElementById('quantidadeXcalabresa');
                let valorAtualXcalabresa = parseInt(quantidadeXCALABRESA.textContent);
                let novoValorXcalabresa = valorAtualXcalabresa - 1;
                quantidadeXCALABRESA.textContent = novoValorXcalabresa;
              }