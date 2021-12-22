import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {Link, useNavigate} from "react-router-dom";
import Login from "../components/Login/Login";

const Create = () => {
    let navigate = useNavigate();
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const {isAuth, setProducts} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login/>
        )}

        function createPost(e) {
            //прерывание - делаем инпут управляемым
            e.preventDefault()
            const newPost = {
                id: id, title: title, price: price, image: image
            }

            setProducts(prevState => [...prevState, newPost])

            console.log('newPost', newPost)
            return navigate('/')
        }

        return (<form onSubmit={createPost} className="create__post">
            <input type="text"
                //забираем поведение инпута
                   required
                   value={id}
                   onChange={(e) => setId(e.target.value)}/>
            <input type="text"
                   required
                   value={title}
                // при попытке изменения - передем значение в setTitle
                   onChange={(e) => setTitle(e.target.value)}/>
            <input type="text"
                   required
                   value={price}
                   onChange={(e) => setPrice(e.target.value)}/>
            <input type="file"
                   required
                   value={image}
                   onChange={(e) => setImage(e.target.value)}/>

            <button type="submit">OK</button>
            <Link to="/login">
                <button type="submit">Назад</button>
            </Link>

        </form>);
    };
export default Create;