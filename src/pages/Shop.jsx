import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Shop = () => {
    const {products, setProducts} = useContext(AppContext)

    return (
        <>
            <h1 className="title">MUZICALITY - МАГАЗИН ПРО МУЗЫКУ</h1>
            <h2 className="title">Товары:</h2>
        <div className="cards">
            {products.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
        </>
    )
};

export default Shop;
