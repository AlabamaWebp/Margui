import React from 'react';

const HoverContainer = (vars) => {
    // console.log("1 " + JSON.stringify(text));
    console.log("2 " + vars.items);
    // console.log("3 " + JSON.stringify(setItem));
    // let setItem1 = setItem
    return (
        <div className="hoverContainer">
            <span>{vars.text}</span>
            <div className="hoverMenu">
                {vars.items.map((item) => (
                    <span onClick={vars.setItem(item)}>{item}</span>
                ))}
            </div>
        </div>
    )
}
export default HoverContainer;