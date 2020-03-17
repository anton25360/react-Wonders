import React, { Component } from 'react'
import './WonderCount.css';

function getVisitedCount() {
    var num = Object.keys(localStorage).length
    document.getElementById('countMsg').innerText = 'hahahah'
    return num
}

function setMessage(params) {
    
}

export class WonderCount extends Component {
    render() {
        return (
            <div>
                <p id='countText'>{getVisitedCount()}</p>
                <p id='countMsg'>{setMessage()}</p>
            </div>
        )
    }
}

export default WonderCount
