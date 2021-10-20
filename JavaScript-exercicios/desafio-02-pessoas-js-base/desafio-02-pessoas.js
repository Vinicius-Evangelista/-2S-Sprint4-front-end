// Declarar uma variável qualquer, que receba um objeto vazio.
var qualuquer = new Object();

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = new Object();

pessoa.nome = "Vinicius";
pessoa.sobrenome = "do Nascimento Evangelista";
pessoa.sexo = "Masculino";
pessoa.idade = 16;
pessoa.altura = 1.80;
pessoa.peso = 62;
pessoa.andando = false;
pessoa.caminhouQuantosMetros = 0;


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.FazerAniversario = function(){
    pessoa.idade += 1;
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:

- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;

- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;

- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.Andar = function(metrosCaminhados){

    pessoa.caminhouQuantosMetros += metrosCaminhados;
    pessoa.andando = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.Parar = function(){
    pessoa.andando = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.NomeCompleto = function(nome, sobrenome){

    return `Olá meu nome é ${nome} ${sobrenome} !`;
};


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
 pessoa.MostrarIdade = function(idade){

    return `Olá eu tenho ${idade} anos!`;
 };


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.MostrarPeso = function(peso)
{
    return `Eu peso ${peso}Kg.`;
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.MostrarAltura = function (altura){

    return `Minha altura é ${altura}m.`
};

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.NomeCompleto(pessoa.nome, pessoa.sobrenome)); //Olá meu nome é Vinicius do Nascimento Evangelista !

/*
Qual a idade da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
 
console.log(pessoa.MostrarIdade(pessoa.idade)); //Olá eu tenho 16 anos!

/*
Qual o peso da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
 
console.log(pessoa.MostrarPeso(pessoa.peso)); //Eu peso 62Kg.

/*
Qual a altura da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
 
console.log(pessoa.MostrarAltura(pessoa.altura.toFixed(2))); //Minha altura é 1.80m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/

console.log(pessoa.MostrarIdade(pessoa.idade)); //Olá eu tenho 16 anos!

pessoa.FazerAniversario();

pessoa.FazerAniversario();

pessoa.FazerAniversario();

/*
Quantos anos a `pessoa` tem agora  (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
 
console.log(pessoa.MostrarIdade(pessoa.idade)); //Olá eu tenho 19 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
 
pessoa.Andar(2);

pessoa.Andar(3);

pessoa.Andar(4);

console.log(pessoa.caminhouQuantosMetros); //9

/*
A pessoa ainda está andando  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.Andar(3);
console.log(pessoa.caminhouQuantosMetros); //12

/*
Se a pessoa ainda está andando, faça-a parar.
*/
 
pessoa.Parar();

/*
E agora: a pessoa ainda está andando  (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
 
pessoa.Andar(6);
console.log(pessoa.caminhouQuantosMetros);//18

/*
Quantos metros a pessoa andou  (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
 
console.log(pessoa.caminhouQuantosMetros); //18

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:

- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";

- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;

- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".

- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
 
pessoa.Apresentacao = function(sexo, nome, sobrenome, idade, altura, peso, caminhouQuantosMetros)
{
    let resposta = `Olá, eu sou o ${nome} ${sobrenome}, tenho ${idade} anos, ${altura}, meu peso é ${peso} e, só hoje eu já caminhei ${caminhouQuantosMetros} metros!`;
    
    if(sexo == "Feminino")
    {
        resposta = `Olá, eu sou a ${nome} ${sobrenome}, tenho ${idade} anos, ${altura}, meu peso é ${peso} e, só hoje eu já caminhei ${caminhouQuantosMetros} metros!`;
        
        if(idade == 1)
        {
            resposta = `Olá, eu sou a ${nome} ${sobrenome}, tenho ${idade} ano, ${altura}, meu peso é ${peso} e, só hoje eu já caminhei ${caminhouQuantosMetros} metros!`;
        }
    
        if(caminhouQuantosMetros == 1)
        {
            resposta = `Olá, eu sou a ${nome} ${sobrenome}, tenho ${idade} ano, ${altura}, meu peso é ${peso} e, só hoje eu já caminhei ${caminhouQuantosMetros} metro!`;

        }
    }

    if(idade == 1)
    {
        resposta = `Olá, eu sou o ${nome} ${sobrenome}, tenho ${idade} anos, ${altura}, meu peso é ${peso} e, só hoje eu já caminhei ${caminhouQuantosMetros} metros!`;
    }

    if(caminhouQuantosMetros == 1)
    {
        resposta = `Olá, eu sou o ${nome} ${sobrenome}, tenho ${idade} anos, ${altura}, meu peso é ${peso} e, só hoje eu já caminhei ${caminhouQuantosMetros} metro!`;
    }

    return resposta;
}
// Agora, apresente-se ;)
 console.log(pessoa.Apresentacao(pessoa.sexo, pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.altura.toFixed(2), pessoa.peso, pessoa.caminhouQuantosMetros));

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