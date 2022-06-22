import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//Router
import { Link, useNavigate, useParams } from "react-router-dom";
//redux
import { DetailContentDB, removeContentDB } from '../redux/modules/contentSlice';
import { useSelector, useDispatch } from 'react-redux';
//slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { loadLikeDB, toggleLikeDB } from '../redux/modules/likeSlice';
import Like from '../components/Like';

const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const likes = useSelector((state) => state.like.like);
    const [activeLike, setActiveLike] = useState(true);
    const [loading, setLoading] = useState(null);
    const content = useSelector((state) => state.content.detail);

    const writer = localStorage.getItem("nickname")
    console.log(writer)
    console.log(content.user?.nickname)

  useEffect (() => {
    setLoading(true);
    dispatch(loadLikeDB(content.id));
    dispatch(DetailContentDB(id));
  }, []);


  // 게시글 삭제 redux 함수 호출
  const onRemoveContent = async () => {
    await dispatch(removeContentDB(content.id));
    await navigate(-1)
  };

  const togglebtn = async () => {
    await dispatch(toggleLikeDB(content.id));
  }

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
                        {content?.imageUrl && content?.imageUrl.map((l, idx) => (
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
                {content.user?.nickname === writer ? (
                    <>
                        <UpdateBtn to={`/post/${content.id}`}>수정</UpdateBtn>
                        <DelBtn onClick={onRemoveContent}>삭제</DelBtn>
                    </>
                ) : null}
                    
                <ContentTitle>{content?.title}</ContentTitle>
                <ContentOption>{content?.category} · <span> 2022-06-18</span></ContentOption>
                <ContentPrice>{content?.price}원</ContentPrice>
                <ContentText>{content?.content}
                </ContentText>
                <ContentInfo>채팅0 · 조회0</ContentInfo>
                <LikeBtn>{loading && <Like content={content} likes={likes}/>}</LikeBtn>
                <BrLine/>
            </ContentWrap>
            
        </Container>
    );
};

export default Detail;

const Container = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin:80px auto;
    @media screen and (max-width: 1200px) {
        width:80%;
  }
    @media screen and (max-width: 1200px) {
        width:90%;
  }
`
const BrLine = styled.div`
    width:100%;
    height:1px;
    margin:20px 0;
    background-color:#878686;
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
    margin-bottom:10px;
`
const ContentInfo = styled.p`
    text-align:left;
    font-size:14px;
    color:#878686;
`

const LikeBtn = styled.div`
    border:none;
    font-size:20px;
    margin-top:6px;
    background-color:transparent;
    text-align:left;
    cursor:pointer;
`

const DelBtn = styled.button`
    border:none;
    padding:5px 20px;
    font-size:14px;
    float:right;
    cursor:pointer;
`
const UpdateBtn = styled(Link)`
    border:none;
    background-color:#f0f0f0;
    font-size:14px;
    padding:5px 20px;
    float:right;
    margin-left:5px;
`