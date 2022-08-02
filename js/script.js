let entradaDoUsuario = document.getElementById('entradaDoUsuario'), mostrarResultadoParaUsuario = document.getElementById('mostrarResultado');

const objectGlobalAlfabetoBubble = {
    A:'🅐', B:'🅑', C:'🅒', D:'🅓', E:'🅔', F:'🅕', G:'🅖', H:'🅗', I:'🅘', J:'🅙', K:'🅚', L:'🅛', M:'🅜',
    N:'🅝', O:'🅞', P:'🅟', Q:'🅠', R:'🅡', S:'🅢', T:'🅣', U:'🅤', V:'🅥', W:'🅦', X:'🅧', Y:'🅨', Z:'🅩',
    1:'➊',2:'➋',3:'➌',4:'➍',5:'➎',6:'➏',7:'➐',8:'➑',9:'➒',0:'⓿',' ':' ',nada:'',
    verificarEntradaDoUsuarioConverterParaBubble: function (alfa){
        if (this[alfa] == undefined) 
            return this.nada;
        return this[alfa];
    }
}


function mostrarAlfabetoBubble(){
    let concatenarResultadoFinal = '';

    for (const entradaDoUsuarioListada of entradaDoUsuario.value) {
        concatenarResultadoFinal += objectGlobalAlfabetoBubble.verificarEntradaDoUsuarioConverterParaBubble(entradaDoUsuarioListada.toUpperCase());
    }

    verificarCaracteresNaEntradaDoUsuario();
    mostrarResultadoParaUsuario.children[0].innerHTML = concatenarResultadoFinal;
}

function verificarCaracteresNaEntradaDoUsuario(){
    let copiarTextoParaUsuario = document.getElementsByClassName('copy')[0];

    if (entradaDoUsuario.value == ''){
        copiarTextoParaUsuario.style.display = 'none';
        mostrarResultadoParaUsuario.style.display = 'none';
    }else{
        copiarTextoParaUsuario.style.display = 'block';
        mostrarResultadoParaUsuario.style.display = 'block';
    }
}

function copiarTextoBubble(){
    let clipbordDiv = document.getElementsByClassName('clipbord')[0] , opacityLesser = 1;

    if(clipbordDiv.style.display == 'none'){
        clipbordDiv.style.display = 'block';
        clipbordDiv.style.opacity = '1';

        let time = setInterval( () => {
            opacityLesser -= 0.1;
            clipbordDiv.style.opacity = opacityLesser;
            if(opacityLesser < 0){
                clearInterval(time);
                clipbordDiv.style.display = 'none';
            }
        }, 200);
    }

    navigator.clipboard.writeText(mostrarResultadoParaUsuario.children[0].innerText);
}


function cleanTextArea(){
    entradaDoUsuario.value = '';
    mostrarResultadoParaUsuario.children[0].innerText = '';
}