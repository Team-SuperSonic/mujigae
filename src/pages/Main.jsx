// 채린

import React, { useEffect } from "react";
import styled from "styled-components";

import { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import { Collection, Detail } from "pages";
import { Header, CollectionList, ItemsList } from "components/main";

import { useDummy } from "components/hooks";

function Main() {
  let navigate = useNavigate();

  const dummy = useDummy();
  let dummyItems = useDummy(20);

  const [items, setItems] = useState(dummyItems);

  let [watch, setWatch] = useState([]);
  // let [cnt, setCnt] = useState(0);

  useEffect(() => {
    let watched = localStorage.getItem("dummy", watch);

    // 안봤으면 : 새 dummy data 넣어주기
    if (watched === null) {
      localStorage.setItem("dummy", JSON.stringify(dummyItems));
    } else if (items !== watch) {
      let edit = JSON.parse(localStorage.getItem("dummy"));
      // edit = watch;
      // localStorage.setItem("dummy", JSON.stringify(edit));
    }

    // item에 처음 받아온 dummy data 넣어주기
    let 꺼낸거 = JSON.parse(localStorage.getItem("dummy"));
    setItems(꺼낸거);
  }, []);

  const clickHandler = (i) => {
    // 클릭한 index를 parameter로 가져옴
    navigate(`/detail/${i}`);
  };

  const deleteHandler = (i) => {
    items[i].isLike = !items[i].isLike;
    setItems(items);
    setWatch(JSON.stringify(items));
  };

  const likeHandler = (i) => {
    items[i].isLike = !items[i].isLike;
    setItems(items);
    setWatch(JSON.stringify(items));

    //? 새로고침 후 좋아요 값 유지
    // localStorage
    // get set

    //? likeArr
  };

  let [likeArr, setLikeArr] = useState([]);

  const pushHandler = (idx) => {
    let copy = [...dummyItems];

    likeArr.push(copy[idx]);
    setLikeArr(likeArr);

    const newArr = likeArr.filter((v1, i1) => {
      return (
        likeArr.findIndex((v2, i2) => {
          return v1.id === v2.id;
        }) == i1
      );
    });

    setLikeArr(newArr);

    console.log(newArr);
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
                dummyItems={dummyItems}
                items={items}
                handlers={{
                  onClick: clickHandler,
                  onLike: likeHandler,
                  onPush: pushHandler,
                }}
              />
            }
          />
          <Route
            path="/collection"
            element={
              <Collection
                items={items}
                handlers={{
                  onLike: likeHandler,
                }}
              />
            }
          ></Route>
          <Route path="/detail/*" element={<Detail />}></Route>
          <Route
            path="/detail/:idx"
            element={<Detail items={items} dummyItems={dummyItems} />}
          />
        </Routes>
        <CollectionList
          items={items}
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
