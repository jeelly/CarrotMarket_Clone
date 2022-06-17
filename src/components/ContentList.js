import React, { useEffect } from "react";
//stylyed
import styled from "styled-components";
//router
import { useNavigate, Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadContentDB } from "../redux/modules/contentSlice";
const ContentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContentDB());
  }, []);
  const content = useSelector((state) => state.content.list);
  console.log(content)
//   console.log(content[1]?.imageUrl[1].imageUrl)
  return (
      <ArticleWrap>
        <Grid>
            {content && content.map((l, idx) => (
                <Item to={`/detail/${idx}`} key={idx}>
                <ItemImg>{l?.imageUrl.map((l, idx) => (
                    <img key={idx} src={l.imageUrl} alt={l.title}></img>
                ))}</ItemImg>
                <ItemText>
                  <ItemTitle>{l.title}</ItemTitle>
                  <ItemPrice>{l.price}원</ItemPrice>
                  <ItemArea>{l.category}</ItemArea>
                  <ItemOption>
                    관심 60 ·<span> 채팅 0</span>
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
  grid-auto-rows: minmax(360px, auto);
`;

const Item = styled(Link)``;
const ItemImg = styled.div`
  margin: 0 auto 20px auto;
  background-color: white;
  border-radius: 20px;
  height: 200px;
  vertical-align: middle;
  overflow:hidden;
`;
const ItemTitle = styled.h3`
  font-weight: 400;
`;
const ItemPrice = styled.strong``;
const ItemArea = styled.p``;
const ItemOption = styled.p``;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;


