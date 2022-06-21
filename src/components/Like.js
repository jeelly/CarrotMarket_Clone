import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeDB } from "../redux/modules/likeSlice";
import { act } from "react-dom/test-utils";
import { addCount, loadContentDB } from "../redux/modules/contentSlice";

const Like = ({ content, likes }) => {
  const dispatch = useDispatch();
  const [activeLike, setActiveLike] = useState(true);
  const [count, setCount] = useState(content.likeCount);

useEffect(() => {
    if(likes.id === content.id) {
        setActiveLike(likes.data)
    }
  }, [likes]);

  console.log("asdas",content.likeCount)
  // useEffect(() => {
  // }, [count]);

  const togglebtn = async () => {
    await dispatch(toggleLikeDB(content?.id));
    await dispatch(addCount({id:content?.id,num:activeLike===false?-1:+1}))
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
