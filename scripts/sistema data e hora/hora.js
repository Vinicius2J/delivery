let hora = new Date()
let horaFechar = hora.getHours();

let placaAbertoFechado = document.getElementById('aberto-fechado');

if (horaFechar > 20 || horaFechar < 02) {
    placaAbertoFechado.style.color = 'rgb(81, 255, 0)';
    placaAbertoFechado.innerText = 'ABERTO';
}else {
    placaAbertoFechado.style.color = 'red';
    placaAbertoFechado.innerText = 'FECHADO';
}