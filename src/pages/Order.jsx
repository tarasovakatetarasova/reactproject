import React, {useState} from 'react';
import '../styles/Order.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import Shop from "./Shop";

const Order = () => {
    const {productId} = useParams()

    const [phone, setPhone] = useState('+7')
    const [name, setName] = useState('')

    function submitOrder(e) {
        e.preventDefault()
        const order = {
            phone: phone,
            name: name,
            productId: productId
        }

        localStorage.setItem('order', JSON.stringify(order))
        alert('Заявка отправлена!')
        setPhone('')
        setName('')
        return <Shop/>
    }

    return (
        <form className="form" onSubmit={submitOrder}>
            <h1 className="form__title">Оставьте свои данные</h1>
            <input className="form__input" required
                   type="text"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="+7"
            />
            <input className="form__input"
                   required
                   type="text"
                   placeholder="Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
            <button className="form__button"
                    type="submit">Оставить заявку
            </button>
            <Link to='/shop'>
                <button className="form__button"
                        type="submit">Назад
                </button>
            </Link>
        </form>
    );
};

export default Order;
