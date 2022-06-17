import React, { useEffect } from 'react';
//stylyed
import styled from 'styled-components';
//router
import { useNavigate, Link} from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { loadContentDB } from '../redux/modules/contentSlice';
//sub
import ContentList from '../components/ContentList';
const ListItem = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadContentDB())
    }, []);
    const content = useSelector(state => state);

    return (
      <Container>
        <Title>{1==1?"중고 거래 인기매물":"중고 거래 지역매물"}</Title>
        <SelectWrap>
            <AreaSelect name="h_area1">
            <option>-선택-</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="강원">강원</option>
            <option value="경기">경기</option>
            <option value="경남">경남</option>
            <option value="경북">경북</option>
            <option value="전남">전남</option>
            <option value="전북">전북</option>
            <option value="제주">제주</option>
            <option value="충남">충남</option>
            <option value="충북">충북</option>
            </AreaSelect>
        </SelectWrap>
        <ContentList />
      </Container>
    );
};

export default ListItem;

const Container = styled.section`
    background-color:#f5f5f5;;
`;
const Title = styled.h1`
    padding:50px 0;
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