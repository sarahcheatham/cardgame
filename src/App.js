import React, { Component } from 'react';
import './App.css';
import War from './war.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deck_id: "q4bqaadgz90k",
      computerObj: [],
      userObj: [],
      userCardValue: [],
      computerCardValue: [],
    }
  };

  componentDidMount(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(data => data.json())
    .then(data => {
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
          .then(data => data.json())
          .then(data => {
            this.setState({computerObj: data.cards});
            this.state.computerObj.map((item, index)=>{
              this.setState({computerCardValue: [...this.state.computerCardValue, item.value]})
          })
        })
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
          .then(data => data.json())
          .then(data => {
            this.setState({userObj: data.cards});
            this.state.userObj.map((item, index)=>{
              this.setState({userCardValue: [...this.state.userCardValue, item.value]})
          })
        })
    })
  }

  cardValues(){
  }

  
  renderComputerCards(){
    return this.state.computerObj.map((card, key)=>{
      return <img src={card.image} alt="cards" className="cards" key={key}/>
    });
  }
  renderUserCards(){
    return this.state.userObj.map((card, key)=>{
      return <img src={card.image} alt="cards"className="cards" key={key}/>
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="computercards">{this.renderComputerCards()}</div>
        <War className="war"/>
        <div className="cardValues">
          {this.cardValues()}
        </div>
        <div className="usercards">{this.renderUserCards()}</div>
      </div>
    );
  }
}

export default App;
