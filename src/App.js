import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    deck_id: "q4bqaadgz90k",
    computerHand: [],
    userHand: [],
    value: []
  };
  
  componentDidMount(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(data => data.json())
    .then(data => {
      // console.log(data, 'data')
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
          .then(data => data.json())
          .then(data => {
            // console.log(data.cards)
            this.setState({computerHand: data.cards})
        })
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`)
          .then(data => data.json())
          .then(data => {
            // console.log(data.cards)
            this.setState({userHand: data.cards})
          })
    })
  }

  pushValues(){
    this.state.computerHand.map((item, index)=>{
      const compCardValues = item.value;
      const removeFirstValue = this.state.value.splice(0, 1);
      const pushCompValues = this.state.value.push(item.value);
      return compCardValues
    });
    this.state.userHand.map((item, index)=>{
      const userCardValues = item.value;
      const pushUserValues= this.state.value.push(item.value);
      return userCardValues
    });
  };

  cardValues(computerValues, userValues){
    const faceCards = ['JACK', 'QUEEN', 'KING', 'ACE'];
    let compCard = this.state.value[0];
    let userCard = this.state.value[1];
    if(compCard === faceCards[0] || compCard === faceCards[1] || compCard === faceCards[2] || compCard === faceCards[3]){
      this.state.value.splice(0, 1, '10');
    }
    if(userCard === faceCards[0] || userCard === faceCards[1] || userCard === faceCards[2] || userCard === faceCards[3]){
      this.state.value.splice(1, 1, '10');
    }
  }
  
  renderComputerCards(){
    return this.state.computerHand.map((card, key)=>{
      return <img src={card.image} alt="cards"/>
    });
  }
  renderUserCards(){
    return this.state.userHand.map((card, key)=>{
      return <img src={card.image} alt="cards"/>
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="computercards">{this.renderComputerCards()}</div>
        <div className="playercards">{this.renderUserCards()}</div>
        <div className="cardValues">{this.pushValues()}</div>
        <div className="cardValues">{this.cardValues()}</div>
      </div>
    );
  }
}

export default App;
