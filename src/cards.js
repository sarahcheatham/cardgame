import React, { Component } from 'react';

export default class Cards extends React.Component{
    state = {
        deck_id: "q4bqaadgz90k",
        computerHand: [],
        userHand: [],
        value: []
    };

    renderComputerCards(){
        console.log(this.state.userHand)
        // return this.state.computerHand.map((card, key)=>{
        //   return <img src={card.image} alt="cards"/>
        // });
    }

    renderUserCards(){
        return this.state.userHand.map((card, key)=>{
          return <img src={card.image} alt="cards"/>
        });
      }

    render(){
        return(
            <div>
                <div>{this.renderComputerCards()}</div>
                <div>{this.renderUserCards()}</div>
            </div>
        )
    }
}