
function gerarAposta() {
	var tipoJogo = document.querySelector("#sel1").value; 
	var qtdNum = document.querySelector("#qtdNumeros").value;
	var qtdApostas = document.querySelector("#qtdJogos").value;

	var tabela = document.querySelector("#tabela");

	for (var i = 0; i < Number(qtdApostas); i++) {
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		if (tipoJogo == "mega sena") {
			td1.appendChild(document.createTextNode("Jogo " + (i+1) + "- " + megaSena(qtdNum)));	
		} else if (tipoJogo == "lotofacil") {
			td1.appendChild(document.createTextNode("Jogo " + (i+1) + "- " + lotoFacil(qtdNum)));	
		} else if (tipoJogo == "quina") {
			td1.appendChild(document.createTextNode("Jogo " + (i+1) + "- " + quina(qtdNum)));
		}
		
		tr.appendChild(td1);
		tabela.insertBefore(tr, tabela.childNodes[i]);
	}
	
}
	
//----------------------------------------------------------------
//Retornam um vetor com os numeros sorteados

function megaSena(max) {
	// gerar numeros no intervalo entre 1 e 60...
	var lista = [];
	var num;
	for (var i = 0; i < Number(max); i++) {
		num = getRandomInt(1, 61);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		} 
	}

	return lista.sort(compararNumeros); 
}

function lotoFacil(max) {
	// gerar numeros no intervalo entre 1 e 25...
	var lista = [];
	var num;
	for (var i = 0; i < Number(max); i++) {
		num = getRandomInt(1, 26);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		}
	}

	return lista.sort(compararNumeros); 
}

function quina(max) {
	// gerar numeros no intervalo entre 1 e 80...
	var lista = [];
	var num;
	for (var i = 0; i < Number(max); i++) {
		num = getRandomInt(1, 81);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		}
	}

	return lista.sort(compararNumeros); 
}

//------------------------------------------------------------------------
//Gera numeros aleatorios onde os valores assumem x >= min e x < max

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//------------------------------------------------------------------------
//Para comparar números ao invés de texto, a função de comparação pode simplesmente subtrair b de a.
function compararNumeros(a, b) {
  return a - b;
}
