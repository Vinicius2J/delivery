// Tempo de inatividade em milissegundos
const inatividadeTempo = 10 * 30 * 1000 // 10 minutos em milissegundos


let ultimoTempoAtivo = Date.now();

//Função para verificar o tempo de inatividade e exibir para o usuario que ele ficou inativo

function verificarInatividade() {
    const tempoAtual = Date.now();

    if(tempoAtual - ultimoTempoAtivo > inatividadeTempo) {
        let paginaInatividade = document.getElementById('inatividade');
        paginaInatividade.style.display = 'flex';
    };
};

document.addEventListener('mousemove', () => {
    ultimoTempoAtivo = Date.now();
});

// Inicia o temporizador para verificar a inatividade
setInterval(verificarInatividade, 1000);