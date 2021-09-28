import React from 'react';
import Food from './Food';

const FoodList = ({ items, item, foodClick }) => (
  <div>
    <h2>{item}</h2>
    <ul>
      { items.map( i => <Food key={i.id} {...i} foodClick={foodClick} /> )} 
    </ul>
  </div>
)

export default FoodList;