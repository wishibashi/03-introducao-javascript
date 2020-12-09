var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {    // evento input é gerado a cada tecla digitada
    var pacientes = document.querySelectorAll(".paciente");
    if (campoFiltro.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");   // RegExp procura string (this.value), "i" => case Insensitive
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})
