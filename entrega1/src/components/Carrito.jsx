import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">{prod.titulo}</h3>
            <p className="card-text">Precio unit: ${prod.precio}</p>
            <p className="card-text">Precio total: ${prod.precio * prod.cantidad}</p>
            <p className="card-text">Cant: {prod.cantidad}</p>
          </div>
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2 className="text-center mt-4">Precio total: ${precioTotal()}</h2>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-danger" onClick={handleVaciar}>Vaciar</button>
          </div>
        </>
      ) : (
        <h2 className="text-center mt-4">El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;
