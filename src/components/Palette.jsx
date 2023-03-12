import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import CopyToClipboard from "./CopyToClipboard";

const Palette = ({ data }, ref) => {
  return (
    <StyledWrapper ref={ref}>
      {data?.palette?.map((item) => (
        <StyledPlace key={item.id + "place"} bgColor={item.code}>
          <CopyToClipboard copyData={item.code}>{item.code}</CopyToClipboard>
        </StyledPlace>
      ))}
    </StyledWrapper>
  );
};

const StyledFadeOut = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const StyledWrapper = styled.div`
  width: 492px;
  height: 492px;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledPlace = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  background-color: ${({ bgColor }) => bgColor};

  &:hover > button {
    opacity: 1;
  }

  & > button {
    cursor: pointer;
    padding: 3px 6px;
    position: absolute;
    border-radius: 0 6px 0 0;
    opacity: 0;
    bottom: 0;
    transition: opacity ease-in-out 0.2s;
    background-color: rgba(0, 0, 0, 0.1);
    outline: none;
    border: none;
    color: #ffffff;

    &:after {
      content: "Copied";
      position: absolute;
      background-color: #000000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      animation: ${StyledFadeOut} 2s;
    }

    &:after:active {
      opacity: 1;
    }
  }
`;

export default React.memo(forwardRef(Palette));
