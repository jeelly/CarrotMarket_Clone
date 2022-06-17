import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserDB } from "../redux/modules/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id_ref = React.useRef(null);
  const pwd_ref = React.useRef(null);

  const emailCheck = (email) => {
    let _reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    //이메일 형식으로!
    return _reg.test(email);
  };

  const login = () => {
    if (id_ref.current.value === "" || pwd_ref.current.value === "") {
      window.alert("아이디와 비밀번호를 입력하세요!");
      return;
    }
    if (!emailCheck(id_ref.current.value)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    } else {
    }
    let users = {
        username: id_ref.current.value,
        password: pwd_ref.current.value,
      };
    dispatch(loginUserDB(users));
  };

  return (
    <Wrap>
      <h1>로그인</h1>
      <div>
        <IdBox>
          <p>아이디(이메일)</p>
          <br />
          <input type="text" ref={id_ref} />
          <p>설명</p>
        </IdBox>
        <PwdBox>
          <p>비밀번호</p>
          <br />
          <input type="password" ref={pwd_ref} />
        </PwdBox>
      </div>
      <button onClick={login}>로그인하기</button>
    </Wrap>
  );
};

const Wrap = styled.div``;
const IdBox = styled.div``;
const PwdBox = styled.div``;

export default Login;
