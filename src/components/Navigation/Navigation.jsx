import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Nagiation.css'
import {AppContext} from "../../App";

const privateLinks = [{
    to: "/", text: 'Магазин'
},
    {
    to: "/create", text: 'Добавить товар'
},
    {
    to: "/private", text: 'Заявки'
}]

const publicLinks = [{
    to: "/", text: 'Магазин'
},
    {
    to: "/contacts", text: 'О нас'
}]

const Navigation = () => {
    let navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AppContext)

    const links = isAuth ? privateLinks : publicLinks

    return (<header>
            <nav className="navigation">
                <Link to="/"><img className="logo" src={'https://icon-library.com/images/rock-icon/rock-icon-2.jpg'}
                                  onClick={() => navigate('/')}/></Link>
                <ul className="navigation__links">
                    {links.map(link => {
                        return (<li key={link.to}>
                                <Link to={link.to}>{link.text}</Link>
                            </li>)
                    })}
                </ul>
                {!isAuth && <button className="auth-button" onClick={() => navigate('/login')}>Войти</button>}
                {isAuth && <button className="auth-button" onClick={() => setIsAuth(false)}>Выйти</button>}
            </nav>
        </header>);
};

export default Navigation;
