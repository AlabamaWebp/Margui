import React from 'react'
import i217_1 from "../../../../../assets/images/217/stands/IMG_20231109_151632.jpg"
import i217_2 from "../../../../../assets/images/217/stands/IMG_20231109_151637.jpg"
import i217_3 from "../../../../../assets/images/217/stands/IMG_20231109_151641.jpg"

export default function c217_info_1_6() {
  const imgstyle = {
    // width: "300px",
    // height: "500px"
    
  }

  return (
    <div className='modalPnlm'>
      <img src={i217_1}
      // style={imgstyle}
      />
      <img src={i217_2}
      // style={imgstyle}
      />
      <img src={i217_3}
      // style={imgstyle}
      />
      <div className='mtext'>
        <h1>test</h1>
        
      </div>
    </div>
  )
}
