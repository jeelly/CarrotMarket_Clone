import React, { useEffect, useInsertionEffect, useState } from "react";
//stylyed
import styled from "styled-components";
//router
import { useNavigate, Link } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadContentDB } from '../../redux/modules/contentSlice';
//Sub
import ContentItem from "./ContentItem";


const ContentList = (props) => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content?.list);
  const pages = useSelector(state => state.content?.pages);
  const regions = localStorage.getItem("region")

  //무한 스크롤
  const [target, setTarget] = useState(null);

  // 인터섹션 callback
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await dispatch(loadContentDB(pages));
    }
  };

  // 옵저버 등록 
  useEffect(() => {
      let observer;
      if (target) {
        observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target);
      }
      return () => {
      observer && observer.disconnect();
      };
  }, [target]);
  
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

