function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var mensagemErro = document.getElementById("mensagemErro")

    if (nome === "") {
       mensagemErro.innerHTML = "por favor, preencha o campo de nome.";
       return false;
    }

    return true;
    
   }