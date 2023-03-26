import React, { useEffect } from "react";
import styled from "styled-components";

import { useState, useCallback } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import { Collection, Detail } from "pages";
import { Header, CollectionList, ItemsList } from "components/main";

import { useFetch } from "components/hooks";

function Main() {
  let navigate = useNavigate();

  const [items, setItems] = useState([]);

  const data = useFetch();

  useEffect(() => {
    data.then((v) => setItems(v));
  }, []);

  console.log(items);

  // let [watch, setWatch] = useState([]);

  //   let watched = JSON.parse(localStorage.getItem("dummy"));
  //   //   console.log(watched);
  //   //   console.log(items);

  //   //   // 안봤으면 : 새 dummy data 넣어주기
  //   if (watched === null) {
  //     //     // item 값 넣어줌
  //     localStorage.setItem("dummy", JSON.stringify(loadedData));
  //   } else if (watched === loadedData) {
  //     localStorage.setItem("dummy", JSON.stringify(loadedData));

  //     //     // items(초기 데이터...?)랑 다르면
  //     //     // local Storage에 있는 수정된 값을 가져와서
  //     // let edit = JSON.parse(localStorage.getItem("dummy"));

  //     //     // 수정된 사항을 items state에 적용
  //     // setItems(edit);

  //     //     // edit = watch;
  //     // localStorage.setItem("dummy", JSON.stringify(edit));
  //     //     console.log("있음");
  //   }

  //   // item에 처음 받아온 dummy data 넣어주기
  //   let 꺼낸거 = JSON.parse(localStorage.getItem("dummy"));
  //   setItems(꺼낸거);
  // });

  // const reloadHandler = useCallback(() => {
  //   // localStorage 데이터 가져오기

  // useEffect(() => {
  //   fetchHandler();
  //   // reloadHandler();
  // }, [fetchHandler]);

  const clickHandler = (i) => {
    // 클릭한 index를 parameter로 가져옴
    navigate(`/detail/${i}`);
  };

  const deleteHandler = (i) => {
    items[i].isLike = !items[i].isLike;
    setItems(items);
    // setWatch(JSON.stringify(items));
  };

  const likeHandler = (i) => {
    items[i].isLike = !items[i].isLike;
    setItems(items);
    console.log(items);
    // setWatch(JSON.stringify(items));

    //? 새로고침 후 좋아요 값 유지
    // localStorage
    // get set

    //? likeArr
  };

  let [likeArr, setLikeArr] = useState([]);

  const pushHandler = (idx) => {
    let copy = [...items];

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
            element={<Detail items={items} setItems={setItems} />}
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
  padding-top: 58px;
`;

const Menu = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
`;
