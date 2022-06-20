import React, { useEffect, useState } from "react";
//stylyed
import styled from "styled-components";
//router
import { useNavigate, Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import ContentItem from "./ContentItem";
const ContentList = (props) => {
  const content = useSelector((state) => state.content.list);
  console.log(props.region)

  return (
    <ArticleWrap>
      <Grid>
        {props.region
          ? content &&
            content
              .filter((l) => props.region === l.region)
              .map((l, idx) => (
                <ContentItem content={l} id={idx} key={Math.random()} />
              ))
          : content &&
            content.map((l, idx) => (
              <ContentItem content={l} id={idx} key={Math.random()}/>
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

