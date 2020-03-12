import React, { Component } from 'react'
import './WonderCard.css';

export class WonderCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <img className='cardBackground' src={this.props.imgLink} alt='background'/>
                <h1 className='cardName'>{this.props.name}</h1>
                <h1 className='cardLocation'>{this.props.location}</h1>
            
            </div>
        )
    }
}

export default WonderCard
