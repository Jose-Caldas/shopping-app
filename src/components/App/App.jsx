import React, { useEffect, useState } from "react";
import AppContainer from "../../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import LineChart from "../shared/LineChart/LineChart";
import ShoppingList from "../ShoppingList/ShoppingList";
import "./AppStyle";
import { Container, Wrapper } from "./AppStyle";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";

function App() {
  const [products, setProducts] = useState(productsMock.products);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const colors = ["#62cbc6", "#00ABAD", " #00858C ", "#006073", "#004d61"];

  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    const total = selectedProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [selectedProducts]);

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
              <LineChart
                color={colors[0]}
                title="saudável"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
              />
              <LineChart
                color={colors[1]}
                title="não tão saudável assim"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
              />
              <LineChart
                color={colors[2]}
                title="Limpeza"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
              />
              <LineChart
                color={colors[3]}
                title="Outros"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
              />
              <div style={{ marginTop: 12 }}>
                <h2 style={{ fontWeight: 400, fontSize: 12, color: "#00364A" }}>
                  previsão de gastos
                </h2>
                <div style={{ fontSize: 24 }}>
                  {totalPrice.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
