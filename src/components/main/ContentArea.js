import React from "react";
//styled
import styled from "styled-components";
//router
import { Link } from 'react-router-dom';

const ContentArea = () => {
  return (
    <Container>
      <ArticleWrap color="#d4d2d2">
        <SubTitle>중고거래 인기매물</SubTitle>
          <Grid>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
          </Grid>
          <MoreLink to="Content">인기매물 더 보기</MoreLink>
      </ArticleWrap>
      <ArticleWrap color="#e6e6e6">
        <SubTitle>중고거래 지역매물</SubTitle>
        <Grid>
        <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
            <Item>  
              <ItemImg>사진 영역</ItemImg>
              <ItemText>
                <ItemTitle>물품명</ItemTitle>
                <ItemPrice>15,000,000원</ItemPrice>
                <ItemArea>서울 금천구 가산동</ItemArea>
                <ItemOption>관심 60 ·<span> 채팅 0</span></ItemOption>
              </ItemText>
            </Item>
        </Grid>
        <MoreLink to="Content">지역매물 더 보기</MoreLink>
      </ArticleWrap>
    </Container>
  );
};

export default ContentArea;
const Container = styled.section``;
const ArticleWrap = styled.article`
  padding: 30px;
  background-color: ${(props) => (props.color ? props.color : "black")};
`;
const SubTitle = styled.h2``;

const Grid = styled.div`
  display:grid;
  width:60%;
  grid-template-columns:repeat(4, 1fr);
  grid-gap :1rem;
  margin:60px auto 20px auto;
  grid-auto-rows:minmax(360px, auto);
`;

const ItemImg = styled.div`
margin:0 auto 20px auto;
background-color:white;
border-radius:20px;
height:200px;
vertical-align:middle;
`

const ItemTitle = styled.h3`
  font-weight:400;
`
const ItemPrice = styled.strong``
const ItemArea = styled.p``
const ItemOption = styled.p``
const Item = styled.div``;
const ItemText = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-left: 10px;
`

const MoreLink = styled(Link)`
  display:block;
  text-decoration:underline;
  margin-bottom:70px;
`