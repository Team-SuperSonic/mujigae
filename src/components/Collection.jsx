import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import ItemComponent from "./ItemComponent";
import { useSelector, useDispatch } from "react-redux";
import { changeLike } from "../store/Data";

export default function Collection() {
  const state = useSelector((state) => state);
  let dispatch = useDispatch();

  const likeHandler = (i) => {
    dispatch(changeLike(i - 1));
  };

  //? [완료] 데이터에서 like가 true로 바뀐 것의 갯수 세기 (배열 반복문 활용)
  let [cnt, setCnt] = useState(0);
  //! const는 재할당 안되어서 안되는건지 ?
  // cnt = "lee";  // error

  // 1) forEach
  state.data.forEach((v) => v.like && cnt++);

  // 2) for of
  // for (var v of state.data) {
  //   if (v.like) {
  //     cnt += 1;
  //   }
  // }

  // 3) for문
  // const len = state.data.length;
  // for (let i = 0; i < len; i++) {
  //   if (state.data[i].like) {
  //     cnt = cnt + 1;
  //   }
  // }

  const likeArr = [];
  state.data.forEach((v) => v.like && likeArr.push(v));

  return (
    <Container>
      <Title>
        <H1>My collection</H1>
        <Span>{cnt} palette</Span>
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
  /* padding: 20px; */
  /* margin: 50px auto; */
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
