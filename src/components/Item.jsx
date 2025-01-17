import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="card h-100" style={{ width: '18rem' }}>
      <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text">Precio: ${producto.precio}</p>
        <p className="card-text">Categoría: {producto.categoria}</p>
        <Link to={`/item/${producto.id}`} className="btn btn-primary mt-auto">Ver Más</Link>
      </div>
    </div>
  );
};

export default Item;