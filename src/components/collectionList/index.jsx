import React from "react";
import styled from "styled-components";
import ItemComponent from "../ItemComponent";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CollectionList = ({ collectionState, handlers }) => {
  let navigate = useNavigate();

  return (
    <>
      <List>
        <H1
          onClick={() => {
            navigate("/collection");
          }}
        >
          Collection
        </H1>
        <ItemList
          style={{
            padding: 0,
            listStyle: "none",
            margin: 0,
            display: "flex",
          }}
        >
          {collectionState.data.map(
            (v, i) =>
              collectionState.data[i].like && (
                <li
                  key={i}
                  onClick={() => {
                    handlers?.clickHandler(i);
                  }}
                >
                  <ItemComponent
                    color={collectionState.data[i].color}
                    w="50px"
                    h="50px"
                    className="hoverImg"
                  ></ItemComponent>
                  <IoMdCloseCircle
                    size="18"
                    className="close"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlers?.deleteHandler(i);
                    }}
                  />
                </li>
              )
          )}
        </ItemList>
        {/* <Item>
          <Over>
            {collectionState.data.map(
              (v, i) =>
                collectionState.data[i].like && (
                  <CloseBox
                    key={i}
                    onClick={() => {
                      handlers?.clickHandler(i);
                    }}
                  >
                    <ItemComponent
                      color={collectionState.data[i].color}
                      w="50px"
                      h="50px"
                      className="hoverImg"
                    ></ItemComponent>
                    <IoMdCloseCircle
                      size="18"
                      className="close"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlers?.deleteHandler(i);
                      }}
                    />
                  </CloseBox>
                )
            )}
          </Over>
        </Item> */}
      </List>
    </>
  );
};

export default CollectionList;

const List = styled.div`
  height: 100%;
  padding: 30px 70px;
`;

const H1 = styled.h1`
  font-size: 20px;
  cursor: pointer;
  height: 30px;
`;

const ItemList = styled.ul`
  padding: 0px;
  list-style: none;
  margin: 0px;
  display: flex;
  width: 218px;
  gap: 4px;
  flex-wrap: wrap;
  & > li {
    position: relative;

    & > svg {
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  width: 240px;
`;

const Over = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  svg {
    color: #0000008a;
    opacity: 1;
    transition: opacity 0.1s;
  }
  &:hover {
    svg {
      opacity: 1 !important;
    }
  }
`;

const CollectItem = styled.div`
  & > .close {
    /* visibility: hidden; */
    /* display: block; */
    position: relative;
    bottom: 65px;
    left: 45px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
    display: block;

    .close {
      display: block;
      position: relative;
      bottom: 65px;
      left: 45px;
      height: 20px;
      padding: 0;
      margin: 0;
    }
  }
`;
const CloseBox = styled.span`
  height: 20px;
  margin-bottom: 50px;

  & > .close {
    /* visibility: hidden; */
    /* display: block; */
    position: relative;
    bottom: 65px;
    left: 45px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
    display: block;

    .close {
      display: block;
      position: relative;
      bottom: 65px;
      left: 45px;
      height: 20px;
      padding: 0;
      margin: 0;
    }
  }
`;
