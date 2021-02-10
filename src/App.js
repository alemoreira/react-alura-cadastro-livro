import "purecss/build/pure-min.css";
import "purecss/site/static/layouts/side-menu/styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      autores: [
        { id: 1, nome: "Alberto Souza", email: "alberto.souza@caelum.com.br" },
      ],
    };
  }

  componentDidMount() {
    fetch("https://cdc-react.herokuapp.com/api/autores")
      .then((response) => response.json())
      .then((body) => this.setState({ autores: body }));
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#company">
              Company
            </a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#home" className="pure-menu-link">
                  Home
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#about" className="pure-menu-link">
                  Autor
                </a>
              </li>

              <li className="pure-menu-item menu-item-divided pure-menu-selected">
                <a href="/servicos" className="pure-menu-link">
                  Livro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
            <h2>Cadastro dos Autores para cadastro dos Livros</h2>
          </div>

          <div id="content" className="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" defaultValue="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" defaultValue="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input
                    id="senha"
                    type="password"
                    name="senha"
                    defaultValue=""
                  />
                </div>
                <div className="pure-control-group">
                  <label></label>
                  <button
                    type="submit"
                    className="pure-button pure-button-primary"
                  >
                    Gravar
                  </button>
                </div>
              </form>
            </div>

            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.autores.map((autor) => (
                    <tr key={autor.id}>
                      <td>{autor.nome}</td>
                      <td>{autor.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
