import React, { useState } from 'react';
//router
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

//styled
import styled from "styled-components";
import { userActions } from '../redux/modules/userSlice';

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);
    console.log(isToggled)
    const navigate = useNavigate();
    const deleteToken = () => {
        // 로그아웃 시 토큰 삭제
        localStorage.removeItem("token")
        localStorage.removeItem("nickname")
        localStorage.removeItem("region")

        // 로그아웃 시 isLogin --> false 변경
        // setIsLogin(false); --> 쿠키 때만 쓰기

        // 로그아웃 시 페이지 리렌더링
        navigate('/')
    };

    // 로그인 상태 --> 로컬스토리지의 토큰 유무로 확인 (null or 토큰값)
    const is_login = localStorage.getItem("token")

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
            <PcWrap>
                    <NavAtag href="/"><LogoImg></LogoImg><Title>당근마켓</Title></NavAtag>
                <RightWrap>
                <Search type="text" placeholder='물품이나 동네를 검색해보세요.'/>
                {!is_login && <HeaderLink to="/login">로그인</HeaderLink>}
                {!is_login && <HeaderLink to="/SignUp">회원가입</HeaderLink>}
                {is_login && <HeaderLink to="/" onClick={deleteToken}>로그아웃</HeaderLink>}
                </RightWrap>
            </PcWrap>
            <MobileWrap>
                <NavAtag href="/"><LogoImg></LogoImg><Title>당근마켓</Title></NavAtag>
                <NavBtn onClick={() => {setIsToggled(!isToggled);}}></NavBtn>
                <NavManu isToggled={isToggled}>
                        <MobileBtn onClick={() => {setIsToggled(!isToggled);}}></MobileBtn>
                        <BrDiv></BrDiv>
                        <li><NavAtag href="/content/top">지역 인기매물 보러 가기</NavAtag></li>
                        <li><NavAtag href="/content/region">지역매물 보러 가기</NavAtag></li>
                        <BrDiv></BrDiv>
                        <li>{!is_login && <NavAtag href="/login">로그인</NavAtag>}</li>
                        <li>{!is_login && <NavAtag href="/SignUp">회원가입</NavAtag>}</li>
                        <li>{is_login && <NavAtag href="/" onClick={deleteToken}>로그아웃</NavAtag>}</li>
                </NavManu>
            </MobileWrap>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height:50px;
    width:100%;
    position:fixed;
    z-index:100;
    background-color:#fff;
`;

const PcWrap = styled.div`
    display:flex;
    height:50px;
    padding:0 20vw;
    justify-content:space-between;
    align-items:center;
    @media screen and (max-width: 900px) {
        padding:0 1vw;
  }
    @media screen and (max-width: 600px) {
        display:none;
  }
`
//Left
const Title = styled.h1`
    color:#FF7236;
    font-size:20px;
    margin-left:4px;
`
const LogoImg = styled.div`
    display:inline-block;
    width:16px;
    height:24px;
    background-image:url("carrotlogo.png");
    /* background-size:40px; */
    background-size:16px;
    background-repeat:no-repeat;
    background-position:center;
    margin:0;
    overflow:hidden;
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
const NavBtn = styled.div`
    text-indent:-9999px;
    background-image:url("ham.png");
    background-position:center;
    background-size:50px 50px;
    background-repeat:no-repeat;
    width:50px;
    height:50px;
    text-align:right;
`

////////////////

const MobileWrap = styled.div`
    display:none;
    justify-content:space-between;
    align-items:center;
    height:50px;

    @media screen and (max-width: 600px) {
        display:flex;
        padding:0 1vw;
  }
`
const NavManu = styled.ul`
    display:${(props) => (props.isToggled ? "block":"none")};
    width:50%;
    height:100vh;
    background-color:white;
    position:absolute;
    top:0;
    right:0;
`
const MobileBtn = styled.div`
    background-image:url("ham.png");
    background-position:center;
    background-size:50px 50px;
    background-repeat:no-repeat;
    width:50px;
    height:50px;
    text-align:right;
    float:right;
    margin-right:1vw;
`
const NavLink = styled(Link)`
    display:block;
    text-align:left;
    font-size:16px;
    margin-left:30px;
    margin-bottom:10px;
`

const NavAtag = styled.a`
    display:flex;
    flex-direction:row;
    align-items: center;
    text-align:left;
    font-size:16px;
    margin-left:30px;
    margin-bottom:10px;
`
const BrDiv = styled.p`
    display:inline-block;
    width:80%;
    text-align:center;
    margin-left:130px;
    height:1px;
    background-color:#dbdbdb;
    margin:20px 0 10px 0;
`