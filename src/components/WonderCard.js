import React, { Component } from 'react'

export class WonderCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name} in {this.props.dateBuilt}</h1>
            </div>
        )
    }
}

export default WonderCard
