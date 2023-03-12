// 세화

import React from "react";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import ItemComponent from "../components/common/ItemComponent";
import { useSelector, useDispatch } from "react-redux";
import { changeLike } from "../store/Data";

export default function Collection({ collectionState }) {
  let dispatch = useDispatch();

  const likeHandler = (i) => {
    dispatch(changeLike(i - 1));
  };

  const likeArr = [];
  collectionState.forEach((v) => v.like && likeArr.push(v));

  return (
    <Container>
      <Title>
        <H1>My collection</H1>
        <Span>{collectionState?.filter((e) => e.like).length} palette</Span>
      </Title>
      <Line></Line>
      <Content>
        {likeArr.map((v, i) => (
          <ItemWrapper key={i}>
            <div>
              <ItemComponent
                color={likeArr[i].color}
                w="220px"
                h="220px"
                style={{ margin: "0 10px" }}
              />
              <Like
                onClick={() => {
                  likeHandler(likeArr[i].id);
                }}
              >
                <BsSuitHeartFill size="20" />
                <div>Like</div>
              </Like>
            </div>
          </ItemWrapper>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 815px;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

const H1 = styled.h1`
  font-size: 18px;
`;

const Span = styled.span`
  color: gray;
  font-size: 13px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
  opacity: 0.1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px auto;
  flex-flow: row wrap;
  gap: 30px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  height: 300px;
`;

const Like = styled.div`
  border-radius: 10px;
  background-color: #eee;
  width: 80px;
  height: 40px;
  margin: 10px 0;
  margin: 10px 0;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
