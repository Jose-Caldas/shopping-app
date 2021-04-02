import React, { useState } from "react";
import AppContainer from "../../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import Checkbox from "../shared/Checkbox";
import "./AppStyle";
import { Container, Wrapper } from "./AppStyle";

function App() {
  const [lettuce, setLettuce] = useState(true);
  const [rice, setRice] = useState(false);

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              Produtos Disponíveis:
              <Checkbox
                title="Alface"
                value={lettuce}
                onClick={() => {
                  setLettuce(!lettuce);
                }}
              />
              <Checkbox
                title="Arroz"
                value={rice}
                onClick={() => {
                  setRice(!rice);
                }}
              />
            </div>
          }
          middle={<div>Sua Lista de Compras:</div>}
          right={<div>Estatísticas:</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
