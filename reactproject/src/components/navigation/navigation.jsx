import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Navigation = () => {
    let navigate = useNavigate();
    return (
        <header>
            <nav>
                <img className="logo" src={'https://icon-library.com/images/rock-icon/rock-icon-2.jpg'} />
                <ol>
                    <li><Link to="/" >Главная</Link></li>
                    <li><Link to="/shop" >Магазин</Link></li>
                    <li><Link to="/contacts" >О нас</Link></li>
                </ol>
                <button className="auth-button" onClick={()=>navigate('/login')}>Войти</button>
            </nav>
        </header>
    );
};

export default Navigation;