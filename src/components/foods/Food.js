import React from 'react';

const Food = ({ id, item, complete, foodClick }) => (
  <h3>
    <li
      style={ complete ? { ...styles.food, ...styles.complete } : styles.food}
      onClick={ () => foodClick(id) }
    >
      { item }  
    </li>
  </h3>
);

const styles = {
  food: { cursor: 'pointer', listStyleType: 'none' },
  complete: { color: '#996a66', textDecoration: 'line-through' }
};

export default Food;