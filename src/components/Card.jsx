import React from 'react';

const Card = ({image, name, type, link}) => {
  return (
    <div className='Card'>
        <img src={image} />
        <h5>{name}</h5>
        <h6>{type}</h6>
        <a href={link}>View Menu</a>
    </div>
  );
};

export default Card;
