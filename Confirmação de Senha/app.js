var formCadastrar = document.forms.formCadastrar;
formCadastrar.onsubmit = function(){
	var senha = formCadastrar.senha.value;
	var comSenha = formCadastrar.comSenha.value;
	if(senha.length < 6){
		alert("Senha menor que 6 caracteres!");
		return false;
	}else if(senha != comSenha){
		alert("Confirmação de senha inválida");
		return false;
	}else{
		return true;
	}
} 
