import React from "react";
import { Indicator, Wrapper } from "./CheckboxStyle";

function Checkbox({ value, title, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Indicator value={value} />
      {title}
    </Wrapper>
  );
}

export default Checkbox;
