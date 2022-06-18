import React from 'react';
//router
import { Link } from 'react-router-dom';
//styled
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Link to="/"><Title>당근마켓 로고</Title></Link>
            <RightWrap>
            <Search type="text" placeholder='물품이나 동네를 검색해보세요.'/>
            <HeaderLink to="/login">로그인</HeaderLink>
            <HeaderLink to="/SignUp">회원가입</HeaderLink>
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