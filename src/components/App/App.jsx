import React, { useEffect, useState } from "react";
import AppContainer from "../../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import LineChart from "../shared/LineChart/LineChart";
import ShoppingList from "../ShoppingList/ShoppingList";
import "./AppStyle";
import { Container, Wrapper } from "./AppStyle";
import productsMock from "../../mocks/products.json";

function App() {
  const [products, setProducts] = useState(productsMock.products);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const colors = ["#62cbc6", "#00ABAD", " #00858C ", "#006073", "#004d61"];

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  function handleToggle(id, checked, name) {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              title="sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />
          }
          right={
            <div>
              Estatísticas:
              <LineChart color={colors[0]} title="saudável" percentage={80} />
              <LineChart
                color={colors[1]}
                title="não tão saudável assim"
                percentage={50}
              />
              <LineChart color={colors[2]} title="Limpeza" percentage={20} />
              <LineChart color={colors[3]} title="Outros" percentage={30} />
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
