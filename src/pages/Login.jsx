import React, {useContext, useState} from 'react';
import {users} from "../database/users";
import {AppContext} from "../App";

const Login = () => {
    const {isAuth, setIsAuth, products} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    if (isAuth == false) {
        function submitOrder(e) {
            e.preventDefault()
            console.log("login", login)
            console.log("password", password)
            const currentUser = users.find(item => item.login === login)

            if (!currentUser) {
                return alert('no such user!')
            }
            if (currentUser.password !== password) {
                return alert('password is not correct!')
            }

            // localStorage.setItem('order', JSON.stringify(order))
            alert('Вы авторизованы!')
            setLogin('')
            setPassword('')
            setIsAuth(true)

        }

        return (
            <form className="order" onSubmit={submitOrder}>
                <h1>Оставьте свои данные</h1>
                <input required
                       type="text"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}
                       placeholder="login"
                />
                <input
                    required
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        )
    }

    const order = localStorage.getItem('order')
    if (!order) {
        return (
            <div>
                <h1>Заявок нет!</h1>
            </div>
        )
    }

    const {name, phone, productId} = JSON.parse(order)
    const product = products.find(item => item.id == productId)

    return (
        <div>
            <h2>Имя: {name}</h2>
            <p>phone: {phone}</p>
            <p>productId: {productId}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default Login;
