import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <h4 className="footer__title">MUZICALITY</h4>
            <ul className="footer__links">
                <Link to='/'>
                    <li>На главную</li>
                </Link>
                <Link to='/contacts'>
                    <li>О нас</li>
                </Link>
                <Link to='/login'>
                    <li>Авторизоваться</li>
                </Link>
            </ul>
            <p className="footer__info">2021</p>
            <p className="footer__info">ALL RIGHTS RESERVED</p>
        </footer>
    );
};

export default Footer;