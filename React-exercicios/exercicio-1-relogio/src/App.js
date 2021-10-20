import React from 'react';
import './App.css';

//Isso é um componente de função, que é basicamente uma função em JS
//Retonar um subtítlo com o horário atual
function DataFormatada(props) {
  return <h2> Horáril atual: {props.date.toLocaleTimeString()}</h2>
}


//um componente React ideal sempre irá receber um objeto props como parâmetro e
//vai retornar um elemento React 

//DataFormatada() é um componente, já thick() não.

class Clock extends React.Component {
  //A responsabilidade do construtor é estabelecer a estrutura do componente.

  constructor(props) {
    // o método super se refere ao construtor da classe pai e traz mais funcionalidade
    //a classe que ele está inserido
    super(props);

    //usando o this para definir os states de um componente
    //lembrando que um componente pode ter ou não um objeto state.
    this.state = {

      //definindo que a propriedade date pega a data e hora atual.
      date: new Date()
    };
  };

  //thick é apenas uma função que muda a propriedade date de state, atribuindo o horário atual.
  //sem falar que ele está dentro da classe e não fora, porque se estivesse daria erro.
  thick() {
    this.setState({
      date: new Date()
    });
  };

  //é chamada imediatamente após um ser componente ser inicializado.
  componentDidMount() {
    this.timerID = setInterval( () => {
      this.thick();
    }, 1000);
    console.log('Eu sou o relógio ' + this.timerID);
  };


  //função que para o relógio (desliga o componente);
 Pause(){

  this.componentWillUnmount()

  console.log(`Relógio ${this.timerID} pausado`);
 }

 //função que faz o relógio retonar
 Resume(){
   this.timerID = setInterval( () => {
    this.thick();
  }, 1000);

  console.log("Relógio retomado!");
  console.log(`Agora eu sou o relógio ${this.timerID}`);
 }
  //Quando o componente Clock  é removido da árvore DOM, caracterizamos com desmontagem/morte.
  componentWillUnmount() {
    //clearInterval limpoa o relógio criado pela setInterval.
    clearInterval(this.timerID);
  };

  // PararRelogio(){

  //   var btnPausar = document.getElementById('BtnPause');

  //   btnPausar.addEventListener('click', () => {

  //     this.componentWillUnmount();
  //   });

  // };

  // a função render() necessita ter um return do que vai ser renderizado,
  // ou seja, código que será transformado em arquivo visual.
  render() {

    //um componente React deve retornar sempre um elemento React
    //o que se conclui aqui
    
    return (
      <div>
        <h1>Relógio</h1>
         {/* quando clicar o botão irá acionar a função Pause() */}

        <button className = "BtnPause" onClick = { () => this.Pause() }>Parar Relogio</button>

         {/* quando clicar o botão irá acionar a função Resume() */}
        
        <button className = "BtnResume" onClick = { () => this.Resume() }>Retomar Relogio</button>
        <DataFormatada date={this.state.date} />
      </div>
    );
  };
}


//App também é um componente React, mas ele não recebe um props.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;
