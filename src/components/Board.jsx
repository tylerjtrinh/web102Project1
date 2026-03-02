import React from 'react';
import Card from './Card'

import padakImage from '../assets/padak.png';
const Board = () => {
  return (
    <div className='Board'>
        <Card image={padakImage} name='Flying Chicken & Padak' type='Korean' link='https://www.flyingchickenpadak.com'/>
    </div>
  );
};

export default Board;
