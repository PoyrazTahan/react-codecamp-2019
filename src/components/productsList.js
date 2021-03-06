import React from "react";
import Product from "./product";

function ProductsList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.product.map(p => (
          <Product key={p.id} name={p.name} description={p.description} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
