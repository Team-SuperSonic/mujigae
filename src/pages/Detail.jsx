// 시온

import React, { useRef } from "react";
import styled from "styled-components";

import { Palette } from "components/main";
import { CopyToClipboard, CreatedAt, DownloadPalette } from "components/common";
import { useDummy } from "components/hooks";

export default function Detail({ color }) {
  const dummy = useDummy();
  const ref = useRef();

  return (
    <Container>
      <Content>
        <ItemWrapper>
          <Palette colors={dummy[0].palette} ref={ref}>
            <CopyToClipboard />
          </Palette>
          <Title>
            <DownloadPalette ref={ref} id={dummy[0].id}>
              hihi
            </DownloadPalette>
            <CreatedAt createdAt={dummy[0].createdAt} />
          </Title>
        </ItemWrapper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 60px auto;
  font-size: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 815px;
  margin: 50px auto;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;
