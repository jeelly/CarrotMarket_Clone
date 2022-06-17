import React from 'react';
import { Link } from 'react-router-dom';
//styled
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Title>당근마켓 로고</Title>
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
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 1vw;
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
`
const HeaderLink = styled(Link)`
    display:inline-block;
    margin-left:6px;
    border:1px solid #d1d1cf;
    height:36px;
    line-height:36px;
    padding:0 10px;
`

