import React from "react";
import ItemCount from "../../Components/ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>{product.price}</h2>
      <ItemCount stock={4} initial={1}/>
    </div>
  );
};

export default ItemDetail;
