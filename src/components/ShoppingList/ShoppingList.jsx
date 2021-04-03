import React from "react";
import { Array, Title, Wrapper } from "./ShoppingListStyle";
import Checkbox from "../shared/Checkbox/Checkbox";

function ShoppingList({ title, products, onToggle }) {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products.map((products) => (
          <Checkbox
            key={products.id}
            value={products.checked}
            title={products.name}
            onClick={() =>
              onToggle(products.id, products.checked, products.name)
            }
          />
        ))}
      </Array>
    </Wrapper>
  );
}

export default ShoppingList;
