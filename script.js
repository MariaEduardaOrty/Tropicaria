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
    const alternaContraste = document.getElementById('alterna-contraste')

    let tamanhoAtualFonte =1;
    
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    
    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaContraste.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })


})
ScrollReveal().reveal('#inicio', {delay: 500});
ScrollReveal().reveal('#tropicalia', {delay: 500});
ScrollReveal().reveal('#galeria', {delay: 500});
ScrollReveal().reveal('#contato', {delay: 500});

