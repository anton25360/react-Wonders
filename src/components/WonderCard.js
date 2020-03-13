import React, { Component } from 'react'
import './WonderCard.css';

export class WonderCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <img className='cardBackground' src={this.props.imgLink} alt='background'/>
                <h2 className='cardLocation'>{this.props.location}</h2>
                <h1 className='cardName'>{this.props.name}</h1>
        <p className='cardInfo'>{this.props.info}Although the Great Pyramid of Giza was not officially selected as one of the new seven wonders of the world, it was assigned an honorary title because of its undeniable importance. The Great Pyramid of Giza is the biggest and the oldest one among the three pyramids forming the Giza Pyramid Complex.</p>
            
            </div>
        )
    }
}

export default WonderCard
