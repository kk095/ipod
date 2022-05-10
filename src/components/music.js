import React from "react";  


class Music extends React.Component{
    render(){
        return(
            <div className=" screen_div music">
                <h2>Music</h2>
                {this.props.item===1?
                <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                <div>
                    All Songs
                </div>
                <div className=" active ">
                <i className ="fas fa-greater-than"></i>
                </div>
                </div>
                :
                <div className="songs">
                    All Songs
                </div>
                }

                {
                    this.props.item===2?
                    <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                <div>
                    Artist
                </div>
                <div className=" active ">
                <i className ="fas fa-greater-than"></i>
                </div>
                </div>
                :
                <div className="artist">
                    Artist
                </div>
                }
                {
                    this.props.item===3?
                    <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                <div>
                    Artist
                </div>
                <div className=" active ">
                <i className ="fas fa-greater-than"></i>
                </div>
                </div>
                :
                <div className="album">
                    Album
                </div>
                }
            </div>
        )
    }
}

export default Music;