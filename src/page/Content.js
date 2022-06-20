import React, { useEffect } from 'react';
//stylyed
import styled from 'styled-components';
//router
import { useNavigate, Link, useParams} from 'react-router-dom';
//sub
import ContentList from '../components/content/ContentList';

const ListItem = () => {
    const { id } = useParams();
    
    return (
      <Container>
        <Title>{id==="top"?"중고 거래 인기매물":"중고 거래 지역매물"}</Title>
        <ContentList region="서울" list={true}/>
      </Container>
    );
};

export default ListItem;

const Container = styled.section`
    background-color:#f5f5f5;
    padding-bottom:50px;
`;
const Title = styled.h1`
    padding-top:50px;
`
const SelectWrap = styled.div`
    width:60%;
    margin:0 auto;
` 
const AreaSelect = styled.select`
    border:1px solid #edeef0;
    margin-right: 1rem;
    width:140px;
    height:34px;
    font-size:20px;
    float:right;
`