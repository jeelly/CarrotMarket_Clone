import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pwd_ref = React.useRef(null);
  const repwd_ref = React.useRef(null);
  const select_ref = React.useRef(null);

  // 벨리데이션
  const emailCheck = (email) => {
    let _reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    //이메일 형식으로!
    return _reg.test(email);
  };

  const passwordCheck = (password) => {
    let _reg =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[0-9a-zA-Z@$!%*#?&]{3,10}$/;
    //비밀번호는 3 ~ 10자 영문, 숫자 및 특수문자조합으로
    return _reg.test(password);
  };

  const nicknameCheck = (nickname) => {
    let _reg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{8,10}$/;
    //닉네임은 3~8자 한글,영어,숫자
    return _reg.test(nickname);
  };

  const signupAxios = async () => {
    let users = {
      username: id_ref.current.value,
      nickname: name_ref.current.value,
      password: pwd_ref.current.value,
      region: select_ref.current.value,
    };

    //벨리데이션
    if (id_ref.current.value === "" || pwd_ref.current.value === "") {
      window.alert("이메일 혹은 비밀번호가 공란! 입력해주세요!");
      return;
    }
    if (!emailCheck(id_ref.current.value)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (pwd_ref.current.value !== repwd_ref.current.value) {
      window.alert("비밀번호가 동일하지 않습니다!");
      return;
    }
    if (!passwordCheck(pwd_ref.current.value)) {
      window.alert(
        "비밀번호는 8 ~ 10자 영문, 숫자 및 특수문자조합으로 작성하세요!"
      );
      return;
    }
    if (!nicknameCheck(name_ref.current.value)) {
      window.alert("닉네임은 3 ~ 8자 한글,영문,숫자!");
      return;
    }

    await axios
      .post("api", users) // api 넣기 !
      .then((response) => {
        window.alert("회원가입 성공!");
        navigate("/login");
      })
      .catch((error) => {
        window.alert(error.response.data.errormessage); // api 받으면 에러 콘솔 확인해보기 !
      });
  };
  return (
    <Wrap>
      <h1>회원가입</h1>
      <div>
        <IdBox>
          <p>아이디(이메일)</p>
          <br />
          <input type="text" ref={id_ref} />
          <p>설명</p>
        </IdBox>
        <NicknameBox>
          <p>닉네임</p>
          <br />
          <input type="text" ref={name_ref} />
        </NicknameBox>
        <PwdBox>
          <p>비밀번호</p>
          <br />
          <input type="password" ref={pwd_ref} />
        </PwdBox>
        <PwdCkBox>
          <p>비밀번호 확인</p>
          <br />
          <input type="password" ref={repwd_ref} />
        </PwdCkBox>
        <RegionBox>
          <p>지역 선택</p>
          <select name="areaSelect" ref={select_ref}>
            <option value="seoul">서울</option>
            <option value="gyeonggi-do">경기도</option>
            <option value="gangwon-do">강원도</option>
            <option value="chungcheongbug-do">충청북도</option>
            <option value="chungcheongnam-do">충청남도</option>
            <option value="gyeongsangbug-do">경상북도</option>
            <option value="gyeongsangnam-do">경상남도</option>
            <option value="jeonlabug-do">전라북도</option>
            <option value="jeonlanam-do">전라남도</option>
            <option value="jeju-do">제주도</option>
          </select>
        </RegionBox>
      </div>
      <button onClick={signupAxios}>회원가입하기</button>
    </Wrap>
  );
};

const Wrap = styled.div``;
const IdBox = styled.div``;
const NicknameBox = styled.div``;
const PwdBox = styled.div``;
const PwdCkBox = styled.div``;
const RegionBox = styled.div``;

export default SignUp;
