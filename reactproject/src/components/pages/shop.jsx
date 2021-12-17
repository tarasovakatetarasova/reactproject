import React from 'react';
import Cards from "../cards/cards";
import navigation from "../navigation/navigation";

const Shop = () => {
    const card = [
            {
                id: 1,
                title:'Обыкновенная',
                price: 5000,
            },
            {
                id: 2,
                title:'Рокерская',
                price: 10000,
            },
            {
                id: 3,
                title:'Природная',
                price: 15000,
            },
            {
                id: 4,
                title:'Черная, как твоя душа',
                price: 20000,
            },
            {
                id: 5,
                title:'Вон-та красненькая',
                price: 50000,
            }
        ]
    return (
        <div className="card-container">
            {card.map(({id,title, price}) => {
                return (
                    <Cards key={id} title={title} price={price}/>
                )
            })}
        </div>
        )
};

export default Shop;