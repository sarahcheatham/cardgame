import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    hand: [],
    deck_id: "q4bqaadgz90k",
    value: []
  };
  componentDidMount(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
    .then(data => data.json())
    .then(data => {
      console.log(data, 'data')
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`)
        .then(data => data.json())
        .then(data => {
          // console.log(data.cards)
          this.setState({hand: data.cards})
        })
    })
  }
  getValues(){
    this.state.hand.map((item, index)=>{
      const cardValues = item.value;
      const pushValues = this.state.value.push(cardValues);
      const newValues = this.state.value.slice();
      return newValues
    });
  }

  facecardValues(newValues){
    const faceCards = ['JACK', 'QUEEN', 'KING', 'ACE'];
    let cardOne = this.state.value[0];
    let cardTwo = this.state.value[1];
    if(cardOne === faceCards[0] || cardOne === faceCards[1]  || cardOne === faceCards[2] || cardOne === faceCards[3]){
      cardOne = '10';
      console.log(cardOne, cardTwo)
    } else if(cardTwo === faceCards[0] || cardTwo === faceCards[1] || cardTwo === faceCards[2] || cardTwo === faceCards[3]){
      cardTwo = '10';
      console.log(cardOne, cardTwo)
    } else {
      console.log(cardOne, cardTwo)
    }
  }
  
  rendercards(){
    return this.state.hand.map((card, key)=>{
      return <img src={card.image}/>
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="cards">{this.rendercards()}</div>
        <div className="cardValues">{this.getValues()}</div>
        <div className="cardValues">{this.facecardValues()}</div>
      </div>
    );
  }
}

export default App;
