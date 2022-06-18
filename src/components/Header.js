import React from 'react';
//router
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

//styled
import styled from "styled-components";
import { userActions } from '../redux/modules/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const deleteToken = () => {
        // 로그아웃 시 토큰 삭제
        localStorage.removeItem("Token")

        // 로그아웃 시 isLogin --> false 변경
        // setIsLogin(false); --> 쿠키 때만 쓰기

        // 로그아웃 시 페이지 리렌더링
        navigate('/')
    };

    // 로그인 상태 --> 로컬스토리지의 토큰 유무로 확인 (null or 토큰값)
    const is_login = localStorage.getItem("Token")

    // 컴포넌트 렌더링 시 로그인 여부 체크 
    // useEffect(() => {
    //     if (user.isLogin) {
    //         setIsLogin(true);
    //     } else {
    //         setIsLogin(false)
    //     }
    // },[user]);

    return (
        <Container>
            <Link to="/"><Title>당근마켓 로고</Title></Link>
            <RightWrap>
            <Search type="text" placeholder='물품이나 동네를 검색해보세요.'/>
            {!is_login && <HeaderLink to="/login">로그인</HeaderLink>}
            {!is_login && <HeaderLink to="/SignUp">회원가입</HeaderLink>}

            {is_login && <HeaderLink onClick={deleteToken}>로그아웃</HeaderLink>}
            </RightWrap>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height:50px;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    padding:0 20vw;
    position:fixed;
    z-index:100;
    background-color:#fff;
`;
//Left
const Title = styled.h1`
    color:#FF7236;
    font-size:20px;
`

//Right
const RightWrap = styled.div`
display: flex;
align-items:center;
`
const Search = styled.input`
    width:248px;
    height:36px;
    text-align:left;
    padding:9px 12px;
    border:none;
    border-radius:5px;
    background-color:#F2F3F6;
    @media screen and (max-width: 556px) {
        width:140px;
        font-size:12px;
  }
`
const HeaderLink = styled(Link)`
    display:inline-block;
    margin-left:6px;
    border:1px solid #d1d1cf;
    height:36px;
    line-height:36px;
    padding:0 10px;
`