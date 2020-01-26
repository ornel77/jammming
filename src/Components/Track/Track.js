import React, { Component } from 'react'
import './Track.css'

class Track extends Component {
    state = {
        isRemoval: true
    }

    renderAction = () => {
        if(this.state.isRemoval) {
            return <button className="Track-action">+</button>
        } else {
            return <button className="Track-action">-</button>
        }
    }
    render () {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Cave</h3>
                    <p>Muse | Showbiz</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track