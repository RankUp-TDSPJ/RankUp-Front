// abre e fecha o menu hamburguer no mobile
var btnMenu = document.getElementById('btnMenu');
var menu = document.getElementById('menu');

if (btnMenu) {
    btnMenu.addEventListener('click', function() {
        menu.classList.toggle('aberto');
    });
}


// FAQ - clica na pergunta pra mostrar/esconder a resposta
var perguntas = document.querySelectorAll('.pergunta');

for (var i = 0; i < perguntas.length; i++) {
    perguntas[i].addEventListener('click', function() {
        this.parentElement.classList.toggle('aberto');
    });
}


// valida o formulario de contato antes de enviar
var form = document.getElementById('formContato');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var mensagem = document.getElementById('mensagem').value;

        var erroNome = document.getElementById('erroNome');
        var erroEmail = document.getElementById('erroEmail');
        var erroMensagem = document.getElementById('erroMensagem');

        // limpa os erros antigos antes de validar de novo
        erroNome.style.display = 'none';
        erroEmail.style.display = 'none';
        erroMensagem.style.display = 'none';

        var temErro = false;

        // nome precisa ter pelo menos 3 letras
        if (nome.length < 3) {
            erroNome.style.display = 'block';
            temErro = true;
        }

        // email precisa ter @ e .
        if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            erroEmail.style.display = 'block';
            temErro = true;
        }

        // mensagem precisa ter pelo menos 10 letras
        if (mensagem.length < 10) {
            erroMensagem.style.display = 'block';
            temErro = true;
        }

        // se passou em todas as validacoes, mostra mensagem de sucesso
        if (temErro == false) {
            console.log('Mensagem enviada:', { nome: nome, email: email, mensagem: mensagem });
            document.getElementById('sucesso').style.display = 'block';
            form.reset();
        }
    });
}


// simulador de pontos - clica numa acao e mostra quantos pontos ganha
var acoes = document.querySelectorAll('.acao');
var resultado = document.getElementById('resultado');
var pontosTexto = document.getElementById('pontos');

for (var j = 0; j < acoes.length; j++) {
    acoes[j].addEventListener('click', function() {
        // tira o destaque das outras acoes
        for (var k = 0; k < acoes.length; k++) {
            acoes[k].classList.remove('ativa');
        }
        // marca a que foi clicada
        this.classList.add('ativa');

        // descobre quantos pontos a acao da
        var tipo = this.id;
        var pontos = 0;

        if (tipo == 'plantar') {
            pontos = 50;
        } else if (tipo == 'reciclar') {
            pontos = 30;
        } else if (tipo == 'transporte') {
            pontos = 25;
        } else if (tipo == 'energia') {
            pontos = 40;
        }

        pontosTexto.innerText = pontos;
        resultado.classList.add('mostra');
    });
}


// clica numa imagem .ampliar pra abrir ela grande em cima da pagina
var imagensAmpliar = document.querySelectorAll('.ampliar');

for (var n = 0; n < imagensAmpliar.length; n++) {
    imagensAmpliar[n].style.cursor = 'zoom-in';
    imagensAmpliar[n].addEventListener('click', function() {
        var overlay = document.createElement('div');
        overlay.className = 'overlay-ampliar';

        var imgGrande = document.createElement('img');
        imgGrande.src = this.src;
        imgGrande.alt = this.alt;

        overlay.appendChild(imgGrande);
        document.body.appendChild(overlay);

        // clica no overlay pra fechar
        overlay.addEventListener('click', function() {
            overlay.remove();
        });
    });
}