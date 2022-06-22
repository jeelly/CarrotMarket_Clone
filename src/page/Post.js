import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { addContentDB } from "../redux/modules/contentSlice";
// import CardSlide from "../redux/modules/cardSlice"
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

  //이미지 1장 미리보기 --> e!!!!
  // const selectFile = (e) => {
  //   // let reader = new FileReader();
  //   // reader.readAsDataURL(e.target.files[0]);
  //   // reader.onload = (e) => {
  //   //   let img = document.getElementById("previewImage");
  //   //   img.setAttribute("src", e.target.result);
  //   //   // imageList[0] = reader.result
  //   //   setShowImages([...showImages, e.target.result])
  //   // };

  // };

  useEffect(() => {
    console.log(imageUrls);
  }, [imageUrls]);
  // 이미지 선택했을 때 input type="file" => onChange 이벤트가 발생했을 때
  // 이미지 1장 업로드
  const imageUpload = (e) => {
    // selectFile(e);
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
    dispath(addContentDB(data));
    window.location.replace("/content/");
  };

  // const postSubmit = () => {
  //   formData.append("image", imageRef.current.files[0])
  //   axios.post("http://localhost:8090/",formData).then((response) => {
  //   //response.data.imageUrl = "http://주소.jpg"

  //   // axios.post("http://주소/api/write", {
  //   //     subject: "제목",
  //   //     content: "내용",
  //   //     imageUrl: response.data.imageUrl
  //   // }).then((response) => {
  //   //     if (response.data.result){
  //   //         alert("글 작성 완료!")
  //   //     } else {
  //   //         alert("글 작성 실패!")
  //   //     }
  //   // });
  //   });
  // }

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
  // setNum(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

  //콤마 제거
  // const commaRemovePrice = num?.replace(/,/g, "");
  // let numberPrice = parseInt(commaRemovePrice);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <TitleText>게시글 작성</TitleText>
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
        {/* <img
          src="https://shop.hshanwoo.co.kr/file_data/image/noimage.jpg"
          alt="이미지 업로드 전 사진"
        /> */}
      </ImgWrap>
      {/* <CardSlide id="previewImage" image={showImages}>
        
        </CardSlide> */}
      {/* <ImgWrap> 
        {imageUrls.map((image, index) => {
          return <div key={index}><img src={image.imageUrl} alt="test"/></div>
        })}
      </ImgWrap> */}
      <ContentBox>
        <div className="upload_input">
          <input
            type="file"
            id="image"
            ref={imageRef}
            onChange={imageUpload}
          />
        </div>
        <br />
        <div
          style={{
            textAlign: "left",
          }}
        >
          <WriteBox>
            <ContentTitleText>글 제목</ContentTitleText>
            <Put type="text" ref={titleRef} />
          </WriteBox>
          <WriteBox>
            {/* <ContentTitleText>카테고리 선택</ContentTitleText> */}
            <Select name="areaSelect" ref={categoryRef}>
              <option value="default">카테고리를 선택하세요</option>
              <option value="디지털">디지털 기기</option>
              <option value="스포츠">스포츠/레저</option>
              <option value="의류">의류</option>
              <option value="뷰티">뷰티/미용</option>
              <option value="기타">기타</option>
            </Select>
          </WriteBox>
          <WriteBox>
            <ContentTitleText>가격</ContentTitleText>
            <Put
              type="text"
              value={num}
              ref={priceRef}
              onChange={(e) => setNum(inputPriceFormat(e.target.value))}
            />
          </WriteBox>

          <input
            type="text"
            placeholder="올릴 게시글 내용을 작성해주세요."
            ref={contentRef}
            style={{
              width: "390px",
              height: "150px",
            }}
          />
        </div>
      </ContentBox>
      <Buttons>
        <Btn onClick={addContentList}>등록</Btn>
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
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const FileInput = styled.input`
  border-radius: 2px;
  border:none;
  cursor:pointer;
`;
const ContentBox = styled.div`
  margin-left: 90px;
  width: 80%;
`;
const WriteBox = styled.div`
  margin-bottom: 20px;
`;
const TitleText = styled.h1`
  margin: 0 auto 30px auto;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: row;
  margin: 30px auto 0 auto;
  gap: 1rem;
`;
const ContentTitleText = styled.p`
  text-align: left;
`;
const Select = styled.select`
  margin-right: 500px;
  border:none;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 395px;
  height: 22px;
  line-height: 22px;
  cursor:pointer;
  &:hover{
    background-color:999;
  }
`;
const Btn = styled.button`
  border: none;
  border-radius:5px;
  margin-top: 6px;
  background-color: #f0f0f0;
  padding:5px 20px;
  text-align: left;
  cursor: pointer;
`;

// const ImgWrap = styled.div`
//   width: 100%;
//   height: 500px;
//   border: 1px solid black;
//   border-radius: 16px;
//   margin-bottom: 30px;
//   overflow: hidden;
//   background-color: black;
// `;

const ImgWrap = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 1px solid black;
  border-radius: 16px;
  /* overflow:hidden; */
`;
const Put = styled.input`
  width: 80%;
  height: 25px;
  line-height: 25px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  padding-bottom: 5px;
  margin-right: 100px;
`;

export default Post;
