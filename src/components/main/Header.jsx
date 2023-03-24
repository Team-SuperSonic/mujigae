import React from "react";
import styled from "styled-components";

const S = {};

const Header = () => {
  return (
    <S.Header>
      <S.Left>mujigae</S.Left>
    </S.Header>
  );
};

S.Header = styled.div`
  width: 100%;
  height: 58px;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 1;

  &:after {
    content: "";
    display: block;
    position: relative;
    top: 20px;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 50%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0.1;
  }
`;

S.Left = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export default Header;
