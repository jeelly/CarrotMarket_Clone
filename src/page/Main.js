import React, { useEffect } from 'react';
//styled
import styled from "styled-components";
//Subpage
import VisualArea from '../components/main/VisualArea'
import ContentArea from '../components/main/ContentArea';
//router
import { Link } from 'react-router-dom';

const Main = () => {
    return (
      <Container>
        <VisualArea></VisualArea>
        <ContentArea></ContentArea>
        <PostBtn to="/post">+</PostBtn>
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
  &:hover {
    background-color:rgba(250, 102, 22,0.5);
  }
`