let hora = new Date()
let horaFechar = hora.getHours();

let placaAbertoFechado = document.getElementById('aberto-fechado');

if (horaFechar > 18 || horaFechar < 00) {
    placaAbertoFechado.style.color = 'rgb(81, 255, 0)';
    placaAbertoFechado.innerText = 'ABERTO';
}else {
    placaAbertoFechado.style.color = 'red';
    placaAbertoFechado.innerText = 'FECHADO';
}

if (horaFechar == 18 && horaFechar == 00) {
    let paginaInatividade = document.getElementById('inatividade');
    paginaInatividade.style.display = 'flex';
}