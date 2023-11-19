import React from 'react'
import i217_21 from "../../../../assets/images/217/stands/11.jpg"
import i217_22 from "../../../../assets/images/217/stands/12.jpg"

export default function С217_info() {
  return (
    <div className='modalPnlm'>
      {/* <h2>Стенд</h2> */}
      <div className='container'>
        <div className='left'>
          <img className='stand_image' src={i217_21} width={"100%"}/>
          <img className='stand_image' src={i217_22} width={"100%"}/>
        </div>
        <div className='right'>
          <p>Благодаря усилиям Л.А. Жуковой, одновременно с развитием музея, стало возможным формирование и развитие новой для Республики Марий Эл научной школы как одного из центров широко известного в России популяционно-онтогенетического направления. Его основоположниками были выдающиеся московские фитоценологи Т.А. Работнов – ученик Л.Г. Раменского и А.А. Уранов – ученик В.В. Алехина.</p>
        </div>

      </div>

    </div>
  )
}
