import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Link, useNavigate} from "react-router-dom";
import Login from "./Login";
import '../styles/Private.css'

const Private = () => {
    let navigate = useNavigate()
    const {isAuth} = useContext(AppContext)
    const {products} = useContext(AppContext)
    const order = localStorage.getItem('order')

    if (!isAuth) {
        return (
            <Login/>
        )}

        if (!order) {
            return (
                <div className="empty">
                    <h1>Заявок нет!</h1>
                    <Link to="/login">
                        <button type="submit">Назад</button>
                    </Link>
                </div>
            )
        }

        const {name, phone, productId} = JSON.parse(order)
        const product = products.find(item => item.id == productId)

        return (
            <div className="order">
                <h2 className="order__title">ЗАЯВКА</h2>
                <h3 className="order__user">Имя: {name}</h3>
                <h4 className="order__user">Номер телефона: {phone}</h4>
                <h4 className="order__info">Номер товара: {productId}</h4>
                <h4 className="order__info">Цена: {product.price}</h4>
            </div>
        );
    };
export default Private;