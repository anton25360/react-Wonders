import React, { Component } from 'react'
import './IntroCard.css';

export class IntroCard extends Component {
    render() {
        return (
            <div className='introContainer'>
                <h1 className='introName'>Welcome to Wonders.</h1>
                <p className='introInfo'><br/>Here you can find information on all 7 (new) wonders of the world. You can also install 'Wonders' as a native app by clicking on Share > Add to Home Screen.<br/><br/>Enjoy!</p>
            </div>
        )
    }
}

export default IntroCard
