var cadastro = document.forms.login;
var btn = document.getElementById("enviar");
	cadastro.onsubmit = function(){

	var nome = cadastro.nome.value;
	var sobreNome = cadastro.sobreNome.value;
	var nomeUsu = cadastro.usuario.value;
	var senha = cadastro.senha.value;
	var senhaConfirmacao = cadastro.confirmacaoSenha.value;
	var telefone = cadastro.telefone.value;
	var data = cadastro.data.value;
	var local = cadastro.local.value;

	if(senha == senhaConfirmacao){	
		if(senha.length <= 6){
			alert("Senha muito curta!");
			return false;
		}else{
			alert("Cadastro confirmardo!");
		}
	}else{
		alert("Senha não confirmada!");
	return false;
	}
};
