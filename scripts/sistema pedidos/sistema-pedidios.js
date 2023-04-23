// objeto carrinho
let carrinho = {
  itens: [],
  precoTotal: 0
};

// objeto preço Complementos
const complementoPreco = {
 "COM FRANGO": 3.00,
 "COM BACON": 3.00,
 "COM CALABRESA": 3.00,
 "COM OVO": 1.50,
 "Sem Complemento": 0.00
};


// função para adicionar item ao carrinho

function addItem(nome, preco, complemento) {
  complemento = ""

  const itemIndex = carrinho.itens.findIndex(item => item.nome === nome && item.complemento === complemento);
  if (itemIndex !== -1) {
    carrinho.itens[itemIndex].quantidade += 1;
  } else {
    carrinho.itens.push({ nome, preco, quantidade: 1, complemento });
  }
  carrinho.precoTotal += preco;
  renderizarCarrinho();
}

// função para remover item do carrinho
function removeItem(nome, preco, complemento) {
  complemento = ""

  const itemIndex = carrinho.itens.findIndex(item => item.nome === nome && item.complemento === complemento);
  if (itemIndex !== -1) {
    const item = carrinho.itens[itemIndex];
    if (item.quantidade > 1) {
      item.quantidade -= 1;
    } else {
      carrinho.itens.splice(itemIndex, 1);
    }
    carrinho.precoTotal -= preco;
    renderizarCarrinho();
  }
}

//esta função adiciona o complemento ao seu carrinho
function adicionarComplemento() {
  const complementosSelecionados = document.querySelectorAll('input[name="complemento[]"]:checked');
  
  if (complementosSelecionados.length > 0) {
    const complementos = [];
    complementosSelecionados.forEach(complemento => {
      complementos.push(complemento.value);
    });
    
    const complementosString = complementos.join(' - ');
    
    const itemIndex = carrinho.itens.length - 1;
    carrinho.itens[itemIndex].nome += " - " + complementosString;
    
    complementosSelecionados.forEach(complementoSelecionado => {
      carrinho.itens[itemIndex].preco += parseFloat(complementoPreco[complementoSelecionado.value]);
      carrinho.precoTotal += parseFloat(complementoPreco[complementoSelecionado.value]);
    });
    
    renderizarCarrinho();
  };
};

function renderizarCarrinho() {
  const itensCarrinho = document.querySelector('#itens-carrinho');
  const precoTotal = document.querySelector('#preco-total');
  const produtos = document.querySelector('#produtos');

  itensCarrinho.innerHTML = '';

  // verifica se tem algum complemento selecionado
  const temComplemento = carrinho.itens.some(item => item.complemento !== "");

  // renderiza os itens do carrinho
  carrinho.itens.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ` ${item.quantidade+'°'} - 🛒 ${item.nome} ${item.complemento}`;
    itensCarrinho.appendChild(li);
    const br = document.createElement('br');
    itensCarrinho.appendChild(br);
  });

  precoTotal.textContent = `Preço total: R$ ${carrinho.precoTotal.toFixed(2).replace('.',(','))}`;
}



// função para limpar o carrinho
function limparCarrinho() {
  carrinho.itens = [];
  carrinho.precoTotal = 0;

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

   //XCALAB RESA

   let quantidadeXCALABRESA = document.getElementById('quantidadeXcalabresa');
   let valorAtualXcalabresa = parseInt(quantidadeXCALABRESA.textContent);
   let novoValorXcalabresa = valorAtualXcalabresa = 0;
   quantidadeXCALABRESA.textContent = novoValorXcalabresa;

   //XFRANGO

   let quantidadeXFRANGO = document.getElementById('quantidadeXfrango');
   let valorAtualXfrango = parseInt(quantidadeXFRANGO.textContent);
   let novoValorXfrango = valorAtualXfrango = 0;
   quantidadeXFRANGO.textContent = novoValorXfrango;

   //XTUDO

   let quantidadeXtudo = document.getElementById('quantidadeXtudo');
   let valorAtualXtudo = parseInt(quantidadeXtudo.textContent);
   let novoValorXtudo = valorAtualXtudo = 0;
   quantidadeXtudo.textContent = novoValorXtudo;

   //XMONTEHERMOM

   let quantidadeXmonthermom = document.getElementById('quantidadeXmontehermom');
   let valorAtualXmontehermom = parseInt(quantidadeXmonthermom.textContent);
   let novoValorXmontehermom = valorAtualXmontehermom = 0;
   quantidadeXmonthermom.textContent = novoValorXmontehermom;

   //bebidas

   let quantidadeRefriLata = document.getElementById('quantidadeRefriLata');
   let valorAtualRefriLata = parseInt(quantidadeRefriLata.textContent);
   let novoValorRefriLata = valorAtualRefriLata = 0;
   quantidadeRefriLata.textContent = novoValorRefriLata;


  renderizarCarrinho();
};

