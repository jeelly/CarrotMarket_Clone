import React, { useEffect } from 'react';
//styled
import styled from "styled-components";
//Subpage
import VisualArea from '../components/main/VisualArea'
import ContentArea from '../components/main/ContentArea';
//router
import { Link } from 'react-router-dom';

const is_login = localStorage.getItem("token")

// console.log(is_logion)

const Main = () => {
    return (
      <Container>
        <VisualArea></VisualArea>
        <ContentArea></ContentArea>
        {is_login && <PostBtn to="/post">+</PostBtn>}
      </Container>
    );
};

export default Main;

const Container = styled.div``;
const PostBtn = styled(Link)`
  width:50px;
  height:50px;
  border-radius:50%;
  position:fixed;
  bottom:5vh;
  right:2vw;
  font-size:50px;
  color:#eee;
  line-height:40px;
  background-color:#fa6616;
  transition: background-color 0.3s, transform 2s;
  &:hover {
    background-color:rgba(250, 102, 22,0.5);
  }
`