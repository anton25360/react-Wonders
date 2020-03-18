import React, { Component } from 'react'
import './WonderCount.css';

function getVisitedCount() {
    var visitedCount = Object.keys(localStorage).length
    if (visitedCount === 7) {
        return 'You have visited all 7 Wonders. Congratulations!'
    } else if (visitedCount === 0) {
        return 'You haven\'t visited any yet. Get going!'
    } else if (visitedCount === 1) {
        return ' You have visited 1 Wonder. Nice!'
    } else {
        let math = visitedCount / 7 * 100
        return ' You have visited ' + visitedCount + ' Wonders ('+math.toFixed(0)+'% done)'
    }
}

export class WonderCount extends Component {
    constructor(props) {
        super(props);
        this.state = {refresh: 'one'};
      }

      componentDidMount(){
          setTimeout(()=>{this.setState({refresh:'two'})}, 1000)
      }

      componentDidUpdate(){
          setTimeout(()=>{this.setState({refresh:'three'})}, 1000)
      }

    render() {
        return (
            <div>
                <p id='countText'>{getVisitedCount()}</p>
            </div>
        )
    }
}

export default WonderCount
