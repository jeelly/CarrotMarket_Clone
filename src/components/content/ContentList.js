import React, { useEffect, useInsertionEffect, useState } from "react";
//stylyed
import styled from "styled-components";
//router
import { useNavigate, Link } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import ContentItem from "./ContentItem";
import {  } from'react-redux';
import { loadContentDB } from '../../redux/modules/contentSlice';

const ContentList = (props) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.list);
  const pages = useSelector(state => state.board?.pages);


  //무한 스크롤
  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(1);
  console.log(page)
    // 인터섹션 callback
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await dispatch(loadContentDB(page));
    }
  };

  // 옵저버 등록 
  useEffect(() => {
      let observer;
      if (target) {
        setPage(page + 1);
        observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target);
      }
      return () => {
      observer && observer.disconnect();
      };
  }, [target]);
  
  // 무한스크롤 구현 중 다른 페이지 이동 했을때 재랜더링 되는걸 방지
  useEffect(() => {
    setPage(pages); 
  }, [pages]);

  // console.log(Math.random())
  return (
    <ArticleWrap>
      <Grid>
        {props.region
          ? content &&
            content
              .filter((l) => props.region === l.region)
              .filter((l,idx) => (!props.list ? idx < 4 : true))
              .map((l, idx) => (
                  <div key={idx}>
                    <ContentItem content={l} id={idx}/>
                  {props.list ?
                  (
                    <div ref={idx === content.length - 1  ? setTarget : null}></div>
                    ) : (
                      null  
                    )
                  }
                   </div>
              ))     
          : content &&
            content
            .filter((l,idx) => (!props.list ? idx < 4 : true))
            .map((l, idx) => (
              <div key={idx}>
                  <ContentItem content={l} id={idx} />
                {props.list?(
                    <div ref={idx === content.length - 1 ? setTarget : null}></div> ) : (
                      null  
                    )
                  }
              </div>
            ))}
      </Grid>
    </ArticleWrap>
  );
};

export default ContentList;

const ArticleWrap = styled.article`
  padding: 30px;
`;
const Grid = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 60px auto 20px auto;
  grid-auto-rows: minmax(320px, auto);
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

