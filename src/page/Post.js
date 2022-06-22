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
  const [showImages, setShowImages] = useState([])

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
  }, [imageUrls])
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

    let list = {
      imageUrl: imageUrls,
      title: titleRef.current.value,
      price: priceRef.current.value,
      content: contentRef.current.value,
      category: categoryRef.current.value,
    };
    dispath(addContentDB(list));
    navigate('/top')
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Container>
      <h2>게시글 작성</h2>
      <div>
        <button onClick={addContentList}>등록</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          취소
        </button>
      </div>
      
      <div style={{ width: "500px", height: "500px", overflow: "hidden"}}>
        <Slider {...settings}>
          {imageUrls.map((image, index) => {
            return <div key={index}><img style={{width: "400px", height: "400px", objectFit: "cover"}} src={image.imageUrl} alt="test"/></div>
          })}
        </Slider>
      </div>
      {/* <CardSlide id="previewImage" image={showImages}>
        
        </CardSlide> */}
      {/* <ImgWrap> 
        {imageUrls.map((image, index) => {
          return <div key={index}><img src={image.imageUrl} alt="test"/></div>
        })}
      </ImgWrap> */}
      <div>
        <form className="upload_input">
          <input type="file" id="image" ref={imageRef} onChange={imageUpload} />
          
        </form>
        <br />
        <p>글 제목</p>
        <input type="text" ref={titleRef} />
        <br />
        <p>가격</p>
        <input type="text" ref={priceRef} />
        <br />
        <p>카테고리 선택</p>
        <select name="areaSelect" ref={categoryRef}>
          <option value="digital">디지털 기기</option>
          <option value="sport">스포츠/레저</option>
          <option value="clothing">의류</option>
          <option value="beauty">뷰티/미용</option>
          <option value="etc">기타</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="올릴 게시글 내용을 작성해주세요."
          ref={contentRef}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 80px auto;
`;
const ImgWrap = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;
  border-radius: 16px;
  margin-bottom: 30px;
  overflow: hidden;
  background-color: black;
`;
export default Post;
