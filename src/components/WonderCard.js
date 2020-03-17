import React, { Component } from 'react'
import './WonderCard.css';

//marks as seen whenuser clicks
function markSeen(input) {
    localStorage.setItem(input, 'seen')
    document.getElementById(input).innerText = 'verified wonder'
}

export class WonderCard extends Component {

    //marks as seen if 'seen' propery exists onLoad
    componentDidMount(){
        console.log(this.props.num);

        if (localStorage.getItem(input) === 'seen') {
            // document.querySelector('.1').innerText = 'verified'
            document.getElementById(input).innerText = 'verified wonder'
        }
    }

    render() {
        return (
            <div className='cardContainer'>
                <img className='cardBackground' src={this.props.imgLink} alt='background' />
                <h2 className='cardLocation'>{this.props.location}</h2>
                <h1 className='cardName'>{this.props.name}</h1>
                <p className='cardInfo'>{this.props.info}</p>    
                <p onClick={()=>{markSeen(this.props.num)}} className='cardMark' id={this.props.num}>Mark as seen.</p>
            </div>
        )
    }
}

export default WonderCard
