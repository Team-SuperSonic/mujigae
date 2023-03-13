// 시온

import React from "react";
import styled from "styled-components";
import { ItemComponent } from "components/common";

export default function Detail({ color }) {
  return (
    <Container>
      <Content>
        <ItemWrapper>
          <ItemComponent color={color} w="440px" h="440px" />
          <Title>{color}</Title>
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
