import React from "react";


class Song extends React.Component{
    render(){
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
                        <div className="use_bar">

                        </div>
                    </div>
                    <div className="timeline">
                        <div className="current_time">
                            00:00
                        </div>
                        <div className="end_time">
                            03:54
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Song;