import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card.js"
import CardForm from "./CardForm.js"

class App extends Component {
  state = {cards:[]}
  addCard = (card) => {
    const cards = this.state.cards
    this.setState({ cards: [...cards, card] })
  }
  renderCards = () => {
    return this.state.cards.map( (card) => {
      return <Card  card={card}/>
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Flashcards</h1>
        </header>
        {this.renderCards()}
        <CardForm addCard={this.addCard}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
