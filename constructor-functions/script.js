function Carro(){
  this.marca = 'Marca';
  this.preco = '1,00';
}

const fiat = new Carro();

fiat.marca = 'Fiat';
fiat.preco = 9000;

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade,
  this.andar = function() {
    console.log(this.nome + ' andou');
  }

}

const João = new Pessoa("João", "20 anos");
const Maria = new Pessoa("Maria", "25 anos");
const Bruno = new Pessoa("Bruno", "15 anos");

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


var listaProdutos = ["geladeira", "fogão", "coifa" ];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);
console.log("Array original: "+listaProdutos);
console.log("Array retornada pelo método map() :"+ listaEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase()+elemento.slice(1);
  // return elemento.chartAt(0).toUpperCase()+elemento.slice(1);
}

