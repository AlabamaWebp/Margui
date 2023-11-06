
import { React, useState } from 'react';
import HoverContainer from '../hover-container/hoverContainer';

const Header = (
    { floor,
        setFloor,
        cabinet,
        setСabinet, }
) => {
    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    let hover = [{
        name: "Этаж",
        items: ["1", "2", "3"],
        text: value1,
        change: (value) => {
            setValue1(value);
        }
    },
    {
        name: "Этаж",
        items: ["1", "2", "3"],
        text: value1,
        change: (value) => {
            setValue1(value);
        }
    },
    {
        name: "Этаж",
        items: ["1", "2", "3"],
        text: value1,
        change: (value) => {
            setValue1(value);
        }
    },
    ]
    return (
        <header className='mainHeader'>
            {hover.map((item, index) =>
                <HoverContainer
                    key={index}
                    text={item.text}
                    items={item.items}
                    onChange={item.change}
                // vars={item}
                />
            )}
        </header>
    )
}
export default Header;