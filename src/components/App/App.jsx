import React from "react";
import AppContainer from "../../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import LineChart from "../shared/LineChart/LineChart";
import ShoppingList from "../ShoppingList/ShoppingList";
import "./AppStyle";
import { Container, Wrapper } from "./AppStyle";
import extractPercentage from "../../utils/extractPercentage";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectSelectedProducts,
  selectTotalPrice,
} from "../../store/Products/ProcuctsSelector";
import { toggleProduct } from "../../store/Products/ProductsActions";
// import Calculator from "../../Calculator";

function App() {
  const dispatch = useDispatch();

  const colors = ["#62cbc6", "#00ABAD", " #00858C ", "#006073", "#004d61"];

  const products = useSelector(selectAllProducts);

  const selectedProducts = useSelector(selectSelectedProducts);

  const totalPrice = useSelector(selectTotalPrice);

  function handleToggle(id) {
    dispatch(toggleProduct(id));
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
              {/* <Calculator /> */}
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
