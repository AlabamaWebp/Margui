
import { React, useState } from 'react';
import HoverContainer from '../hover-container/hoverContainer';

const Header = (
    { floor,
        setFloor,
        cabinet,
        setСabinet, }
) => {
    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState("1");
    const [value3, setValue3] = useState("1");
    let hover = [{
        name: "Корпус",
        items: ["1", "2", "3"],
        text: value1,
        change: (value) => {
            setValue1(value);
        }
    },
    {
        name: "Этаж",
        items: ["1", "2", "3"],
        text: value2,
        change: (value) => {
            setValue2(value);
        }
    },
    {
        name: "Кабинет",
        items: ["1", "2", "3"],
        text: value3,
        change: (value) => {
            setValue3(value);
        }
    },
    ]
    return (
        <header className='mainHeader'>
            {hover.map((item, index) =>
                <div key={index} className='hover'>
                    <span className='name'>{item.name}</span>
                    <HoverContainer
                        text={item.text}
                        items={item.items}
                        onChange={item.change}
                    // vars={item}
                    />
                </div>
            )}
        </header>
    )
}
export default Header;