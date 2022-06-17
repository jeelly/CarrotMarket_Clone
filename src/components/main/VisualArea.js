import React from "react";
//router
import { Link } from 'react-router-dom';
//styled
import styled from "styled-components";

const VisualArea = () => {
  return (
    <Container>
      <ArticleWrap color="#FBF7F2">
        <TextWrap>
          <SubTitle>당신 근처의<br />당근마켓</SubTitle>
          <ContentText>
            중고 거래부터 동네 정보까지, 이웃과 함께해 가깝고 따뜻한 당신의
            근처를 만들어요.
          </ContentText>
        </TextWrap>
        <ImgWrap>
          <Img
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp"
            alt="광고"
          />
        </ImgWrap>
      </ArticleWrap>
      <ArticleWrap color="#eee">
        <ImgWrap>
          <Img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp" />
        </ImgWrap>
        <TextWrap>
          <SubTitle>우리 동네<br />중고 직거래 마켓</SubTitle>
          <ContentText>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
          </ContentText>
          <BtnWrap>
            <LinkBtn to="/Content" width="160px">인기매물 보기</LinkBtn>
            <LinkBtn to="/Content" width="220px">믿을 수 있는 중고거래</LinkBtn>
          </BtnWrap>
        </TextWrap>
      </ArticleWrap>
      <ArticleWrap color="#E6F3E6">
        <TextWrap>
          <SubTitle>이웃과 함께 하는<br />동네생활</SubTitle>
          <ContentText>
            우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
          </ContentText>
          <ArticleThirdWrap>
            <ArticleThirdCard>
              <ArticleThirdImg imageURL="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg">아이콘</ArticleThirdImg>
              <ArticleThirdTitle>우리동네질문</ArticleThirdTitle>
              <ArticleThirdText>궁금한 게 있을 땐 이웃에게 물어보세요.</ArticleThirdText>
            </ArticleThirdCard>
            <ArticleThirdCard>
              <ArticleThirdImg imageURL="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg">아이콘</ArticleThirdImg>
              <ArticleThirdTitle>동네분실센터</ArticleThirdTitle>
              <ArticleThirdText>무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</ArticleThirdText>
            </ArticleThirdCard>
            <ArticleThirdCard>
              <ArticleThirdImg imageURL="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg">아이콘</ArticleThirdImg>
              <ArticleThirdTitle>동네모임</ArticleThirdTitle>
              <ArticleThirdText>관심사가 비슷한 이웃과 온오프라인으로 만나요.</ArticleThirdText>
            </ArticleThirdCard>
          </ArticleThirdWrap>
        </TextWrap>
        <ImgWrap>
          <Img
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp"
            alt="광고"
          />
        </ImgWrap>
      </ArticleWrap>
      <ArticleWrap color="#eee">
        <ImgWrap>
          <Img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp" />
        </ImgWrap>
        <TextWrap>
          <SubTitle>내 근처에서 찾는<br />동네가게</SubTitle>
          <ContentText>
            우리 동네 가게를 찾고 있나요?동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
          </ContentText>
          <BtnWrap>
            <LinkBtn to="/Content" width="245px">당근마켓 동네가게 찾기</LinkBtn>
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
  justify-content:center;
  @media screen and (max-width: 556px) {
    flex-direction:column;
    padding:60px 0;
  }
`;
const TextWrap = styled.div`
  width:35%;
  margin-left:5%;
  max-width:360px;
`;
const ImgWrap = styled.div`
width:35%;
overflow:hidden;
`
const Img = styled.img`
  object-fit:contain;
  width: 100%;
`;
const SubTitle = styled.h2`
  font-size: 38px;
  text-align: left;
  margin-bottom:32px;
`;
const ContentText = styled.p`
  font-size: 16px;
  text-align: left;
`;

const BtnWrap = styled.div`
text-align:left;
display: flex;
flex-direction: column;
@media screen and (min-width: 930px) {
        flex-direction: row;
    }
`
const LinkBtn = styled(Link)`
  display:inline-block;
  font-weight:bold;
  border:none;
  padding:14px 26px;
  border-radius: 5px;
  background-color:rgba(189, 189, 189,0.2);
  margin-right:15px;
  margin-top:20px;
  min-width:${(props) => props.width};
  cursor: pointer;
  &:hover {
    background-color:rgba(189, 189, 189,1) ;
  }
`
const ArticleThirdWrap = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  margin-top:50px;
`
const ArticleThirdCard = styled.div`
width:100px`
const ArticleThirdImg = styled.div`
text-indent:-9999px;
background-image:url(${(props) => props.imageURL});
width:56px;
height:56px;
`
const ArticleThirdTitle = styled.strong`
  display:block;
  text-align:left;
`
const ArticleThirdText = styled.p`
  text-align:left;
  font-size:12px;
`