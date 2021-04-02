import React from "react";
import AppContainer from "../../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import "./AppStyle";
import { Container, Wrapper } from "./AppStyle";

function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={<div>Produtos Disponíveis</div>}
          middle={<div>Sua Lista de Compras</div>}
          right={<div>Estatísticas</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
