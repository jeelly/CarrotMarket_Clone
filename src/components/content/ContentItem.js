import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Detail from '../../page/Detail';

const ContentItem = ({content, id}) => {

    const [activeLike, setActiveLike] = useState(false);
    return (
        <div>
            <Item>
                  <ItemImg to={`/detail/${id}`}>
                      <Img key={id} src={content.imageUrl[0].imageUrl} alt={content.title} />
                  </ItemImg>
                  <ItemText>
                    <ItemTitle>{content.title}</ItemTitle>
                    <ItemPrice>{content.price}원</ItemPrice>
                    <ItemArea>{content.category}</ItemArea>
                    <ItemOption>
                        {!activeLike? 
                            (<><LikeBtn onClick={()=>
                                setActiveLike(true)
                            }>🤍 {content.likeCount}</LikeBtn> · 채팅 0 </>):
                            (<><LikeBtn onClick={()=>
                                setActiveLike(false)
                            }>❤️ {content.likeCount}</LikeBtn> · 채팅 0</>)
                        }
                    </ItemOption>
                  </ItemText>
                </Item>
        </div>
    );
};

export default ContentItem;

const Item = styled.div``;
const ItemImg = styled(Link)`
  display:block;
  margin: 0 auto 20px auto;
  background-color: white;
  border-radius: 20px;
  height:200px;
  width:100%;
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
const ItemOption = styled.div`
  color:#878686;
  margin:10px 0;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  @media screen and (max-width: 670px) {
    align-items: center;
    margin-left:0;
  }
`;

const LikeBtn = styled.span`
    cursor:pointer;
`