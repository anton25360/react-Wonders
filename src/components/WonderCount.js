import React, { Component } from 'react'
import './WonderCount.css';

function getVisitedCount() {
    var visitedCount = Object.keys(localStorage).length
    // document.getElementById('countMsg').innerText = 'hahahah'
    if (visitedCount == 7) {
        return 'You have visited all 7 Wonders. Congratulations!'
    } else if (visitedCount == 0) {
        return 'You haven\'t visited any yet. Get going!'
    } else if (visitedCount == 1) {
        return ' You have visited ' + visitedCount + ' Wonder. Nice!'
    } else {
        let math = visitedCount / 7 * 100
        return ' You have visited ' + visitedCount + ' Wonders. ('+math.toFixed(0)+'% done)'
    }
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
