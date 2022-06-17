import React from 'react';
//router
import { Link } from 'react-router-dom';
//styled
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterTop>
                <Title>당근마켓 <br/>클론코딩</Title>
                <FooterTopText>
                    <p style={marginLeft}>항해99 <br/> 7기</p>
                    <p style={marginLeft}>FE 김영호, 지송이 <br/> BE 김건, 심규홍, 백현명</p>
                </FooterTopText>
            </FooterTop>
            <FooterBr/>
            <FooterBottom>
                <p style={textLeft}>Front-end <a style={astyle} href="https://github.com/jeelly/CarrotMarket_Clone" target="_blank">https://github.com/jeelly/CarrotMarket_Clone</a></p>
                <p style={textLeft}>back-end <a style={astyle} href="https://github.com/whitewise95/clone_coding_project_9_teams" target="_blank">https://github.com/whitewise95/clone_coding_project_9_teams</a></p>
            </FooterBottom>
        </Container>
    );
};

export default Footer;

const astyle = {
    color:"rgba(232, 232, 232, 0.5)"
}
const textLeft = {
    textAlign:"left"
}
const textCenter = {
    textAlign:"Center"
}
const marginLeft = {
    marginLeft:"20px",
    textAlign:"left"
}
const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-items:flex-start;
    background-color:#485057;
    align-items:center;
    padding:20px;
    color:#eee;
`;
const Title = styled.h3`
    color: #FF7236;
`
const FooterTop = styled.section`
    width:100%;
    display:flex;
    align-items: center;
`
const FooterTopText = styled.div`
    display:flex;
`
const FooterBottom = styled.section`
    width:100%;
`
const FooterBr = styled.div`
width:100%;
height:1px;
margin:12px 0;
background-color:rgba(232, 232, 232, 0.5);
`