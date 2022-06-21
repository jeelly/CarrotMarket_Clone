import React, { useEffect, useState } from "react";
//styled
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import {} from "react-redux";
import { loadTopContentDB } from "../../redux/modules/contentSlice";
//Sub
import ContentItem from "./ContentItem";

const ContentTopList = (props) => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content?.toplist);
  const pages = useSelector((state) => state.content?.pages);
  const regions = localStorage.getItem("region")

  console.log(contents)
  //무한 스크롤
  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(1);

  // 인터섹션 callback
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await dispatch(loadTopContentDB(page));
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

  

  return (
        <ArticleWrap>
            <Grid>
            {regions
                ? contents
                    .filter((content) => regions === content.region)
                    .filter((content,idx) => (!props.mainPage ? idx < 4 : true))
                    .map((content, idx) => (
                        <div key={idx}>
                        <ContentItem content={content}/>
                        {props.mainPage ? (<div ref={idx === contents.length - 1 ? setTarget : null}></div>):null}
                        </div>
                    ))     
                : contents
                .filter((content,idx) => (!props.mainPage ? idx < 4 : true))
                .map((content, idx) => (
                    <div key={idx}>
                        <ContentItem content={content}/>
                        {props.mainPage ? (<div ref={idx === contents.length - 1 ? setTarget : null}></div>):null}
                    </div>
                ))}
            </Grid>
        </ArticleWrap>
        );
};

export default ContentTopList;

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