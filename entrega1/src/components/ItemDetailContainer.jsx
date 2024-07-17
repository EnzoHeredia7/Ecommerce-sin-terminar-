import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetalles from "./ItemDetalles";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error("Error fetching item:", error);
            });
    }, [id]);

    return (
        <div>
            {item ? <ItemDetalles item={item} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;
