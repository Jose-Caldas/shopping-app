import React from "react";
import { Array, Title, Wrapper } from "./ShoppingListStyle";
import Checkbox from "../shared/Checkbox/Checkbox";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectSelectedProducts,
} from "../../store/Products/ProcuctsSelector";

function ShoppingList({ title, onToggle, displayOnlySelectedProducts }) {
  const products = useSelector(
    displayOnlySelectedProducts ? selectSelectedProducts : selectAllProducts
  );

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
