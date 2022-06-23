import React from "react";
//styled
import styled from "styled-components";
//router
import { Link } from 'react-router-dom';
//Sub
import ContentList from '../content/ContentList'
import ContentTopList from "../content/ContentTopList";

const ContentArea = () => {
  const nickname = localStorage.getItem("nickname")


  return (
    <Container color="#e6e6e6">
      <SubTitle>중고거래 인기매물</SubTitle>
      <ContentTopList MainPage={true} />
      <MoreLink to="content/top">{nickname ? "지역 인기매물 더 보기" : "전체 인기매물 더 보기" }</MoreLink>
      <SubTitle>{nickname ? "중고거래 지역매물" : "중고거래 전체매물"}</SubTitle>
      <ContentList MainPage={true} />
      <MoreLink to="content/region">{nickname ? "지역매물 더 보기" : "전체매물 더 보기"}</MoreLink>
    </Container>
  );
};

export default ContentArea;

const Container = styled.div`
  background-color: ${(props) => (props.color ? props.color : "black")};
`
const SubTitle = styled.h2`
  padding-top:70px;
`;
const MoreLink = styled(Link)`
  display: block;
  text-decoration: underline;
  padding-bottom: 70px;
`;