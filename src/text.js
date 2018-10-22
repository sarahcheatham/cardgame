import React, { Component } from 'react';

export default class Text extends React.Component {
    
    render(){
        return(
            <p className={this.props.className}>{this.props.text}</p>
        )
    }
}