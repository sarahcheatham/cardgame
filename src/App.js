import React, { Component } from 'react';
import './App.css';


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
    fetch(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/shuffle/?deck_count=1`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
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
  };
  
  reRenderCards(e){
    fetch(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`)
        .then(data => data.json())
        .then(data => {
          this.setState({userObj: data.cards});
          this.state.userObj.map((item, index)=>{
            this.state.userCardValue.unshift(item.value)
          })
        })
        fetch(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`)
        .then(data => data.json())
        .then(data => {
          this.setState({computerObj: data.cards});
        })    
  };

renderComputerScore(){
  const faceCards = [
    'JACK',
    'QUEEN',
    'KING',
    'ACE'
  ];
  return this.state.computerCardValue.map((value, index)=>{
    const compCardValue = this.state.computerCardValue.slice();
    if(value === faceCards[0] || value === faceCards[1] || value === faceCards[2] || value === faceCards[3]){
      compCardValue.splice(0, 1, "10");
      this.setState({computerCardValue: compCardValue})
    } 
    return <p key={index}>Computer: {value}</p>
  })
};

renderUserScore(){
  const faceCards = [
    'JACK',
    'QUEEN',
    'KING',
    'ACE'
  ];
  return this.state.userCardValue.map((value, index)=>{
    const userCardValue = this.state.userCardValue.slice();
    if(value === faceCards[0] || value === faceCards[1] || value === faceCards[2] || value === faceCards[3]){
      userCardValue.splice(0, 1, "10");
      this.setState({userCardValue: userCardValue})
    } 
    return <p key={index}>Player: {value}</p>
      // const newUserValue = this.state.userCardValue.slice();
      // newUserValue.reduce((total, newValue)=>{
      //   const newVal = parseInt(total) + parseInt(newValue);
      //   this.setState({userCardValue: [...this.userCardValue, newVal]})
        // return <p key={index}>Your Score: {newVal}</p>
  })
};

  renderComputerCards(){
    return this.state.computerObj.map((card, key)=>{
      return <img src={card.image} alt="cards" className="cards" key={key}/>
    });
  };

  renderUserCards(){
    return this.state.userObj.map((card, key)=>{
      return <img src={card.image} alt="cards"className="cards" key={key}/>
    });
  };

  render() {
    return (
      <div className="App">
        <div className="computerscore">{this.renderComputerScore()}</div>
        <div className="userscore">{this.renderUserScore()}</div>
        <div className="computercards">{this.renderComputerCards()}</div>
        <div className="war" text=""></div>
        <div className="usercards">{this.renderUserCards()}</div>
        <button className="drawButton" onClick={() => this.reRenderCards()}>Draw</button>
      </div>
    );
  }
}

export default App;
