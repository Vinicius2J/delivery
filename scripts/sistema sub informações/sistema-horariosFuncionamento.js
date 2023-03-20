//Horario de funcionamento

let botaoHorario = document.getElementById('subInfoHorarios');

botaoHorario.addEventListener("click", horariosFuncionamento);

//Esta função executa uma simples troca de telas para o usuario poder ver como e funciona o horario de funcionamento

function horariosFuncionamento() {
    var paginaHorarios = document.getElementById('horarios-de-funcionamento').style.display = 'flex';

    paginaInicial = document.getElementById('pagina').style.display = 'none';

    footer = document.querySelector('footer').style.display= 'none';

    let botaoVoltarHorarios = document.getElementById('voltar');

    botaoVoltarHorarios.addEventListener("click", () => {
        var paginaHorarios = document.getElementById('horarios-de-funcionamento').style.display = 'none';

        paginaInicial = document.getElementById('pagina').style.display = 'flex';
        paginaInicial = document.getElementById('pagina').style.flexDirection = 'column';

        footer = document.querySelector('footer').style.display= 'flex';
    })
}