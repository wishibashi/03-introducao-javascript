var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");  // veja em index.css que a classe fadeOut cria um efeito que demora 0,5 seg.
    setTimeout(function(){
        event.target.parentNode.remove(); // target é o elemento que foi clicado, parentNode é o elemento pai
    },500)      // executa a função depois do timeout de 0,5 seg.
})

