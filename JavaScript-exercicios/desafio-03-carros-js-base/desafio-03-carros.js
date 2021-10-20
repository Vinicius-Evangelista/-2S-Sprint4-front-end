 // CARROS

 /*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = new Object();

isTruthy.TrueOrFalse = _ => {

    if( _ )
    {
        return true;
    }else{
        return false;
    }
}
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
// valores falsy (false, 0, -0, NaN, null, undefined, "",",``)


console.log(isTruthy.TrueOrFalse(false));

console.log(isTruthy.TrueOrFalse(NaN));

console.log(isTruthy.TrueOrFalse(null));

console.log(isTruthy.TrueOrFalse(undefined));

console.log(isTruthy.TrueOrFalse(""));

console.log(isTruthy.TrueOrFalse(""));

console.log(isTruthy.TrueOrFalse(``));

console.log(isTruthy.TrueOrFalse(0));

console.log(isTruthy.TrueOrFalse(-0));

console.log("----------------------------------")

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
 

console.log(isTruthy.TrueOrFalse([]));

console.log(isTruthy.TrueOrFalse('0'));

console.log(isTruthy.TrueOrFalse([]));

console.log(isTruthy.TrueOrFalse({}));

console.log(isTruthy.TrueOrFalse("eita"));

console.log(isTruthy.TrueOrFalse(1));

console.log(isTruthy.TrueOrFalse(-Infinity));

console.log(isTruthy.TrueOrFalse("t"));

console.log(isTruthy.TrueOrFalse(new Date));

console.log(isTruthy.TrueOrFalse(Infinity));



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
 
var carro = new Object();

carro.marca = "Renault";
carro.modelo = "Duster";
carro.placa = "NCIA6789";
carro.ano = "2010";
carro.cor = "Marrom";
carro.quantasPortas = "4";
carro.assentos = "5";
carro.quantidadeDePessoas = 0;
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.MudarCor = cor => {
    carro.cor = cor;
};
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
 carro.ObterCor = () => carro.cor
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
 carro.ObterModelo = () => carro.modelo;
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
 
carro.ObterMarca = () => carro.marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
 
console.log(`Esse carro é um ${carro.ObterMarca()} ${carro.ObterModelo()}`); //Esse carro é um Renault Duster

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"

- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
 
carro.AdicionarPessoasCarro = pessoa => {

    if(carro.quantidadeDePessoas >= 5)
    {
        console.log("O carro já está lotado!");
    }

    if(pessoa > 5 && carro.quantidadeDePessoas < 5)
    {
        console.log(`Só cabem mais ${5 - carro.quantidadeDePessoas} pessoas!`);
    }

    if(pessoa >= 5 || (pessoa + carro.quantidadeDePessoas) > 5)
    {
       console.log("O carro possui apenas 5 assentos!")
    }else{
        carro.quantidadeDePessoas += pessoa;
        console.log(`Já temos ${carro.quantidadeDePessoas} pessoas no carro!`);
    }
}; 

/*carro.AdicionarPessoasCarro(4);
carro.AdicionarPessoasCarro(7);
*/

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro 
*/
 
console.log(carro.ObterCor());//Marrom

// Mude a cor do carro para vermelho.
 
carro.MudarCor("Branco")

// E agora, qual a cor do carro 
console.log(carro.ObterCor());//Branco

// Mude a cor do carro para verde musgo.
carro.MudarCor("Verde musgo");

// E agora, qual a cor do carro 
console.log(carro.ObterCor());//Duster

// Qual a marca e modelo do carro 
 
console.log(carro.ObterModelo());

// Adicione 2 pessoas no carro.
 carro.AdicionarPessoasCarro(2);//Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
 carro.AdicionarPessoasCarro(4);//Já temos 2 pessoas no carro!

// Faça o carro encher.
 carro.AdicionarPessoasCarro(3);//Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
 carro.AdicionarPessoasCarro(-4);//Já temos 1 pessoas no carro!

// Adicione 10 pessoas no carro.
carro.AdicionarPessoasCarro(10);//O carro possui apenas 5 assentos!

// Quantas pessoas temos no carro 
console.log(carro.quantidadeDePessoas);//1