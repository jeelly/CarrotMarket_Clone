import React from 'react';
import styled from 'styled-components';
//Router
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

    return (
        <Container>
            <ImgWrap>사진영역</ImgWrap>
            <UserWrap>
                <UserImage>프로필사진</UserImage>
                <UserInfo>
                    <UserName>홍길동</UserName>
                    <UserArea>서울</UserArea>
                </UserInfo>
            </UserWrap>
            <BrLine/>
            <ContentWrap>
                <ContentTitle>야외 테이블 (드림)</ContentTitle>
                <ContentOption>기타 중고물품 · <span> 2022-06-18</span></ContentOption>
                <ContentPrice>1,000원</ContentPrice>
                <ContentText>빌라 1층 테라스에서 쓰던 야외용 테이블 입니다.<br/>
                    사진에서 보다시피 파라솔은 없지만 별도 구매후 장착은 가능합니다.
                </ContentText>
                <ContentInfo>관심5 · 채팅28 · 조회339</ContentInfo>
                <BrLine/>
            </ContentWrap>
        </Container>
    );
};

export default Detail;

const BrLine = styled.div`
    width:100%;
    height:1px;
    margin:20px 0;
    background-color:#878686;
`
const Container = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin:80px auto;
`
const ImgWrap = styled.div`
    width:100%;
    height:500px;
    border:1px solid black;
    border-radius:16px;
    margin-bottom:30px;
`
const UserWrap = styled.div`
    display:flex;
    align-items:center;
`
const UserImage = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    border:1px solid #878686;
    text-indent:-9999px;
`
const UserInfo = styled.div`
    margin-left:20px;
`
const UserName = styled.p`
    text-align:left;
`
const UserArea = styled.p`
    text-align:left;
    
`
const ContentWrap = styled.div`
    width:100%;
`
const ContentTitle = styled.h3`
    text-align:left;
`
const ContentOption = styled.p`
    text-align:left;
    font-size:14px;
    color:#878686;
`
const ContentPrice = styled.strong`
    display:block;
    text-align:left;
    margin:10px 0 20px 0;
`
const ContentText = styled.p`
    text-align:left;
    margin-bottom:20px;
`
const ContentInfo = styled.p`
    text-align:left;
    font-size:14px;
    color:#878686;
    
`