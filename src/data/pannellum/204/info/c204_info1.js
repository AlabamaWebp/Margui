import React from 'react'
import i204_1 from '../../../../assets/images/204/stand/1.jpg'
// import i116_2 from "../../../../assets/images/217/stands/3.jpg"
// import i116_3 from "../../../../assets/images/217/stands/4.jpg"
// @import "../../../../index.scss";


export default function c204_info1() {

    // const [name_stand, setData] = useState();

    const name_stand = 'Стенд';

    const contain = {
        display: 'flex',
        flexDirection: 'row',
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
        {/* <h2>{name_stand}</h2> */}
        <div className='container' style={contain}>
            <img className='moreimage' style={img} src={i204_1} />
            <p>Информация о стенде</p>
            
        </div>
      
    </div>
  )
}
