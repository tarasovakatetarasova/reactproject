import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {useNavigate} from "react-router-dom";
import Login from "./Login";
import Shop from "./Shop";
import '../styles/FormStyle.css'

const Create = () => {
    let navigate = useNavigate();
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const {isAuth, setProducts} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login/>
        )}

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
            return (
                <Shop />
            )
        }

        return (<form onSubmit={createPost} className="form">
            <h3 className="form__title">Добавить товар:</h3>
            <label className="form__label">Название товара</label>
            <input className="form__input"
                   type="text"
                //забираем поведение инпута
                   required
                   value={title}
                   onChange={(e) => setId(e.target.value)}/>
            <label className="form__label">Цена товара</label>
            <input className="form__input"
                   type="text"
                   required
                   value={price}
                // при попытке изменения - передем значение в setTitle
                   onChange={(e) => setTitle(e.target.value)}/>
            <label className="form__label">Номер товара</label>
            <input className="form__input"
                   type="text"
                   required
                   value={id}
                   onChange={(e) => setPrice(e.target.value)}/>
            <button className="form__button" type="submit" onSubmit={createPost}>OK</button>

        </form>);
    };
export default Create;