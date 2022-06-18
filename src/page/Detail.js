import React from 'react';
import styled from 'styled-components';
//Router
import { Link, useNavigate, useParams } from "react-router-dom";
//redux
import { removeContentDB } from '../redux/modules/contentSlice';
import { useSelector, useDispatch } from 'react-redux';
//slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const content = useSelector((state) => state.content.list);

  // 게시글 삭제 redux 함수 호출
  const onRemoveContent = async () => {
    await dispatch(removeContentDB(content[id].id));
    await navigate(-1)
  };

  //사진 슬라이드
  const settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    return (
        <Container>
                <ImgWrap>
                    <SliderWrap {...settings}>
                        {content[id]?.imageUrl.map((l, idx) => (
                            <Img key={idx} src={l.imageUrl} alt={l.title} />
                        ))}
                    </SliderWrap>                    
                </ImgWrap>
            <UserWrap>
                <UserImage>프로필사진</UserImage>
                <UserInfo>
                    <UserName>홍길동</UserName>
                    <UserArea>서울</UserArea>
                </UserInfo>
            </UserWrap>
            <BrLine/>
            <ContentWrap>
                <DelBtn onClick={onRemoveContent}>삭제</DelBtn>
                <ContentTitle>{content[id]?.title}</ContentTitle>
                <ContentOption>{content[id]?.category} · <span> 2022-06-18</span></ContentOption>
                <ContentPrice>{content[id]?.price}원</ContentPrice>
                <ContentText>{content[id]?.content}
                </ContentText>
                <ContentInfo>🤍{content[id]?.likeCount} · 채팅0 · 조회0</ContentInfo>
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
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin:80px auto;
`
const ImgWrap = styled.div`
    width:100%;
    margin:0 auto;
    margin-bottom:30px;
    /* overflow:hidden; */
`
const Img = styled.img`
    height:500px;
    width:500px;
    /* border-radius:16px; */
`
const SliderWrap = styled(Slider)``
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
const DelBtn = styled.button`
    border:none;
    padding:5px 20px;
    float:right;
    cursor:pointer;
`