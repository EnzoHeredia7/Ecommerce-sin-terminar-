import React, { useState, useEffect } from 'react';
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); // Cambia useEffect a useState
    const [ titulo, setTitulo] = useState('Productos');
  const categoria = useParams().categoria;


  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria){
            setProductos(res.filter((prod) => prod.categoria === categoria))
            setTitulo(categoria);
        } else{
        setProductos(res);
        setTitulo("Productos")
        }
      })
      .catch((err) => {
        console.error("Error al pedir datos:", err);
      });
  }, [categoria]);

  console.log(productos);

  return (
    <div>
      <h1><ItemList productos = {productos} titulo={titulo}/></h1>
     
    </div>
  );
};

export default ItemListContainer;
