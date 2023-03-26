import React from "react";
import styled from "styled-components";

const S = {};

const Color = ({ colorCode, children, ...props }) => {
  return (
    <S.ColorDiv bgColor={colorCode} className={props.className}>
      {children}
    </S.ColorDiv>
  );
};

S.ColorDiv = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  background-color: ${({ bgColor }) => bgColor};
`;

export { Color };
