//X-EGG
let botaoComplementoXEGG = document.getElementById('removXEGG');

//X-BURGUER
let botaoComplementoXBURGEUR = document.getElementById('removeXBURGUER');

//X-SALADA
let botaoComplementoXSALADA = document.getElementById('removeXSALADA');

//X-BACON
let botaoComplementoXBACON = document.getElementById('removeXBACON');

//X-CALABRESA
let botaoComplementoXCALABRESA = document.getElementById('removeXCALABRESA');

//X-FRANGO
let botaoComplementoXFRANGO = document.getElementById('removeXFRANGO');

//X-TUDO
let botaoComplementoXTUDO = document.getElementById('removeXTUDO');
	
//X-MONTE-HERMOM
let botaoComplementoXMONTHERMON = document.getElementById('removeXMONTE');

//configuração global

let btnVoltar = document.getElementById('removaComplementoXEGG');

//tela X-EGG

botaoComplementoXEGG.addEventListener('click', () => {
    document.getElementById('removaComplementoXEGG').style.display = 'flex';
    btnVoltar.addEventListener('click', () => {
        document.getElementById('removaComplementoXEGG').style.display = 'none';
    });
});