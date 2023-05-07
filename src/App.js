import React from 'react'
function Square({data}) { //this data is a props 
  return <button className="square">{data}</button>;
}
function board () {
  return (
    <div>
      <div className="board-row">
        <Square data="1"/>
        <Square data="2"/>
        <Square data="3"/>
      </div>
      <div className="board-row">
        <Square data="4"/>
        <Square data="5"/>
        <Square data="6"/>
      </div>
      <div className="board-row">
        <Square data="7"/>
        <Square data="8"/>
        <Square data="9"/>
      </div>
    </div>
  )
}

export default board