import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {AppContext} from "../App";
import '../styles/Product.css'

const Product = () => {
    const {products} = useContext(AppContext)
    const {id} = useParams()

    const currentProduct = products.find((item) => item.id === Number(id))

    if (!currentProduct) {
        return (
            <div>
                <h1 className="product__title">Такого товара не существует!</h1>
                <Link to="/shop"><button>Вернуться в магазин</button></Link>
            </div>
        )
    }

    const {title, price, image, description, warranty, color, type} = currentProduct
    return (
        <div className="product">
            <img className="product__image" src={image} alt={title + price}/>
            <div className="product__description">
                <h2 className="product__title">{title}</h2>
                <p className="product__price">{price}</p>
                <p className="product__parameter">{description}</p>
                <h3 className="product__title">Характеристики:</h3>
                <ul className="product__parameter">
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
        </div>
    );
};

export default Product;
