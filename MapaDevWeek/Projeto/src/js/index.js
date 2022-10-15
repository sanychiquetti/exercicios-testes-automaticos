/* Objetivo - qdo clicarmos na aba, temos que mostrar o conteúdo
 da aba clicada, e esconder da aba.

 - passo 1 - dar um jeito de pegar  os elementos que representam as abas do html

 - passo 2 - dar um jeito de identificar o clique no elemento da aba

 - passo 3 - qdo o usuário clicar, desmarcar a aba selecionada

  - passo 4 - marca a aba clicada como selecionado

  - passo 5 - esconder o conteudo anterior

  - passo 6 - mostrar o conteudo da aba selecionada
 */

// passo 1  dar um jeito de pegar  os elementos que representam as abas do html
//console.log(document.querySelectorAll(".aba"));
//outra forma de fazer isso usando uma variável,:
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
    //passo 2 : dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

       selecionarAba(aba)
       mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
     // passo 3  qdo o usuário clicar, desmarcar a aba selecionada
     const abaSelecionada = document.querySelector
     (".aba.selecionada");
     abaSelecionada.classList.remove
     ("selecionado");

     //passo 4 - marca a aba clicada como selecionado
     aba.classList.add
     ("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    //passo 5 - esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector
    (".informacao.selecionado");
    informacaoSelecionada.classList.remove
    ("selecionado");

    //passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba =
    `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById
    (idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add
    ("selecionado");
}