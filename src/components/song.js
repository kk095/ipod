import React from "react";
import song from '../audio/competition.mp3'


class Song extends React.Component{
    render(){
        let stl={
            width:this.props.percent
        }
        let end_min = Math.floor((this.props.duration/60));
        let end_sec = Math.floor(this.props.duration-(end_min*60));
        let start_min = Math.floor(this.props.current/60);
        let start_sec = Math.floor(this.props.current-(start_min*60))
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
                            <audio autoPlay
                            id ="audio"
                            src={song}
                            >

                            </audio>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="current_time">
                            {/* {Math.floor(this.props.current)} */}
                            {start_min}:{start_sec}
                        </div>
                        <div className="end_time">
                            {/* {Math.floor(this.props.duration)} */}
                            {end_min}:{end_sec}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Song;