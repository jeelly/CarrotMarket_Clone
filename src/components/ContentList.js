import React, { useEffect } from "react";
//stylyed
import styled from "styled-components";
//router
import { useNavigate, Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
const ContentList = (props) => {
  const content = useSelector((state) => state.content.list);
  console.log(content)
  console.log(props)

  return (
    <ArticleWrap>
      <Grid>
        {props.region
          ? content &&
            content
              .filter((l) => props.region === l.region)
              .map((l, idx) => (
                <Item to={`/detail/${idx}`} key={idx}>
                  <ItemImg>
                    {/* {l?.imageUrl.map((l, idx) => ( */}
                      <Img key={idx} src={l.imageUrl[0].imageUrl} alt={l.title} />
                    {/* ))} */}
                  </ItemImg>
                  <ItemText>
                    <ItemTitle>{l.title}</ItemTitle>
                    <ItemPrice>{l.price}원</ItemPrice>
                    <ItemArea>{l.category}</ItemArea>
                    <ItemOption>
                      🤍 60 ·<span> 채팅 0</span>
                    </ItemOption>
                  </ItemText>
                </Item>
              ))
          : content &&
            content.map((l, idx) => (
              <Item to={`/detail/${idx}`} key={idx}>
                <ItemImg>
                  {l?.imageUrl.map((l, idx) => (
                    <Img key={idx} src={l.imageUrl} alt={l.title}></Img>
                  ))}
                </ItemImg>
                <ItemText>
                  <ItemTitle>{l.title}</ItemTitle>
                  <ItemPrice>{l.price}원</ItemPrice>
                  <ItemArea>{l.category}</ItemArea>
                  <ItemOption>
                    🤍60 ·<span> 채팅 0</span>
                  </ItemOption>
                </ItemText>
              </Item>
            ))}
      </Grid>
    </ArticleWrap>
  );
};

export default ContentList;

const ArticleWrap = styled.article`
  padding: 30px;
`;
const Grid = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 60px auto 20px auto;
  grid-auto-rows: minmax(320px, auto);
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled(Link)``;
const ItemImg = styled.div`
  margin: 0 auto 20px auto;
  background-color: white;
  border-radius: 20px;
  height:200px;
  width:100%;
  vertical-align: middle;
  overflow:hidden;
`;
const Img = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`
const ItemTitle = styled.h3`
  font-weight: 400;
`;
const ItemPrice = styled.strong`
  margin:4px 0;
`;
const ItemArea = styled.p``;
const ItemOption = styled.p`
  color:#878686;
  margin:10px 0;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;


