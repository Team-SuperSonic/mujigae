import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";

import { Palette } from "components/main";
import { CopyToClipboard, CreatedAt, DownloadPalette } from "components/common";
import { useNavigate } from "react-router";

export default function ItemsList({ items, handlers }) {
  // state를 사용해야, 전부 다시 리렌더링 해줌 ! (좋아요 표시)
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  return (
    <Wrapper>
      {items?.map((v, i) => (
        <Li key={i}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              onClick={() => {
                handlers?.onClick(i);
              }}
            >
              <Palette colors={v.palette} w="220px" h="220px">
                <CopyToClipboard />
              </Palette>
            </div>
            <Like
              onClick={() => {
                handlers?.onLike(i);
                // handlers?.onPush(i);
                setShow(!show);
              }}
            >
              {v.isLike ? (
                <BsSuitHeartFill size="20" />
              ) : (
                <BsSuitHeart size="20" />
              )}
              <div>Like</div>
            </Like>
          </div>
        </Li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 815px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Li = styled.li`
  display: flex;
  margin: 50px auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  /* height: 300px; */
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
