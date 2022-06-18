import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { addContentDB } from "../redux/modules/contentSlice";

const Post = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const content = useSelector((state) => state.content.list);

  const subjectRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const imageRef = React.useRef(null)

  const formData = new FormData();

  const addContentList = () => {
    dispath(
      addContentDB({
        // imageUrl: file_link_ref.current.url,
        subject: subjectRef.current.value,
        price: priceRef.current.value,
        content: contentRef.current.value,
      })
    );
  };

  //이미지 선택했을 때 input type="file" => onChange 이벤트가 발생했을 때
  const imageUpload = (e) => {
    formData.append("image", imageRef.current.files[0])
  }

  const PostSubmit = (e) => {
    e.preventDefault();
    axios.post("http://주소/",formData).then((response) => {
    //response.data.imageUrl = "http://주소.jpg"

    axios.post("http://주소/api/write", {
        subject: "제목",
        content: "내용",
        imageUrl: response.data.imageUrl
    }).then((response) => {
        if (response.data.result){
            alert("글 작성 완료!")
        } else {
            alert("글 작성 실패!")
        }
    });
    });
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

      <ImgWrap></ImgWrap>
      <div>
        <input type="file" onChange={imageUpload} ref={imageRef} />
        <br />
        <p>글 제목</p>
        <input type="text" ref={subjectRef} />
        <br />
        <p>가격</p>
        <input type="text" ref={priceRef} />
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
