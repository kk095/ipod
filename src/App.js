import React from 'react';
import './App.css';
import ZingTouch from 'zingtouch';
import Menu from './components/Menu';
import Music from './components/music';
import Song from './components/song';
import Game from './components/game';
import Setting from './components/setting';
import CoverFlow from './components/coverflow';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            showMenu:true,
            showMusic:false,
            showSong:false,
            showGame:false,
            showSetting:false,
            showCoverflow:false,
            showCom: -1,
            currentTime:0,
            totalTime:0,
            percent:"0%",
            update:true
        }
    }

    handleRotation=(e)=>{
        const context=this;
        var distance=0;
        var region=new ZingTouch.Region(e.target)
        region.bind(e.target,'rotate',function(e){
            distance=e.detail.distanceFromOrigin;

             // initilly cardflow state is true
             if(distance>0 && distance<=85) 
             {
                 context.setState({
                        showCom:1
                    
                 })

             }else if(distance>85 && distance<=180){
                 context.setState({
                     showCom:2
                 })
             }else if(distance>180 && distance<=265){
                context.setState({
                    showCom:3
                })
             }else if(distance>265 && distance<350){
                context.setState({
                    showCom:4
                })
             }

        })
    }

    handleClick = (e)=>{
        console.log(this);
        if(this.state.showMenu){
        if(this.state.showCom ===1){
            this.setState({
                showMenu:false,
                showMusic:true,
                showSong:false,
                showGame:false,
                showSetting:false,
                showCoverflow:false,
            })
        }else if(this.state.showCom===2){
            this.setState({
                showMenu:false,
                showMusic:false,
                showSong:false,
                showGame:false,
                showSetting:false,
                showCoverflow:true,
            })
        }else if(this.state.showCom===3){
            this.setState({
                showMenu:false,
                showMusic:false,
                showSong:false,
                showGame:false,
                showSetting:true,
                showCoverflow:false,
            })
        }else if(this.state.showCom===4){
            this.setState({
                showMenu:false,
                showMusic:false,
                showSong:false,
                showGame:true,
                showSetting:false,
                showCoverflow:false,
            })
        }}else if(this.state.showMusic){
            if(this.state.showCom===1){
                this.setState({
                    showMenu:false,
                    showMusic:false,
                    showSong:true,
                    showGame:false,
                    showSetting:false,
                    showCoverflow:false,
                   
                })
                
            }
        }
    }

    handleMenu=(e)=>{
        if(this.state.showSong){
            this.setState({
                    showMenu:false,
                    showMusic:true,
                    showSong:false,
                    showGame:false,
                    showSetting:false,
                    showCoverflow:false,
            })
        }else{
            this.setState({
                showMenu:true,
                showMusic:false,
                showSong:false,
                showGame:false,
                showSetting:false,
                showCoverflow:false,
        })
        }
    }

    handle_play_pause = (e)=>{
        if(this.state.showSong){
            this.setState({
                update:false
            })
            let audio = document.querySelector("#audio");
            console.log("audio",audio);
            if(audio.paused){
                audio.play();
                console.log("paused!");
                let ipod = this;
                let duration;
                setTimeout(() => {
                    duration =  audio.duration
                    this.setState({
                        totalTime:duration
                    })
                }, 1000);
                setInterval(() => {
                    let current_time = audio.currentTime;
                    let per = (current_time/duration)*100;
                    ipod.setState({
                        currentTime:current_time,
                        percent:`${per}%`,
                       
                    })
                }, 1000);
            }else{
                audio.pause();
                console.log("play mode");
            }
        }
    }

    componentDidUpdate(){
        if(this.state.update){
            this.handle_play_pause();
        }
    }

    handleForward = (e)=>{
        let audio = document.querySelector("#audio");
        let ipod = this;
        let duration =  audio.duration;
            let current_time = audio.currentTime;
            current_time += 10;
            let per = (current_time/duration)*100;
            ipod.setState({
                currentTime:current_time,
                percent:`${per}%`,
                totalTime:duration
            })
            audio.currentTime=current_time;
    }
    handleBackward = (e)=>{
        let audio = document.querySelector("#audio");
        let ipod = this;
        let duration =  audio.duration;
            let current_time = audio.currentTime;
            current_time -= 10;
            if(current_time<0){
                current_time=0;
            }
            let per = (current_time/duration)*100;
            ipod.setState({
                currentTime:current_time,
                percent:`${per}%`,
                totalTime:duration
            })
            audio.currentTime=current_time;
    }

  render(){
    let showComponent;
    if(this.state.showCoverflow){
        showComponent = <CoverFlow />;
    }else if(this.state.showGame){
        showComponent = <Game/>;
    }else if(this.state.showMenu){
        showComponent = <Menu item={this.state.showCom}  />;
    }else if(this.state.showMusic){
        showComponent = <Music  item={this.state.showCom} />;
    }else if(this.state.showSetting){
        showComponent = <Setting/>;
    }else if(this.state.showSong){
        showComponent = <Song percent={this.state.percent} current={this.state.currentTime} duration ={this.state.totalTime} />;
    }
    return(
    <div className="ipodDiv">
        <div className="screen">
           {showComponent}
        </div>
        <div className="bottons_div">
            <div className="btns" onMouseEnter={this.handleRotation} >
                <div className="menu_btn" onClick={this.handleMenu}>
                    MENU
                </div>
                <div className="right" id="forward_btn" onClick={this.handleForward} >
                <i className="fas fa-fast-forward"></i>
                </div>
                <div className="left" id="backward_btn" onClick={this.handleBackward} >
                <i className="fas fa-fast-backward"></i>
                </div>
                <div className="bottom" id="play_pause" onClick={this.handle_play_pause}>
                <i className="fas fa-pause"></i>
                <i className="fas fa-play"></i>
                </div>
                <div className="solid_circle" onClick={this.handleClick} >

                </div>
            </div>
        </div>
    </div>
  )};
}

export default App;
