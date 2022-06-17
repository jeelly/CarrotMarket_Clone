import React from "react";
//styled
import styled from "styled-components";

const ContentArea = () => {
  return (
    <Container>
      <ArticleWrap color="#d4d2d2">
        <SubTitle>중고거래 인기매물</SubTitle>
      </ArticleWrap>
      <ArticleWrap color="#e6e6e6">
        <SubTitle>중고거래 지역매물</SubTitle>
      </ArticleWrap>
    </Container>
  );
};

export default ContentArea;
const Container = styled.section``;
const ArticleWrap = styled.article`
  height: 50vh;
  padding: 30px;
  background-color: ${(props) => (props.color ? props.color : "black")};
`;
const SubTitle = styled.h2``;
