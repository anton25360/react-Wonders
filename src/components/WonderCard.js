import React, { Component } from 'react'
import './WonderCard.css';

let visitedMsg = 'You have visited it!'

//marks as seen when user clicks
function markButton(input) {
    localStorage.setItem(input, 'seen')
    document.getElementById(input).innerText = visitedMsg
    document.getElementById(input).classList.add("revert");
}

export class WonderCard extends Component {

    //marks as seen if 'seen' propery exists onLoad
    componentDidMount(){
        if (localStorage.getItem(this.props.num) === 'seen') {
            document.getElementById(this.props.num).innerText = visitedMsg
            document.getElementById(this.props.num).classList.add("revert");
        }
    }

    render() {
        return (
            <div className='cardContainer'>
                <img className='cardBackground' src={this.props.imgLink} alt='background' />
                <h2 className='cardLocation'>{this.props.location}</h2>
                <h1 className='cardName'>{this.props.name}</h1>
                <p className='cardInfo'>{this.props.info}</p>    
                {/* <p onClick={()=>{markSeen(this.props.num)}} className='cardMark' id={this.props.num}>Mark as seen.</p> */}
                <button onClick={()=>{markButton(this.props.num)}} className='markBtn' id={this.props.num}>Mark as seen.</button>
                {/* <button className='markBtn'>Mark as seen</button> */}
            </div>
        )
    }
}

export default WonderCard
