import React, { Component } from 'react'

export class WonderCard extends Component {
    render() {
        return (
            <div>
                <h1>name: {this.props.name}</h1>
            </div>
        )
    }
}

export default WonderCard
