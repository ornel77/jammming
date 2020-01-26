import React, { Component } from 'react'
import './TrackList.css'
import Track from '../Track/Track'

class TrackList extends Component {
    render () {
        return (
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                {/* <h3>Breathe Me</h3>
                <p>Sia | Bool</p>
                <span>Lasgna</span>
                <hr/>
                <h3>Breathe Me</h3>
                <p>Sia | Bool</p>
                <hr/>
                <h3>Breathe Me</h3>
                <p>Sia | Bool</p>
                <span>Lasgna</span>
                <hr/> */}
                <Track/>
            </div>
        )
    }
}

export default TrackList