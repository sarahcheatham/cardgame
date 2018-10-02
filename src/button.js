import React, { Component } from 'react';

export default class Button extends React.Component{
    state = {
        deck_id: "q4bqaadgz90k",
        // newCompObj: [],
        // newCompCard: [],
        // newUserObj: [],
        // newUserCard: []
    };

    
    reRenderCards(){
        // this.state.newCompObj.map((card, key)=>{
        //     return <img src={card.image} alt="cards" className="cards" key={key}/>
        // })
    }
    render(){
        return(
            <button className={this.props.className} onClick={this.reRenderCards()}>{this.props.text}</button>
        )
    }
}