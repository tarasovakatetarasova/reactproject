import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {useNavigate} from "react-router-dom";

const Create = () => {
    let navigate = useNavigate();
    const [input, setInput] = useState('')
    const {isAuth, setProducts} = useContext(AppContext)
    if (!isAuth) {
        return navigate('/login')
    }

    function createPost(e) {
        e.preventDefault()
        // const newPost = {
        //     id: 1,
        //     title: 'Обыкновенная',
        //     price: 5000,
        //     image:
        // }
        //
        // setProducts(prevState => [...prevState, newPost])

    }

    return (
        <form onSubmit={createPost}>
            <input type="text"/>
            <button type="submit">OK</button>
        </form>
    );
};

export default Create;
