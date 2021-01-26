import React from 'react'
import PlayerDetails from './PlayerDetails'
function Player(props) {
    return (
        <div className="player">
            <audio></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.song} />
            {/* {Controls} */}
            <p><strong>Next Up: </strong>{props.nextSong.title} by {props.nextSong.Artist}</p>
        </div>
    )
}

export default Player
