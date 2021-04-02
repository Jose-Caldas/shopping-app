import React from "react";
import { Main } from "./AppContainerStyle";

function AppContainer({ left, middle, right }) {
  return (
    <Main>
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </Main>
  );
}

export default AppContainer;
