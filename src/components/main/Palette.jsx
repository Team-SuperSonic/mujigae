import React, { forwardRef } from "react";
import styled from "styled-components";
import { Color, CopyToClipboard } from "components/common";

const S = {};

const Palette = ({ colors, children }, ref) => {
  try {
    React.Children.only(children);
  } catch (error) {
    console.error(error);
  }

  return (
    <S.PaletteLayout ref={ref}>
      {colors?.map((color) => (
        <Color key={color.id} colorCode={color.colorCode}>
          {children?.type === CopyToClipboard && (
            <CopyToClipboard copyData={color.colorCode.replace(/^#/, "").toUpperCase()}>
              {color.colorCode.toUpperCase()}
            </CopyToClipboard>
          )}
        </Color>
      ))}
    </S.PaletteLayout>
  );
};

S.PaletteLayout = styled.div`
  width: 492px;
  height: 492px;
  border-radius: 10px;
  overflow: hidden;

  & > div:hover {
    & > button {
      opacity: 1;
    }
  }

  & button {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

export default React.memo(forwardRef(Palette));
