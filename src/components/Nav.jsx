import React from "react";


export default function Nav()
{
    return (
        <div className="nav">
        {/* <div>this is navbar</div> */}
        <div className="logo">
        <img src="./src/assets/icon.png" className="nav--icon" alt="" />
        <h1 className="nav--logotext">Meme Genrator</h1>
        </div>
        <div className="nav--title">React Course - Project 3</div>
        </div>
    )
}