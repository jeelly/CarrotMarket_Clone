import React, { useEffect } from 'react';
//stylyed
import styled from 'styled-components';
//router
import { useNavigate, Link, useParams} from 'react-router-dom';
//sub
import ContentList from '../components/content/ContentList';
import ContentTopList from '../components/content/ContentTopList';

const ListItem = () => {
    const { id } = useParams();
    const region = localStorage.getItem("region")
    const is_login = localStorage.getItem("token")
    
    console.log("지역", region)
    return (
      <Container>
        <Title>{id==="top"?"중고 거래 인기매물":"중고 거래 지역매물"}</Title>
        {id==="top"? 
            <ContentTopList region={region} mainPage={true}/> :
            <ContentList  region={region} mainPage={true}/>
        }
        {is_login && <PostBtn to="/post">+</PostBtn>}
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