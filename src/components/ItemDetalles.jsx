import React, { useState } from 'react';
import ItemCuenta from './ItemCuenta';

const ItemDetalles = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    console.log({ ...item, cantidad });
  };

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.imagen} className="img-fluid rounded-start" alt={item.titulo} />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h3 className="card-title">{item.titulo}</h3>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text"><small className="text-muted">Categoría: {item.categoria}</small></p>
                <p className="card-text"><strong>${item.precio}</strong></p>
              </div>
              <ItemCuenta
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={handleAgregar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetalles;
