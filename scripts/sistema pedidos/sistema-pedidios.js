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
    document.getElementById('semItens').style.display = 'none';
  } else {
    carrinho.itens.push({ nome, preco, quantidade: 1, complemento });
  }
  carrinho.precoTotal += preco;
  renderizarCarrinho();
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

// função para poder tirar a mensagem de sem itens

function tirarErroCarrinho() {
  document.getElementById('semItens').style.display = 'none';
}

// função para limpar o carrinho
function limparCarrinho() {
  carrinho.itens = [];
  carrinho.precoTotal = 0;

  document.getElementById('semItens').style.display = 'flex';

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

   //DOG-SIMPLES

   let quantidadeDogSimples = document.getElementById('quantidadeDogSimples');
   let valorAtualDogSimples = parseInt(quantidadeDogSimples.textContent);
   let novoValorDogSimples = valorAtualDogSimples = 0;
   quantidadeDogSimples.textContent = novoValorDogSimples;

   //DOG-DUPLO

   let quantidadeDogDuplo = document.getElementById('quantidadeDogDuplo');
   let valorAtualDogDuplo = parseInt(quantidadeDogDuplo.textContent);
   let novoValorDogDuplo = valorAtualDogDuplo = 0;
   quantidadeDogDuplo.textContent = novoValorDogDuplo;

   //DOG-BACON

   let quantidadeDogBacon = document.getElementById('quantidadeDogBacon');
   let valorAtualDogBacon = parseInt(quantidadeDogBacon.textContent);
   let novoValorDogBacon = valorAtualDogBacon = 0;
   quantidadeDogBacon.textContent = novoValorDogBacon;

   //DOG-CALABRESA

   let quantidadeDogCalabresa = document.getElementById('quantidadeDogCalabresa');
   let valorAtualDogCalabresa = parseInt(quantidadeDogCalabresa.textContent);
   let novoValorDogCalabresa = valorAtualDogCalabresa = 0;
   quantidadeDogCalabresa.textContent = novoValorDogCalabresa;

   //DOG-FRANGO

   let quantidadeDogFrango = document.getElementById('quantidadeDogFrango');
   let valorAtualDogFrango = parseInt(quantidadeDogFrango.textContent);
   let novoValorDogFrango = valorAtualDogFrango = 0;
   quantidadeDogFrango.textContent = novoValorDogFrango;

   //DOG-HERMOM

   let quantidadeDogHermom = document.getElementById('quantidadeDogHermom');
   let valorAtualDogHermom = parseInt(quantidadeDogHermom.textContent);
   let novoValorDogHermom = valorAtualDogHermom = 0;
   quantidadeDogHermom.textContent = novoValorDogHermom;

   //coca 200ml

   let quantidadeCoca200ML = document.getElementById('quantidadeRefriCoca200ml');
   let valorAtualRefriCoca200ML = parseInt(quantidadeCoca200ML.textContent);
   let novoValorRefriCoca200ML = valorAtualRefriCoca200ML = 0;
  quantidadeCoca200ML.textContent = novoValorRefriCoca200ML;

  //coca lata

  let quantidadeRefriLata = document.getElementById('quantidadeRefriLata');
  let valorAtualRefriLata = parseInt(quantidadeRefriLata.textContent);
  let novoValorRefriLata = valorAtualRefriLata = 0;
  quantidadeRefriLata.textContent = novoValorRefriLata;

  //del vale lata

  let quantidadeRefriDelVale = document.getElementById('quantidadeRefriDelVale');
  let valorAtualRefriDelVale = parseInt(quantidadeRefriDelVale.textContent);
  let novoValorRefriDelVale = valorAtualRefriDelVale = 0;
  quantidadeRefriDelVale.textContent = novoValorRefriDelVale; 


  //coca 600ML

  let quantidadeRefri600 = document.getElementById('quantidadeRefri600');
  let valorAtualRefri600 = parseInt(quantidadeRefri600.textContent);
  let novoValorRefri600 = valorAtualRefri600 = 0;
  quantidadeRefri600.textContent = novoValorRefri600;

  //coca 2L

  let quantidadeRefri2l = document.getElementById('quantidadeRefri2L');
  let valorAtualRefri2l = parseInt(quantidadeRefri2l.textContent);
  let novoValorRefri2l = valorAtualRefri2l = 0;
  quantidadeRefri2l.textContent = novoValorRefri2l;

  //kuat 2l

  let quantidadeKuat2l = document.getElementById('quantidadeKuat2L');
  let valorAtualKuat2l = parseInt(quantidadeKuat2l.textContent);
  let novoValorKuat2l = valorAtualKuat2l = 0;
  quantidadeKuat2l.textContent = novoValorKuat2l; 


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

function exibirCampoTroco() {
  var formaPagamento = document.getElementById("forma-pagamento").value;
  var campoTroco = document.getElementById("campo-troco");

  if (formaPagamento === "dinheiro") {
    campoTroco.style.display = "block";
  } else {
    campoTroco.style.display = "none";
  }
}


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

      if (horaFechar >= 20 || horaFechar < 2){
        //ir para a tela de finalizar produto
      const btnVolvarCarrinho = document.getElementById('voltaCarrinho');
      document.getElementById('formFinal').style.display = 'flex';
      document.getElementById('fazer-pedidos').style.display = 'none';
      //voltar para tela do carrnho caso aperte no botal voltar
      btnVolvarCarrinho.addEventListener('click', () => {
      document.getElementById('formFinal').style.display = 'none';
      document.getElementById('fazer-pedidos').style.display = 'flex';
      document.getElementById('mudarCarrinho').style.display = 'flex';
      });

      //remover fotos
      document.getElementById('mudarCarrinho').style.display = 'none';

      let btnVerificarDados = document.getElementById('finalizar_pedido');
      btnVerificarDados.addEventListener('click', verificarDados);
      function verificarDados(event) {
          event.preventDefault();
          var nomeSobrenome = document.getElementById('nome').value;
          var email = document.getElementById('email').value;
          var formaEnvio = document.getElementById('forma-envio').value;
          var formaPagamento = document.getElementById('forma-pagamento').value;

          //verificar se o troco esta preenchido
          var troco = document.getElementById("troco").value;
          if (formaPagamento == "dinheiro" && troco == "") {
            document.getElementById('forma-pagamento').style.border = '1px solid red';
            document.getElementById('troco').style.border = '1px solid red';
            return
          }else {
            document.getElementById('forma-pagamento').style.border = '2px solid black';
            document.getElementById('troco').style.border = '2px solid black';
          }

          //verificar se o enderço esta preenchido
          var endereco = document.getElementById('endereco').value;
          if (formaEnvio == "entrega" && endereco == "") {
            document.getElementById('endereco').style.border = '1px solid red';
            document.getElementById('forma-envio').style.border = '1px solid red';
            return;
          }else {
            document.getElementById('endereco').style.border = '2px solid black';
            document.getElementById('forma-envio').style.border = '2px solid black';
          }
         
          if (nomeSobrenome == "") {
            document.getElementById('nome').style.border = '2px solid red';
          }else {
            document.getElementById('nome').style.border = '2px solid black';
          }

          if (formaEnvio == "") {
            document.getElementById('forma-envio').style.border = '2px solid red';
          }else {
            document.getElementById('forma-envio').style.border = '2px solid black';
          }

          if (formaPagamento == "") {
            document.getElementById('forma-pagamento').style.border = '2px solid red';
          }else {
            document.getElementById('forma-pagamento').style.border = '2px solid black';
          }

          //Parte com Email
          if (nomeSobrenome == "" || formaEnvio == "" || formaPagamento == "") {
            
          }else {
            const divItens = document.getElementById('itensParaVer');
              divItens.innerHTML = '';

              carrinho.itens.forEach(item => {
                  const p = document.createElement('p');
                  p.textContent = `${item.quantidade}/9 : ${item.nome}`;
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
            
              if (troco == "") {
                document.getElementById('trocoPara').style.display = 'none';
              }else {
                document.getElementById('trocoPara').innerHTML = `Troco para: ${troco}`;
              }
              
              document.getElementById('precoTotalInfo').innerHTML = `Preço Total: R$ ${carrinho.precoTotal.toFixed(2).replace('.',(','))}`;

              //Função comprar

              let botaoComprar = document.getElementById('comprar');
              botaoComprar.addEventListener('click', comprar);

              function comprar() {

                console.log(troco)

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

                    
                    textSemEmail = encodeURIComponent(`*⇩ Dados Pedido ⇩*\n\n*📌 Novo Pedido: ${ nomePedido }*\n*🏷️ Numero: ${numeroPedido}*\n*📜 Pedido: ${ valores }*\n\n*⇩ Dados cliente ⇩*\n\n*Nome e Sobrenome: ${ nomeSobrenome }*\n\n*⇩ Dados Entraga ⇩*\n*Forma de Envio: ${formaEnvio}*\n*Local de retirada: R. Des. Ernâni Almeida de Abreu, 1111*\n\n*⇩ Forma de Pagamento ⇩*\n\n*Forma de pagamento: ${formaPagamento}*\n*Preço Total: ${carrinho.precoTotal.toFixed(2).replace('.',',')}*\n*Troco para:* *${troco}*\n\n*⇩ Observações ⇩*\n\n*${observacoes}*`);

                    let link = document.querySelector('a');
                    link.setAttribute('target', '_blank');
            
                    link = document.getElementById("zap").href = 'https://wa.me/554188217121?text='+textSemEmail;

                  }else {
                    textComEmail = encodeURIComponent(`*⇩ Dados Pedido ⇩*\n\n*📌 Novo Pedido: ${ nomePedido }*\n*🏷️ Numero: ${numeroPedido}*\n*📜 Pedido: ${ valores }*\n\n*⇩ Dados cliente ⇩*\n\n*Nome e Sobrenome: ${ nomeSobrenome }*\n*Email: ${email}*\n\n*⇩ Dados Entraga ⇩*\n\n*Forma de Envio: ${formaEnvio}*\n*Endereço: ${endereco}*\n\n*⇩ Forma de Pagamento ⇩*\n\n*Forma de pagamento: ${formaPagamento}*\n\n*Preço Total: ${carrinho.precoTotal.toFixed(2).replace('.',',')}*\n*Troco para:* *${troco}* \n\n*⇩ Observações ⇩*\n\n*${observacoes}*`);

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

  //HOT-DOGS

    //dog simples

  let quantidadeDogSimplesTs = 0;
          
  function addQuantidadeDogSimples() {
    quantidadeDogSimplesTs++;
    if (quantidadeDogSimplesTs >= 0) {
            
      let quantidadeDogSimples = document.getElementById('quantidadeDogSimples');
      let valorAtualDogSimples = parseInt(quantidadeDogSimples.textContent);
      let novoValorDogSimples = valorAtualDogSimples + 1;
      quantidadeDogSimples.textContent = novoValorDogSimples;
  }
  }
   //dog duplo

   let quantidadeDogDuploTs = 0;
          
  function addQuantidadeDogDuplo() {
    quantidadeDogDuploTs++;
    if (quantidadeDogDuploTs >= 0) {
            
      let quantidadeDogDuplo = document.getElementById('quantidadeDogDuplo');
      let valorAtualDogDuplo = parseInt(quantidadeDogDuplo.textContent);
      let novoValorDogDuplo = valorAtualDogDuplo + 1;
      quantidadeDogDuplo.textContent = novoValorDogDuplo;
  }
  }

    //dog bacon

    let quantidadeDogBaconTs = 0;
          
  function addQuantidadeDogBacon() {
    quantidadeDogBaconTs++;
    if (quantidadeDogBaconTs >= 0) {
            
      let quantidadeDogBacon = document.getElementById('quantidadeDogBacon');
      let valorAtualDogBacon = parseInt(quantidadeDogBacon.textContent);
      let novoValorDogBacon = valorAtualDogBacon + 1;
      quantidadeDogBacon.textContent = novoValorDogBacon;
  }
  }
    //dog calabresa

    let quantidadeDogCalabresaTs = 0;
          
    function addQuantidadeDogCalabresa() {
      quantidadeDogCalabresaTs++;
      if (quantidadeDogCalabresaTs >= 0) {
              
        let quantidadeDogCalabresa = document.getElementById('quantidadeDogCalabresa');
        let valorAtualDogCalabresa = parseInt(quantidadeDogCalabresa.textContent);
        let novoValorDogCalabresa = valorAtualDogCalabresa + 1;
        quantidadeDogCalabresa.textContent = novoValorDogCalabresa;
    }
    }

      //dog frango

    let quantidadeDogFrangoTs = 0;
          
    function addQuantidadeDogFrango() {
      quantidadeDogFrangoTs++;
      if (quantidadeDogFrangoTs >= 0) {
              
      let quantidadeDogFrango = document.getElementById('quantidadeDogFrango');
      let valorAtualDogFrango = parseInt(quantidadeDogFrango.textContent);
      let novoValorDogFrango = valorAtualDogFrango + 1;
      quantidadeDogFrango.textContent = novoValorDogFrango;
    }
    }

      //dog hermom

   let quantidadeDogHermomTs = 0;
          
    function addQuantidadeDogHermom() {
      quantidadeDogHermomTs++;
      if (quantidadeDogHermomTs >= 0) {
              
      let quantidadeDogHermom = document.getElementById('quantidadeDogHermom');
      let valorAtualDogHermom = parseInt(quantidadeDogHermom.textContent);
      let novoValorDogHermom = valorAtualDogHermom + 1;
      quantidadeDogHermom.textContent = novoValorDogHermom;
    }
    }

  //BEBIDA REFRI-LATA

    //coca 200ML

    var quantidadeRefriCoca200mlTs = 0;

    function addQuantidadeRefriCoca200Ml() {
  
      quantidadeRefriCoca200mlTs++;
    if (quantidadeRefriCoca200mlTs >= 0) {
              
      let quantidadeCoca200ML = document.getElementById('quantidadeRefriCoca200ml');
      let valorAtualRefriCoca200ML = parseInt(quantidadeCoca200ML.textContent);
      let novoValorRefriCoca200ML = valorAtualRefriCoca200ML + 1;
      quantidadeCoca200ML.textContent = novoValorRefriCoca200ML; 
    }
    }

  //coca lata
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

  //Del Vale Lata

  var quantidadeRefriDelValeLataTs = 0;

  function addQuantidadeDelValeLata() {

  quantidadeRefriDelValeLataTs++;
  if (quantidadeRefriDelValeLataTs >= 0) {
            
    let quantidadeRefriDelVale = document.getElementById('quantidadeRefriDelVale');
    let valorAtualRefriDelVale = parseInt(quantidadeRefriDelVale.textContent);
    let novoValorRefriDelVale = valorAtualRefriDelVale + 1;
    quantidadeRefriDelVale.textContent = novoValorRefriDelVale; 
  }
  }

    //BEBIDA REFRI-600
    var quantidadeRefri600Ts = 0;

    function addQuantidadeRefri600() {
  
      quantidadeRefri600Ts++;
    if (quantidadeRefri600Ts >= 0) {
              
      let quantidadeRefri600 = document.getElementById('quantidadeRefri600');
      let valorAtualRefri600 = parseInt(quantidadeRefri600.textContent);
      let novoValorRefri600 = valorAtualRefri600 + 1;
      quantidadeRefri600.textContent = novoValorRefri600; 
    }
            
    }

    //Coca 2L
    var quantidadeRefri2lTs = 0;

    function addQuantidadeRefri2l() {
      
      quantidadeRefri2lTs++;
    if (quantidadeRefri2lTs >= 0) {
                  
      let quantidadeRefri2l = document.getElementById('quantidadeRefri2L');
      let valorAtualRefri2l = parseInt(quantidadeRefri2l.textContent);
      let novoValorRefri2l = valorAtualRefri2l + 1;
      quantidadeRefri2l.textContent = novoValorRefri2l; 
    }
  }      
  
  //Kuat 2l

  var quantidadeKuat2lTs = 0;

    function addQuantidadeKuat2l() {
      
      quantidadeKuat2lTs++;
    if (quantidadeKuat2lTs >= 0) {
                  
      let quantidadeKuat2l = document.getElementById('quantidadeKuat2L');
      let valorAtualKuat2l = parseInt(quantidadeKuat2l.textContent);
      let novoValorKuat2l = valorAtualKuat2l + 1;
      quantidadeKuat2l.textContent = novoValorKuat2l; 
    }
  }   
      