import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { addContentDB, DetailContentDB, updateContentDB } from "../redux/modules/contentSlice";
import Slider from "react-slick";

const Post = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const categoryRef = useRef(null);

  const [imageUrls, setImageUrls] = useState([]);
  const [showImages, setShowImages] = useState([]);



  const { id } = useParams();
  const [loading, setLoading] = useState(null);
  const post_info = useSelector((state) => state.content.detail);
  useEffect (() => {
    setLoading(true);
        dispath(DetailContentDB(id));
  }, []);
  const is_edit = id ? true : false;

  useEffect(() => {
    if(is_edit){
      setImageUrls(post_info.imageUrl)
    }
  }, [is_edit]);
  
  // 이미지 1장 업로드
  const imageUpload = (e) => {
    const formData = new FormData();
    formData.append("image", imageRef.current.files[0]);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    // axios.post("http://localhost:8090/image",formData)
    axios
      .post("http://whitewise.shop/image", formData, config)
      .then((response) => {
        const url = response.data; // 이미지 주소 넣기
        setImageUrls((current) => [...current, { imageUrl: url }]);
      });
  };

  // 등록하기
  const addContentList = () => {
    // postSubmit();
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };

    
    let data = {
      imageUrl: imageUrls,
      title: titleRef.current.value,
      price: uncomma(priceRef.current.value),
      content: contentRef.current.value,
      category: categoryRef.current.value,
    };

    // if(!data.)
    if (!data.title) {
      alert("제목을 입력 해주세요.");
      return false;
    } else if (imageUrls == 0) {
      alert("사진을 첨부해주세요");
      return false;
    } else if (data.category === "카테고리를 선택해주세요") {
      alert("카테고리를 선택해주세요");
      return false;
    } else if(!data.price) {
      alert("가격을 입력 해주세요.");
      return false;
    }else if (!data.content) {
      alert("내용을 입력 해주세요.");
      return false;
    } 
    if(is_edit){
      dispath(updateContentDB(data, id));  
    }else {
      dispath(addContentDB(data));
    }
    window.location.replace("/content/");
  };

  //콤마 찍기
  const [num, setNum] = React.useState();

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <TitleText>{is_edit? "게시글 수정" : "게시글 작성"}</TitleText>
      <ImgWrap>
        <Slider {...settings}>
          {imageUrls.map((image, index) => {
            return (
              <div key={index}>
                <img
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                  src={image.imageUrl}
                  alt="test"
                />
              </div>
            );
          })}
        </Slider>
      </ImgWrap>
      <ContentBox>
        <label htmlFor="file" onChange={imageUpload}>
            <ImageBtn>이미지 첨부</ImageBtn>
            <input
              type="file"
              multiple
              id="file"
              ref={imageRef}
              accept="image/jpg, image/png, image/jpeg"
              />
          </label>
        <br />
        <div
          style={{
            textAlign: "left",
          }}
        >
          <WriteBox>
            {/* <ContentTitleText>제목</ContentTitleText> */}
            <Put type="text" ref={titleRef} defaultValue={is_edit?post_info.title:null} placeholder="글 제목"/>
          </WriteBox>
          <WriteBox>
          </WriteBox>
          <Select name="areaSelect" ref={categoryRef}>
              <option defaultValue={is_edit?post_info.category:"default"}>{is_edit?post_info.category:"카테고리를 선택해주세요"}</option>
              <option value="디지털">디지털 기기</option>
              <option value="스포츠">스포츠/레저</option>
              <option value="의류">의류</option>
              <option value="뷰티">뷰티/미용</option>
              <option value="기타">기타</option>
            </Select>
          <WriteBox>
            {/* <ContentTitleText>가격</ContentTitleText> */}
            <Put
              type="text"
              value={num}
              ref={priceRef}
              placeholder="가격(원)"
              onChange={(e) => setNum(inputPriceFormat(e.target.value))}
            />
          </WriteBox>
          <input
            type="text"
            placeholder="올릴 게시글 내용을 작성해주세요."
            defaultValue={is_edit?post_info.content:null}
            ref={contentRef}
            style={{
              width: "500px",
              height: "150px",
              border:'none',
            }}
          />
        </div>
      </ContentBox>
      <Buttons>
        <Btn onClick={addContentList}>{is_edit?"수정":"등록"}</Btn>
        <Btn
          onClick={() => {
            navigate("/");
          }}
        >
          취소
        </Btn>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const ContentBox = styled.div``;

const WriteBox = styled.div`
  display:flex;
  align-items:center;
`;
const TitleText = styled.h1``;

const Buttons = styled.div`
    width:500px;
    display:flex;
    justify-content:space-between;
`;

const Btn = styled.button`
  text-align:center;
  font-weight:bold;
  font-size:18px;
  width:49.8%;
  border:1px solid #e3dede;
  background-color: transparent;
  padding:20px 0px;
  cursor: pointer;
`;
const ImgWrap = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  margin:30px 0 6px 0;
  border: 1px solid #e3dede;
  border-radius: 16px;
  overflow:hidden;
`;

const Put = styled.input`
  width:100%;
  height: 25px;
  line-height: 25px;
  border: none;
  outline: none;
  /* background-color:#636262; */
  border-bottom:1px solid #e3dede;
  padding:30px 10px;
  /* color:#eee; */
`;

const Select = styled.select`
  border:none;
  width:100%;
  padding:20px 10px;
  border-bottom:1px solid #e3dede;
  font-weight:bold;
  cursor:pointer;
  &:hover{
    background-color:#e3e3e3;
  }
  option {
    padding:30px 10px;
  }
`;

//사진 첨부 버튼
const ImageBtn = styled.div`
margin-bottom:60px;
border:1px solid #bfbfbf;
border-radius:2px;
color:#969696;
padding: 6px 20px;
`
export default Post;
