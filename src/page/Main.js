import React, { useEffect } from 'react';
//styled
import styled from "styled-components";
//Subpage
import VisualArea from '../components/main/VisualArea'
import ContentArea from '../components/main/ContentArea';

const Main = () => {
    return (
      <Container>
        <VisualArea></VisualArea>
        <ContentArea></ContentArea>
      </Container>
    );
};

export default Main;

const Container = styled.div``;