import React from "react";
import styled from "styled-components";

import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";

import ItemComponent from "../common/ItemComponent";

export default function ItemsList({ collectionState, handlers }) {
  return (
    <Wrapper>
      <ColorWrapper>
        {collectionState.map((v, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column" }}>
            <div
              onClick={() => {
                handlers?.onClick(i);
              }}
            >
              <ItemComponent
                color={collectionState[i].color}
                w="220px"
                h="220px"
              ></ItemComponent>
            </div>

            <Like
              onClick={() => {
                handlers?.onLike(i);
              }}
            >
              {collectionState[i].like ? (
                <BsSuitHeartFill size="20" />
              ) : (
                <BsSuitHeart size="20" />
              )}
              <div>Like</div>
            </Like>
          </div>
        ))}
      </ColorWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 815px;
  height: 100%;
`;

const ColorWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  height: 300px;
`;

const Like = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #eee;
  width: 80px;
  height: 40px;
  margin: 10px 0;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
`;
