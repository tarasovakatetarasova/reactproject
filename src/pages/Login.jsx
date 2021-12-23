import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import "../styles/FormStyle.css"
import Private from "./Private";
import {users} from "../data/users";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function submitOrder(e) {
        e.preventDefault()
        console.log("login", login)
        console.log("password", password)
        const currentUser = users.find(item => item.login === login)

        if (!currentUser) {
            return alert('Такого пользователя не существует!')
        }
        if (currentUser.password !== password) {
            return alert('Пароль введен некорректно!')
        }

        alert('Вы авторизованы!')
        setLogin('')
        setPassword('')
        setIsAuth(true)
        console.log('currentUser', currentUser)
    }

    if (isAuth == false) {
        return (
            <form className="form" onSubmit={submitOrder}>
                <h1 className="form__title">Авторизация</h1>
                <input className="form__input"
                       required
                       type="text"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}
                       placeholder="Введите логин"
                />
                <input className="form__input"
                       type="password"
                       required
                       placeholder="Введите пароль"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button className="form__button" type="submit">Войти</button>
            </form>
        )
    }

    return (
        <Private />
    )
};

export default Login;