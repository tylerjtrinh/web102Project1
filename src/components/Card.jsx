import React from 'react';

const Card = ({image, name, type, link}) => {
  return (
    <div className='Card'>
        <img src={image} />
        <h3>{name}</h3>
        <h5>{type}</h5>
        <a href={link} target="_blank">View Menu</a>
    </div>
  );
};

export default Card;
