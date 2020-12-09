var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {        // o status 200 significa que a requisição XML foi bem sucedida
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            })
        } else {                        // o status diferente de 200 significa que ocorreu algum erro
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();

})
