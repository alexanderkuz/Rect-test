import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world!!</h1>
        </header>
          <div className="fruit-list">
              <h1>Fruit List for {this.props.name}</h1>
              <ul>
                  <li>Апельсин</li>
                  <li>Банан</li>
                  <li>Киви</li>

              </ul>
          </div>
      </div>
    );
  }
}

class FruitList extends Component {
    render() {
        return (
            <div className="fruit-list">
                <h1>Fruit List for {this.props.name}</h1>
                <ul>
                    <li>Апельсин</li>
                    <li>Банан</li>
                    <li>Киви</li>
                </ul>
            </div>
        );
    }
}
export default App;
