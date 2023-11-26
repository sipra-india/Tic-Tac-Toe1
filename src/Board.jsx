import React from "react";


function Square({val}){
  return <button> {val}</button>
}

export function Board(){
  return <div>
  <div className="row one">
    <Square val="1"/>
    <Square val="1"/>
    <Square val="1"/>
  </div>
  <div className="row two">
    <Square val="1"/>
    <Square val="1"/>
    <Square val="1"/>
  </div>
  <div className="row three">
    <Square val="1"/>
    <Square val="1"/>
    <Square val="1"/>
  </div>  
  </div>
}