import React from 'react'
import i116_3 from '../../../../assets/images/116/stand/3.jpg'
// @import "../../../../index.scss";


export default function c116_info3() {

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
        {/* <h2>{name_stand}</h2> */}
        <div className='container' style={contain}>
            <img className='moreimage' style={img} src={i116_3} />
            <p>Информация о стенде</p>
            
        </div>
      
    </div>
  )
}