//mostra a pagina de complementos

function monstrarComplementos() {
  document.getElementById('descricao').style.display = 'flex';
  document.getElementById('fazer-pedidos').style.overflow = 'hidden';
};

//sair da pagina de complementos

function sairComplemento() {
  document.getElementById('descricao').style.display = 'none';
  document.getElementById('fazer-pedidos').style.overflow = 'visible';
};

//sair da tela do erro ao aperta no botao
function sairErro() {
  document.getElementById('erroCarrinho').style.display = 'none';
  document.getElementById('fazer-pedidos').style.overflow = 'visible';
}

//sair do erro do form

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

//pegar a variavel do botao e cria o evento de click
let btnVerificarCarrinho = document.getElementById('btnProximoPagamento');
btnVerificarCarrinho.addEventListener('click', verificarCarrinho);

//Verificar se tem item no carrinho
function verificarCarrinho() {
  if (carrinho.itens.length === 0) {
      document.getElementById('erroCarrinho').style.display = 'flex';
      document.getElementById('erroCarrinho').style.zIndex = '99999';
      document.getElementById('fazer-pedidos').style.overflow = 'hidden';
  }else {

      let hora = new Date()
      let horaFechar = hora.getHours();

      if (horaFechar > 20 || horaFechar < 02){
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
                  
              };  
            };
          }
        };
      }else {
        document.getElementById('erroCarrinho').style.display = 'flex';
        document.getElementById('erroCarrinho').style.zIndex = '99999';
        document.getElementById('fazer-pedidos').style.overflow = 'hidden';
      };
    };
  };

