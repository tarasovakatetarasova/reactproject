import React, {useContext, useState} from 'react';
import {AppContext} from "../../App";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css"
import {users} from "../../data/users";
import {getUsers} from "../../API/index";

const Login = () => {

    // let navigate = useNavigate()
    const {isAuth, setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    // запрос данных с бэкэнда идет через асинхронную функцию
    // async function submitOrder(e) {
    //     e.preventDefault()
    //
    //     //вызываем функцию бэка
    //     const users = await getUsers()
    //
    //     //работаем с полученными данными

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
                <h1>Авторизация</h1>
                <input className="form__input" required
                       type="text"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}
                       placeholder="login"
                />
                <input className="form__input"
                       type="password"
                       required
                       placeholder="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button className="form__button" type="submit">Login</button>
            </form>
        )
    }

    return (
        // navigate('/private')
        <div>
            <Link to='/create'>
                <button>Create</button>
            </Link>
            <Link to='/private'>
                <button>Orders</button>
            </Link>
        </div>
    )
};

export default Login;