import React, { Component } from 'react';

export default class War extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          text: "WAR"
        }
      };
        
    render(){
        return(
            <div className={this.props.className}>
                
                {this.props.text}
        
            </div>
        ) 
    }
}
