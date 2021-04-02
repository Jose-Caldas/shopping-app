import React, { useEffect, useState } from "react";
import AppContainer from "../../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import Checkbox from "../shared/Checkbox/Checkbox";
import LineChart from "../shared/LineChart/LineChart";
import "./AppStyle";
import { Container, Wrapper } from "./AppStyle";

function App() {
  const [lettuce, setLettuce] = useState(true);
  const [rice, setRice] = useState(false);

  const [healthy, setHealthy] = useState(5);

  const colors = ["#62cbc6", "#00ABAD", " #00858C ", "#006073", "#004d61"];
  // const colors = ["#62CBC6​", "#00ABAD​", "#00858C​", "#006073​", "#004D61​"];:

  useEffect(() => {}, []);
  setTimeout(() => {
    setHealthy(80);
  }, 1000);

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
          right={
            <div>
              Estatísticas:
              <LineChart
                color={colors[0]}
                title="saudável"
                percentage={healthy}
              />
              <LineChart
                color={colors[1]}
                title="não tão saudável assim"
                percentage={healthy}
              />
              <LineChart
                color={colors[2]}
                title="Limpeza"
                percentage={healthy}
              />
              <LineChart
                color={colors[3]}
                title="Outros"
                percentage={healthy}
              />
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
