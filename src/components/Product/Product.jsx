import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {AppContext} from "../../App";
import '../Product/Product.css'

const Product = () => {
    const {products} = useContext(AppContext)
    const {id} = useParams()

    const currentProduct = products.find((item) => item.id === Number(id))

    if (!currentProduct) {
        return (
            <div>
                <h1>Такого товара не существует!</h1>
                <Link to="/shop">Вернуться в магазин</Link>
            </div>
        )
    }

    const {title, price, image, description, warranty, color, type} = currentProduct
    return (
        <div>
            <img src={image} alt={title + price}/>
            <h2>{title}</h2>
            <p className="price">{price}</p>
            <p>{description}</p>
            <h3>Характеристики:</h3>
            <ul>
                <li>Тип гитары: {type}</li>
                <li>Цвет: {color}</li>
                <li>Гарантия: {warranty}</li>
            </ul>
            <Link to={`/shop`}>
                <button>Назад</button>
            </Link>
            <Link to={`/order/${id}`}>
                <button>Оставить заявку</button>
            </Link>

        </div>
    );
};

export default Product;
