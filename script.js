document.addEventListener('DOMContentLoaded',function(){
    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade=document.getElementById('opces-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click' , function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        
        const botaoSelecionado=botaoDeAcessibilidade.getAtrribute('aria-expanded')=== 'true';

        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('laterna-contraste')


})

