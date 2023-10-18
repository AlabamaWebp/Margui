import React from 'react';
import HoverContainer from '../hover-container/hoverContainer';

const Header = (
    floor,
    setFloor,
    cabinet,
    setСabinet,
) => {
    let text1 = "2"
    let items1 = ["1", "1", "1"];
    function setItem1(d) {
        console.log(d);
    }
    return (
        <header className='mainHeader'>
            <HoverContainer
                text = {text1}
                items = {items1}
                setItem = {setItem1}/>
        </header>
    )
}
export default Header;