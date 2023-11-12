import React from 'react'
import i204_2 from '../../../../assets/images/204/stand/2.jpg'


export default function c204_info2() {

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
            <img className='moreimage' style={img} src={i204_2} />
            <p>Информация о стенде</p>
            
        </div>
      
    </div>
  )
}
