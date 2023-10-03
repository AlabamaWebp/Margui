import { Link, useLocation} from 'react-router-dom'
// import { Pannellum } from "pannellum-react";
import '../App.css';
import React from 'react';

const Navigator = () => {
    const location = useLocation();
    const navIndex = [
        {
            label: "Museum",
            to: "/museum"
        },
        {
            label: "Classroom_1",
            to: "/classroom_1"
        },
        {
            label: "Classroom_2",
            to: "/classroom_2"
        },
        {
            label: "Not Page",
            to: "/xyi_tebe"
        }
    ]

    return(
        <div className="nav">
            <div className="title">
                <h1>Быстрая навигация</h1>
                <span className='closeButton'>x</span>
                {/* закрыть */}
            </div>
            
            

            <nav>
                {navIndex.map((item) => 
                <>
                    <ul>
                        <li>
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    </ul>
                </>)}
            </nav>
        </div>
    )
}

export default Navigator;