//Função para adicionar quantidade escondida
          
  //X-EGG
  let quantidadeXeggTs = 0;
        
  function addQuantidadeCoca350() {
      quantidadeXeggTs++;
      if (quantidadeXeggTs >= 0) {
        let quantidadeCOCA350 = document.getElementById('quantidadeCoca350');
        let valorAtualCoca350 = parseInt(quantidadeCOCA350.textContent);
        let novoValor350 = valorAtualCoca350 + 1;
        quantidadeCOCA350.textContent = novoValor350;
      }
  }
          
  function removeQuantidadeCoca350() {

    if (quantidadeXeggTs == 0) {
    }else {
      quantidadeXeggTs--
      let quantidadeCOCA350 = document.getElementById('quantidadeCoca350');
      let valorAtualCoca350 = parseInt(quantidadeCOCA350.textContent);
      let novoValor350 = valorAtualCoca350 - 1;
      quantidadeCOCA350.textContent = novoValor350;
    }
  }
          
  //X-BURGUER
  let quantidadeXburguerTs = 0;
          
  function addQuantidadeCoca550() {
    quantidadeXburguerTs++;
    if (quantidadeXburguerTs >= 0) {
      let quantidadeCOCA550 = document.getElementById('quantidadeCoca550');
      let valorAtualCoca550 = parseInt(quantidadeCOCA550.textContent);
      let novoValorCoca550 = valorAtualCoca550 + 1;
                quantidadeCOCA550.textContent = novoValorCoca550;
    }
  }
          
  function removeQuantidadeCoca550() {
    if (quantidadeXburguerTs == 0) {
    }else {
      quantidadeXburguerTs--
      let quantidadeCOCA550 = document.getElementById('quantidadeCoca550');
      let valorAtualCoca550 = parseInt(quantidadeCOCA550.textContent);
      let novoValorCoca550 = valorAtualCoca550 - 1;
      quantidadeCOCA550.textContent = novoValorCoca550;
    }
  }
          
  //x-SALADA
  let quantidadeXsaladaTs = 0;
          
  function addQuantidadeCoca2L() {
    quantidadeXsaladaTs++;
    if (quantidadeXsaladaTs >= 0) {
      let quantidadeCOCA2L = document.getElementById('quantidadeCoca2L');
      let valorAtualCoca2L = parseInt(quantidadeCOCA2L.textContent);
      let novoValorCoca2L = valorAtualCoca2L + 1;
      quantidadeCOCA2L.textContent = novoValorCoca2L;
    }
  }
          
  function removeQuantidadeCoca2L() {
    if (quantidadeXsaladaTs == 0) {
    }else {
      quantidadeXsaladaTs--
      let quantidadeCOCA2L = document.getElementById('quantidadeCoca2L');
      let valorAtualCoca2L = parseInt(quantidadeCOCA2L.textContent);
      let novoValorCoca2L = valorAtualCoca2L - 1;
      quantidadeCOCA2L.textContent = novoValorCoca2L;
    }
  }

  //X-BACON
  let quantidadeXbaconTs = 0;

  function addQuantidadeXbacon() {
    quantidadeXbaconTs++;
    if (quantidadeXbaconTs >= 0) {
      let quantidadeXBACON = document.getElementById('quantidadeXbacon');
      let valorAtualXbacon = parseInt(quantidadeXBACON.textContent);
      let novoValorXbacon = valorAtualXbacon + 1;
      quantidadeXBACON.textContent = novoValorXbacon;
    }
  }

  function removeQuantidadeXbacon() {
    if (quantidadeXbaconTs == 0) {
    }else {
      quantidadeXbaconTs--
      let quantidadeXCALABRESA = document.getElementById('quantidadeXcalabresa');
      let valorAtualXcalabresa = parseInt(quantidadeXCALABRESA.textContent);
      let novoValorXcalabresa = valorAtualXcalabresa - 1;
      quantidadeXCALABRESA.textContent = novoValorXcalabresa;
    }
  }

  //X CALABRESA
  let quantidadeXcalabresaTs = 0;

  function addQuantidadeXcalabresa() {
    quantidadeXcalabresaTs++;
    if (quantidadeXcalabresaTs >= 0) {
      let quantidadeXCALABRESA = document.getElementById('quantidadeXcalabresa');
      let valorAtualXcalabresa = parseInt(quantidadeXCALABRESA.textContent);
      let novoValorXcalabresa = valorAtualXcalabresa + 1;
      quantidadeXCALABRESA.textContent = novoValorXcalabresa;
    }

  }

  //X-FRANGO
  let quantidadeXfrangoTs = 0;

  function addQuantidadeXfrango() {
    quantidadeXfrangoTs++;
    if (quantidadeXfrangoTs >= 0) {
      let quantidadeXFRANGO = document.getElementById('quantidadeXfrango');
      let valorAtualXfrango = parseInt(quantidadeXFRANGO.textContent);
      let novoValorXfrango = valorAtualXfrango + 1;
      quantidadeXFRANGO.textContent = novoValorXfrango;
    }
  }


    //X-TUDO
    let quantidadeXtudoTs = 0;

    function addQuantidadeXtudo() {
    quantidadeXtudoTs++;
    if (quantidadeXtudoTs >= 0) {
            
    let quantidadeXtudo = document.getElementById('quantidadeXtudo');
    let valorAtualXtudo = parseInt(quantidadeXtudo.textContent);
    let novoValorXtudo = valorAtualXtudo + 1;
    quantidadeXtudo.textContent = novoValorXtudo;
  }
  }
  //X-MONTE-HERMOM

  let quantidadeXmonthermomTs = 0;
          
  function addQuantidadeXmontehermom() {
     quantidadeXmonthermomTs++;
    if (quantidadeXmonthermomTs >= 0) {
            
      let quantidadeXmonthermom = document.getElementById('quantidadeXmontehermom');
      let valorAtualXmontehermom = parseInt(quantidadeXmonthermom.textContent);
      let novoValorXmontehermom = valorAtualXmontehermom + 1;
      quantidadeXmonthermom.textContent = novoValorXmontehermom;
  }
  }

  //BEBIDA REFRI-LATA
  var quantidadeRefriLataTs = 0;

  function addQuantidadeRefriLata() {

  quantidadeRefriLataTs++;
  if (quantidadeRefriLataTs >= 0) {
            
    let quantidadeRefriLata = document.getElementById('quantidadeRefriLata');
    let valorAtualRefriLata = parseInt(quantidadeRefriLata.textContent);
    let novoValorRefriLata = valorAtualRefriLata + 1;
    quantidadeRefriLata.textContent = novoValorRefriLata; 
  }
          
  }