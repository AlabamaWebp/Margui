import React from 'react'
import i217_21 from '../../../../assets/images/217/stands/2.jpg'
import i217_23 from "../../../../assets/images/217/stands/3.jpg"
import i217_22 from "../../../../assets/images/217/stands/4.jpg"
// @import "../../../../index.scss";


export default function c217_info2() {

    // const [name_stand, setData] = useState();

    const name_stand = 'Стенд';

    const contain = {
        display: 'flex',
        flexDirection: 'column',
        margin: '3px',
        boxShadow: '1px 2px 9px black',
    }
    const img = {
        maxheight: '130px',
        // maxwight: 'auto'
    }

  return (
    <div className='modalPnlm' style={contain}>
        <h2>Стенд</h2>
        <div className='container' style={contain}>
            <img className='moreimage' style={img} src={i217_21} />
            <img className='moreimage' style={img} src={i217_22} />
            <img className='moreimage' style={img} src={i217_23} />
            <p>Информация о стенде</p>
            
        </div>
      
    </div>
  )
}
