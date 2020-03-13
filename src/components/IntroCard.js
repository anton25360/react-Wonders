import React, { Component } from 'react'
import './IntroCard.css';

export class IntroCard extends Component {
    render() {
        return (
            <div className='introContainer'>
                <h1 className='introName'>hello there</h1>
                <p className='introInfo'>Although the Great Pyramid of Giza was not officially selected as one of the new seven wonders of the world, it was assigned an honorary title because of its undeniable importance. The Great Pyramid of Giza is the biggest and the oldest one among the three pyramids forming the Giza Pyramid Complex.</p>
            </div>
        )
    }
}

export default IntroCard
