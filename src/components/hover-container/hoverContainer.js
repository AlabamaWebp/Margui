import React from 'react';

const HoverContainer = (vars) => {
    const change = (event) => {
        vars.onChange(event.target.innerHTML)
    }
    return (
        <div className='hovverTemplate'>
            <div className="hoverContainer">
                <span>{vars.text}</span>
            </div>
            <div className="hoverMenu">
                {vars.items.map((item, index) => (
                    <span key={index} className='hoverMenuItem' onClick={change}>{item}</span>
                ))}
            </div>
        </div>
    )
}
export default HoverContainer;