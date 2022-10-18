import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1")
        const data = await res.json();
        setProduct(data);
      } catch {
        console.log("Se a producido un error en el fetch");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Estamos cargando tu página...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};



