import React from 'react'

export default function one_image({image}) {
  return (
    <div className='modalPnlm'>
    <div className='container only_image'>
      <img className='only_image' src={image} width={"100%"} />
    </div>
  </div>
  )
}
