var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();     /* desabilita o comportamento default do evento do botão que é enviar os dados do formulário recarregar página e limpar os campos */

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);

    //body = document.querySelector("#tabela-pacientes");
    //console.log(body.innerHTML);

    if (erros.length == 0) {
        // var pacienteTr = montaTr(paciente);
        // var tabela = document.querySelector("#tabela-pacientes");
        // tabela.appendChild(pacienteTr);
        adicionaPacienteNaTabela(paciente);
        form.reset();
        apagaMensagensDeErro();
        form.nome.focus();
    } else {
        exibeMensagensDeErro(erros);
    }

})

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function apagaMensagensDeErro() {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
}

function obtemPacienteDoFormulario(form) {
    var paciente = {    // objeto paciente tem as propriedades nome, peso, altura, gordura, imc
        nome: form.nome.value,    // form.NAME.value
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    };
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if (!validaNome(paciente.nome)) erros.push("É necessário preencher o nome!");
    if (paciente.peso.length == 0) {
        erros.push("É necessário preencher o peso!");        
    } else if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }
    if (paciente.altura.length == 0) {
        erros.push("É necessário preencher a altura!");        
    } else if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida!");
    }
    if (!validaGordura(paciente.gordura)) erros.push("É necessário preencher a gordura!");
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
