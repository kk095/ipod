import React from "react";

const Menu = (props)=>{   
     
        return(
            <div className=" screen_div menu">
                <h2>Ipod</h2>
                {props.item===1?
                <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                    <div>
                        Music
                    </div>
                    <div className=" active ">
                    <i className ="fas fa-greater-than"></i>
                    </div>
                </div>
                :
                <div className=" music" >
                    <div>
                        Music
                    </div>
                </div>
                }

                {props.item===2?
                    <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                    <div>
                        coverflow
                    </div>
                    <div className=" active ">
                    <i className ="fas fa-greater-than"></i>
                    </div>
                </div>
                :
                <div className=" music" >
                    <div>
                        CoverFlow
                    </div>
                </div>
                }
                {
                    props.item===3?
                    <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                    <div>
                        Setting
                    </div>
                    <div className=" active ">
                    <i className ="fas fa-greater-than"></i>
                    </div>
                </div>
                :
                    <div className=" music" >
                    <div>
                        Setting
                    </div>
                </div>
                }
               
                {
                    props.item===4?
                    <div className=" music" style={{"backgroundColor":"rgb(80, 211, 255)"}}>
                    <div>
                        Game
                    </div>
                    <div className=" active ">
                    <i className ="fas fa-greater-than"></i>
                    </div>
                </div>
                :
                    <div className=" music" >
                    <div>
                        Game
                    </div>
                </div>
                }
                
            </div>
        )
}

export default Menu;