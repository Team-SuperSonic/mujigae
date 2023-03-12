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
                    handlers?.onClick(i);
                  }}
                >
                  <ItemComponent
                    color={collectionState.data[i].color}
                    w="50px"
                    h="50px"
                    className="hoverImg"
                  ></ItemComponent>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlers?.onDelete(i);
                    }}
                  >
                    <IoMdCloseCircle size="18" className="close" />
                  </button>
                </li>
              )
          )}
        </ItemList>
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

    & > button {
      color: #000000b0;
      opacity: 0;
      transition: opacity 0.1s;
    }
    &:hover {
      button {
        opacity: 1 !important;
      }
    }

    & > button {
      cursor: pointer;
      position: absolute;
      top: 4px;
      right: 4px;
      background: none;
      outline: none;
      border: none;
      padding: 0 0 4px 4px;
    }
  }
`;
