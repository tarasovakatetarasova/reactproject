import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {AppContext} from "../../App";

const Product = () => {
    const {products} = useContext(AppContext)
    const {id} = useParams()

    const currentProduct = products.find((item) => item.id === Number(id))

    if (!currentProduct) {
        return (
            <div>
                <h1>Not found</h1>
                <Link to="/shop">Go to Shop</Link>
            </div>
        )
    }

    const {title, price, image, description} = currentProduct


    return (
        <div>
            <img src={image} alt={title + price}/>
            <h3>{title}</h3>
            <p className="price">{price}</p>
            <p>{description}</p>
            <div>Parameters</div>
            <ul>
                <li>размер</li>
                <li>гарантия</li>
                <li>цвет</li>
            </ul>
            <Link to={`/order/${id}`}>
                <button>Оставить заявку</button>
            </Link>
        </div>
    );
};

export default Product;
