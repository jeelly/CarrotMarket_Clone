import React from "react";
//styled
import styled from "styled-components";

const VisualArea = () => {
  return (
    <Container>
      <ArticleWrap color="#FBF7F2">
        <TextWrap>
          <SubTitle>당신 근처의<br/>당근마켓</SubTitle>
          <ContentText>중고 거래부터 동네 정보까지, 이웃과 함께해 가깝고 따뜻한 당신의 근처를 만들어요.</ContentText>
        </TextWrap>
        <ImgWrap>
        <Img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp" alt="광고"/>
        </ImgWrap>
      </ArticleWrap>
      <ArticleWrap color="#eee">

        <TextWrap>
          <SubTitle>우리 동네<br/>중고 직거래 마켓</SubTitle>
          <ContentText>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</ContentText>
          <BtnWrap>
            <Btn>인기매물 보기</Btn>
            <Btn>믿을 수 있는 중고거래</Btn>
          </BtnWrap>
        </TextWrap>
      </ArticleWrap>
    </Container>
  );
};

export default VisualArea;

const Container = styled.section`
  background-color: gray;
`;
const ArticleWrap = styled.article`
  background-color: ${(props) => (props.color ? props.color : "black")};
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: center;
`;
const TextWrap = styled.div`
  width:30%;
`;
const ImgWrap = styled.div`
width:30%;
`
const Img = styled.img`
  object-fit: cover;
  width: 548px;
`;
const SubTitle = styled.h2`
  font-size: 48px;
  text-align: left;
  margin-bottom:32px;
`;
const ContentText = styled.p`
  font-size: 16px;
  text-align: left;
`;

const BtnWrap = styled.div``
const Btn = styled.button`
  border:none;
  border-radius:5px;
  padding:14px 26px;
  background-color:gray;
`