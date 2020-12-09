/*
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
*/

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var pesoEhValido = validaPeso(peso);
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    var altura = tdAltura.textContent;
    var alturaEhValida = validaAltura(altura);

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    };
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaNome(nome) {
    if (nome.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

function validaGordura(gordura) {
    if (gordura.length > 0) {
        return true;
    } else {
        return false;
    }
}