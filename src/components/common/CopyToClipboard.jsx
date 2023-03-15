import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const S = {};

const CopyToClipboard = ({ copyData, children, ...props }) => {
  const [isCopy, SetIsCopy] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    SetIsCopy(true);
    setTimeout(() => {
      SetIsCopy(false);
    }, 1000);
  };

  if (!children) {
    return;
  }

  return (
    <S.CopyButton
      onClick={() => {
        handleCopy(copyData);
      }}
      isCopy={isCopy}
      className={props.className}>
      {children}
    </S.CopyButton>
  );
};

const fadeEffect = keyframes`
  0% { opacity: 0;}
  100% {opacity: 1;}
`;

S.CopyButton = styled.button`
  cursor: pointer;

  &:after {
    content: "Copied";
    position: absolute;
    background-color: #000000;
    color: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    display: ${({ isCopy }) => (isCopy ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    animation: ${fadeEffect} 0.5s 2 alternate;
  }
`;

export default React.memo(CopyToClipboard);
