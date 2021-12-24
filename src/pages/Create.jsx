import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import Login from "./Login";
import Shop from "./Shop";
import '../styles/Create.css'
import {Link} from "react-router-dom";

const Create = () => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const {isAuth, setProducts} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login/>
        )
    }

    function createPost(e) {
        //прерывание - делаем инпут управляемым
        e.preventDefault()
        const newPost = {
            id: id,
            title: title,
            price: price,
        }

        setProducts(prevState => [...prevState, newPost])

        console.log('newPost', newPost)
        alert('Товар добавлен на главную страницу')
        return (
            <Shop/>
        )
    }

    return (<form onSubmit={createPost} className="create">
        <h3 className="create__title">Добавить товар:</h3>
        <label className="create__label">Название товара</label>
        <input className="create__input"
               type="text"
            //забираем поведение инпута
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>
        <label className="create__label">Цена товара</label>
        <input className="create__input"
               type="text"
               required
               value={price}
            // при попытке изменения - передем значение в setTitle
               onChange={(e) => setPrice(e.target.value)}/>
        <label className="create__label">Номер товара</label>
        <input className="create__input"
               type="text"
               required
               value={id}
               onChange={(e) => setId(e.target.value)}/>
        <button className="create__button" type="submit" onSubmit={createPost}>Добавить</button>
        <Link to='/shop'>
            <button className="create__button">Назад</button>
        </Link>
    </form>);
};
export default Create;