import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Link, useNavigate} from "react-router-dom";
import Login from "../components/Login/Login";

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
                <div className="user__order">
                    <h1>Заявок нет!</h1>
                </div>
            )
        }

        const {name, phone, productId} = JSON.parse(order)
        const product = products.find(item => item.id == productId)

        return (
            <div className="user__order">
                <h2>Имя: {name}</h2>
                <h3>phone: {phone}</h3>
                <h3>productId: {productId}</h3>
                <h3>{product.price}</h3>
                <Link to="/login">
                    <button type="submit">Назад</button>
                </Link>

            </div>
        );
    };
export default Private;