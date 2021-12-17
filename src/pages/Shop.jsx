import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Shop = () => {
    const {products} = useContext(AppContext)

    return (
        <div className="cards">
            {products.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
    )
};

export default Shop;
