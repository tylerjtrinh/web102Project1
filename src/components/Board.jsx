import React from 'react';
import Restaurants from '../Restaurants.json'
import Card from './Card'

const Board = () => {
  return (
    <div className='Board'>
        {Restaurants.map((restaurant, index) => (
            <Card key={index} image={restaurant.image} name={restaurant.name} type={restaurant.type} link={restaurant.link} />
        ))}
    </div>
  );
};

export default Board;
