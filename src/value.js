import React, { Component } from 'react';

export default class Value extends React.Component{
    state = {
        hand: [],
        deck_id: "q4bqaadgz90k",
        value: []
      };
    checkValues(){
        console.log(this)
    }

    render(){
        return(
            <div>{this.checkValues()}</div>
        )
    }
}