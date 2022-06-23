import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeDB } from "../redux/modules/likeSlice";
import { act } from "react-dom/test-utils";
import { addCountDB } from "../redux/modules/contentSlice";

const Like = ({ content, likes, detail }) => {
  const dispatch = useDispatch();
  const [activeLike, setActiveLike] = useState(true);
  const [count, setCount] = useState(0);

  const [viewCount, setViewCount] = useState(0);

  const nickname = localStorage.getItem("nickname")
useEffect(() => {
    if(likes.id === content.id) {
        setActiveLike(likes.data)
        setCount(content.likeCount)
    }
  }, [likes]);

  useEffect(() => {
    setViewCount(content.viewCount)
  }, [content]);

  const togglebtn = async () => {
    await dispatch(toggleLikeDB(content?.id));
    await dispatch(addCountDB({id:content?.id}))
  };

  console.log(detail)
  return (
    <>
      {activeLike ? (
        <>
          <LikeBtn
            onClick={() => {
                if(!nickname) {
                  window.alert("로그인 후 이용해주세요")
                  return false;
                }
                setCount(count+1);
                setActiveLike(false);
                togglebtn();
            }}
          >
            🤍 {count}
          </LikeBtn>
          {detail ? "· 조회수" + viewCount : null}
        </>
      ) : (
        <>
          <LikeBtn
            onClick={() => {
              if(!nickname) {
                window.alert("로그인 후 이용해주세요")
                return false;
              }
              setCount(count-1);
              setActiveLike(true);
              togglebtn();
            }}
          >
            ❤️ {count}
          </LikeBtn>
          {detail ? "· 조회수" + viewCount : null}
        </>
      )}
    </>
  );
};

export default Like;

const LikeBtn = styled.span`
  cursor: pointer;
`;
