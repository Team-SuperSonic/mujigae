// 채린

import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { changeLike } from "store/Data";

import { Collection, Detail } from "pages";
import { Header, CollectionList, ItemsList } from "components/main";

function Main() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const palletes = useSelector(({ data }) => data);

  let { colorCode } = useParams();

  let [code, setCode] = useState("");

  const clickHandler = (i) => {
    colorCode = palletes[i].color;
    navigate(`/detail/${colorCode}`);
    setCode(colorCode);
  };

  const deleteHandler = (i) => {
    dispatch(changeLike(i));
  };

  const likeHandler = (i) => {
    dispatch(changeLike(i));
  };

  return (
    <Container>
      <Header />
      <Section>
        {/* 메뉴바 생성여부 추후 고려 */}
        <Menu></Menu>
        <Routes>
          <Route
            path="/*"
            element={
              <ItemsList
                collectionState={palletes}
                handlers={{
                  onClick: clickHandler,
                  onLike: likeHandler,
                }}
              />
            }
          />
          <Route path="/collection" element={<Collection collectionState={palletes} />}></Route>
          <Route path="/detail/*" element={<Detail color={code} />}></Route>
          <Route path="/detail/:colorCode" element={<Detail color={code} />} />
        </Routes>
        <CollectionList
          collectionState={palletes}
          handlers={{
            onClick: clickHandler,
            onDelete: deleteHandler,
          }}
        />
      </Section>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Menu = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
`;
