import React, { Component } from 'react'
import './WonderCard.css';

export class WonderCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <img src={this.props.imgLink} alt='image' />
                <h1>{this.props.name} in {this.props.dateBuilt}</h1>
            </div>
        )
    }
}

export default WonderCard
