import React from 'react'
import i217_1 from "../../../../../assets/images/217/stands/IMG_20231109_151540.jpg"
import i217_2 from "../../../../../assets/images/217/stands/IMG_20231109_151542.jpg"

export default function c217_info_1_1() {
  const imgstyle = {
    width: "300px",
    height: "500px"
  }
  return (
    <div className='modalPnlm'>
      <img src={i217_1}
      // style={imgstyle}
      />
      <img src={i217_2}
      // style={imgstyle}
      />
      <div className='mtext'>
        <h1>test</h1>
        
      </div>
    </div>
  )
}
