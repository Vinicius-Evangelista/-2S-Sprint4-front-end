
import { Component } from 'react';

// import './page/Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositoriesList: [],
      nomeUsuario: ''
    }
  }


  // Método que busca todos os repositórios.

  BuscarRepositorios = (props) => {

    props.preventDefault();

    //buscador da api via método AJAX
    fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos?type,page,per _page = 10`)

      //avise se os dados chegarem
      .then(console.log('os dados chegaram'))
      
      //passe para json, não se esqueça sempre temos que passar a resposta para uma forma que o código entenda.
      .then(dados => dados.json())
      
      //então atribua tudo o que estiver em dados para a repositoriesList.
      .then( dados => this.setState({repositoriesList : dados}))

      //caso algo dê errado mostre o erro.
      .catch(erro => console.log(erro))
    }
    
  atualizarNomeUsuario = (prop) => {

    this.setState({nomeUsuario : prop.target.value});
  }

    render() {
      return (
        <div>

        <section>
          <h2>Mostrar dados do repositorios</h2>

          {/* estrutura da table */}
          <table>

            <thead>
              <th>Id</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Data de criação</th>
            </thead>

            <tbody>
              {/* pegando os atributos da tela e mostrando com um Map */}

              {this.state.repositoriesList.map((repositorios, index) => {

                while (index < 10) {
                  return(
                    <tr key = {repositorios.id}>
                    <td>{repositorios.id}</td>
                    <td>{repositorios.name}</td>
                    <td>{repositorios.description}</td>
                    <td>{repositorios.created_at}</td>
                    <td>{repositorios.size}</td>
                  </tr>
                  );
                }

              }
              )}

            </tbody>
          </table>

        </section>
        
        <section>
            <div>
              {/* quando o usuario subemeter o formulário busque os dados */}
              <form onSubmit = {this.BuscarRepositorios}>

                <input type = "text" placeholder = "Nome do usuário" 
                
                //a cada atualização chame a função NomeUsuario.
                onChange = {this.atualizarNomeUsuario}

                // o valor do input vai ser aquilo que estiver na propriedade do objeto nome usuário.
                value = {this.state.nomeUsuario}
                />
                <button type = "submit">Buscar</button>
              </form>
            </div>
        </section>
        
      </div>
    );
  }

}

export default Home;
