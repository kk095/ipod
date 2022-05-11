import React from "react";
import song from '../audio/competition.mp3'


class Song extends React.Component{
    render(){
        let stl={
            width:this.props.percent
        }
        return(
            <div className="play_song">
                <div className="song_detail">
                    <div className="song_poster">
                    </div>
                    <div className="song_name">
                            No Competition <br/>
                            <span>Jass Manak</span>
                    </div>
                </div>
                <div className="song_bar">
                    <div className="bar">
                        <div className="use_bar" style={stl} >
                            <audio
                            id ="audio"
                            src={song}
                            >

                            </audio>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="current_time">
                            {Math.floor(this.props.current)}
                        </div>
                        <div className="end_time">
                            {Math.floor(this.props.duration)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Song;