import React from 'react';
import Item from './Item';

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{titulo}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {productos.map((prod) => (
          <div className="m-2" key={prod.id}>
            <Item producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
