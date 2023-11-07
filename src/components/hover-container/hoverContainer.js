import React from 'react';

const HoverContainer = (vars) => {
    const change = (event) => {
        vars.onChange(event.target.innerHTML)
    }
    return (
        <div className='hovverTemplate'>
            <div className="hoverContainer">
                <span className='htext'>{vars.text}</span>
                <div className="hoverMenu">
                    {vars.items.map((item, index) => (
                        <span key={index} className='hoverMenuItem' onClick={change}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HoverContainer;