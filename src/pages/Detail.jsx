// 시온

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { Palette } from "components/main";
import { useParams } from "react-router-dom";

import { CopyToClipboard, CreatedAt, DownloadPalette } from "components/common";

export default function Detail({ items, setItems }) {
  const ref = useRef();
  let { idx } = useParams();

  // const reloadHandler = () => {
  //   let reload = JSON.parse(localStorage.getItem("dummy"))[idx];
  //   setItems(reload);
  //   console.log(items);
  // };

  // useEffect(() => {
  //   reloadHandler();
  // }, []);

  return (
    <Container>
      <Content>
        <ItemWrapper>
          <Palette colors={items[idx].palette} w="492px" h="492px" ref={ref}>
            <CopyToClipboard />
          </Palette>
          <Title>
            <DownloadPalette ref={ref} id={items[idx].id}>
              hihi
            </DownloadPalette>
            <CreatedAt createdAt={items[idx].createdAt} />
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
