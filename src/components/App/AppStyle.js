import styled from "styled-components";
import bg from "../../assets/bg.svg";

export const Wrapper = styled.div`
  height: 100vh;

  background: #f8f5ec;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #ffffff;
  width: 734px;
  height: 574px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;
