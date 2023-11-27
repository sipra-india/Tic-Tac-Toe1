import React from "react";


function Square({val}){
  return <button> {val}</button>
}

export function Board(){
  return <div>
  <div className="row one">
    <Square val="1"/>
    <Square val="2"/>
    <Square val="3"/>
  </div>
  <div className="row two">
    <Square val="4"/>
    <Square val="5"/>
    <Square val="6"/>
  </div>
  <div className="row three">
    <Square val="7"/>
    <Square val="8"/>
    <Square val="9"/>
  </div>  
  </div>
}