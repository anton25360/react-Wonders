import React, { Component } from 'react'
import './WonderCard.css';


function markSeen(input) {
    alert(input)
    localStorage.setItem(input, 'seen')
}

export class WonderCard extends Component {



    render() {
        return (
            <div className='cardContainer'>
                <img className='cardBackground' src={this.props.imgLink} alt='background' />
                <h2 className='cardLocation'>{this.props.location}</h2>
                <h1 className='cardName'>{this.props.name}</h1>
                <p className='cardInfo'>{this.props.info}</p>    
                <p onClick={()=>{markSeen(this.props.num)}} className='cardMark'>Mark as seen.</p>
            </div>
        )
    }
}

export default WonderCard
