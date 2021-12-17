import React from 'react';
import "./cards.css"
import {Link, useNavigate} from "react-router-dom";

const Cards = ({title, price}) => {
    let navigate = useNavigate();

    return (
        <div className="cards">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfEHwGxFGAlyy5F4UMqaizT3zTbyXzk68Mg&usqp=CAU'}/>
            <h3>{title}</h3>
            <p className="price">{price}</p>
           <button onClick={()=>navigate('/')}>КУПИТЬ</button>
        </div>
    )
}

export default Cards;