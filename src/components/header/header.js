
import { React, useState } from 'react';
import HoverContainer from '../hover-container/hoverContainer';
import cabs1 from '../data/header/cabs';

const Header = (
    {
        // floor,
        // setFloor,
        cabinet,
        setСabinet, }
) => {
    const [value1, setValue1] = useState("Музей");
    let hover = [
        {
            name: "Кабинет",
            items: cabs1,
            text: value1,
            change: (value) => {
                setValue1(value);
                setСabinet(value);
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

// export const cab = ["Музей", "204 каб.", "208 каб.", "116 каб.", "114 каб."];

// Пример обьекта hover

// {
//     name: "Корпус",
//     items: ["1", "2", "3"],
//     text: value1,
//     change: (value) => {
//         setValue1(value);
//     }
// },
// {
//     name: "Этаж",
//     items: ["1", "2", "3"],
//     text: value2,
//     change: (value) => {
//         setValue2(value);
//     }
// },
// {
//     name: "Кабинет",
//     items: ["1", "2", "3"],
//     text: value3,
//     change: (value) => {
//         setValue3(value);
//     }
// },