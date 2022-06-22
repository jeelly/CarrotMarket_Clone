import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeDB } from "../redux/modules/likeSlice";
import { act } from "react-dom/test-utils";
import { addCountDB } from "../redux/modules/contentSlice";

const Like = ({ content, likes }) => {
  const dispatch = useDispatch();
  const [activeLike, setActiveLike] = useState(true);
  const [count, setCount] = useState(0);

useEffect(() => {
    if(likes.id === content.id) {
        setActiveLike(likes.data)
        setCount(content.likeCount)
    }
  }, [likes]);

  // console.log(activeLike)
  // console.log(count)
  // console.log(likes.id)
  // console.log(content.id)

  const togglebtn = async () => {
    await dispatch(toggleLikeDB(content?.id));
    await dispatch(addCountDB({id:content?.id}))
  };
  return (
    <>
      {activeLike ? (
        <>
          <LikeBtn
            onClick={() => {
                setCount(count+1);
                setActiveLike(false);
                togglebtn();
            }}
          >
            {/* 🤍 {content.likeCount} */}
            🤍 {count}
          </LikeBtn>
          · 조회수 {content.viewCount}
        </>
      ) : (
        <>
          <LikeBtn
            onClick={() => {
              setCount(count-1);
              setActiveLike(true);
              togglebtn();
            }}
          >
            {/* ❤️ {content.likeCount} */}
            ❤️ {count}
          </LikeBtn>
          · 조회수 {content.viewCount}
        </>
      )}
    </>
  );
};

export default Like;

const LikeBtn = styled.span`
  cursor: pointer;
`;
