import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Nagiation.css'
import {AppContext} from "../../App";

const Navigation = () => {
    let navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AppContext)
    return (
        <header>
            <nav className="navigation">
                <img className="logo" src={'https://icon-library.com/images/rock-icon/rock-icon-2.jpg'}
                     onClick={() => navigate('/')}/>
                <ul className="navigation__links">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/shop">Магазин</Link></li>
                    <li><Link to="/contacts">О нас</Link></li>
                </ul>
                {!isAuth && <button className="auth-button" onClick={() => navigate('/login')}>Войти</button>}
                {isAuth && <button className="auth-button" onClick={() => setIsAuth(false)}>Выйти</button>}

            </nav>
        </header>
    );
};

export default Navigation;
