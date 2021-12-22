import React from 'react';
import "./Card.css"
import {Link} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, price, image} = card

    return (
        <div className="card">
            <img src={image} alt={title + price}/>
            <h3>{title}</h3>
            <p className="price">{price}</p>
            <Link to={`/product/${id}`}>
                <button>Подробнее</button>
            </Link>
        </div>
    )
}

export default Card;
