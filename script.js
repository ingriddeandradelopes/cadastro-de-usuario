// validacao do formulario
function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    // Parte incompleta: verificar se o campo de nome esta vazio
    if (/* Adiciona a condicao de vericacao */){
        errorMessage.textContent = " ocampo de nome e obrigatorio.";
        return false;
    }

    // Parte imcompleta:veridar o forato do email usando regex
    if(/* Adiciona a condicao para validar email */){
        errorMessage.textContent ="A senha deve ter pelo menos 6 caracteres.";
        return false;
    } 

    errorMessage.textContent="";
    alert("cadastro realizado com sucesso!")
    return true;
}