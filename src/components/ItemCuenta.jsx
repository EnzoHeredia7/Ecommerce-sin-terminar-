import React from 'react';

const ItemCuenta = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
 
  return (
    <div className="mt-3">
      <div className="item-count d-flex align-items-center">
        <button className="btn btn-outline-secondary" onClick={handleRestar}>-</button>
        <p className="mx-3 mb-0">{cantidad}</p>
        <button className="btn btn-outline-secondary" onClick={handleSumar}>+</button>
      </div>
      <button className="btn btn-primary mt-3 w-100" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCuenta;
