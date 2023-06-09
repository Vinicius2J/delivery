//sistema cabaçario fixo

var minhaDiv = document.getElementById('botoes-cima');
var alturaMinhaDiv = minhaDiv.offsetHeight * 15;
window.addEventListener('scroll', function() {
  if (window.pageYOffset >= alturaMinhaDiv) {
    minhaDiv.classList.add('minha-div-fixa');
  } else {
    minhaDiv.classList.remove('minha-div-fixa');
  }
});

//sistema de scroll suave

const menu = document.querySelectorAll('.menu a[href^="#"]')

menu.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
});//forEach verifica se cada item desta lista foi clicado 



//Esta função faz a referencia entre o Href(#) e item e pegar o offsetTop(Onde e o topo da sessão)
function scrollToIdOnClick(event) {
  event.preventDefault();//tirar o comportamento padrao de algum evento
  const section = getScrollTopByHref(event.target);//event.targe verifica qual botao foi clicado  
  scrollToPosition(section);
};

//Esta função e para lidar com o click, no momneto que voce clicka o codigo previne o padrao
function getScrollTopByHref(ellement) {
  const id = ellement.getAttribute('href'); //puxa o atibuto(ID)
  return document.querySelector(id).offsetTop; //pega o topo da sua sessão
};

//fazer o scroll ficar suave
function scrollToPosition(section) {
  smoothScrollTo(0, section)
};


//Scroll suave para outros navegadores

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};