import React, { useEffect } from 'react';
//styled
import styled from "styled-components";
//Subpage
import VisualArea from '../components/main/VisualArea'
import ContentArea from '../components/main/ContentArea';
import { loadContentDB } from '../redux/modules/contentSlice';
//redux
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadContentDB());
    }, []);

    return (
      <Container>
        <VisualArea></VisualArea>
        <ContentArea></ContentArea>
      </Container>
    );
};

export default Main;

const Container = styled.div``;