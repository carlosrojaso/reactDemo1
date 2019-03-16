import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    info: 'React Clicker'
  };
  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log('componentDidMount>>>');
    this.getInfo().then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        name:  myJson.results[0].name.first,
        picture: myJson.results[0].picture.large,
        info: myJson.results[0].gender
      });
      console.log(myJson.results[0]);
    })
    .catch((error) => console.log(error));
    ;

  }

  getInfo() {
     return fetch('https://randomuser.me/api/?results=1');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.picture} alt="logo" width="50%" />
            Nombre: {this.state.name}<br/>
            Genero: {this.state.info}
        </header>
      </div>
    );
  }
}

App.defaultProps = {
  info: 0
};

export default App;
