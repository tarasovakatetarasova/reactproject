import React, {useState} from 'react';
import './Order.css'
import {useNavigate, useParams} from "react-router-dom";

const Order = () => {
    let navigate = useNavigate();
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
        return navigate('/shop')
    }

    return (
        <form className="order" onSubmit={submitOrder}>
            <h1>Оставьте свои данные</h1>
            <input required
                   type="text"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="+7"
            />
            <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Оставить заявку</button>
        </form>
    );
};

export default Order;
