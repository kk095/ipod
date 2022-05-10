import React from "react";
import game_pic from '../img/game.png'

class Game extends React.Component{
    constructor(){
        super();
        this.state ={
            game_url:'../img/song1.jpg'
        }
    }
    render(){
        return(
            <div className="game">
                <div className="game_pic">
                    <img src={game_pic} alt="no-img" ></img>
                </div>
                Games
            </div>
        )
    }
}

export default Game;