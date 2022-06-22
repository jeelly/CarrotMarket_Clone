import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUserDB } from "../redux/modules/userSlice";
import "../css/LoginStyles.css"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  //아이디, 이메일, 비밀번호, 비밀번호 확인
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // 유효성 검사
  const [isUsername, setIsUsername] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);

  //오류메시지 상태저장
  const [usernameMessage, setUsernameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");

  const login = () => {
    let users = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    //dispatch 할 때 users 데이터와 close 함수 전달
    // (함수전달 가능, 함수 전달 할 땐 괄호 없어야함.)
    dispatch(loginUserDB(users));
    navigate('/')
  };

// username
const onChangeUsername = useCallback((e) => {
  
  const usernameRegex =
    /([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
  const usernameCurrent = usernameRef.current.value;
  setUsername(usernameCurrent);

  if (!usernameRegex.test(usernameCurrent)) {
    setUsernameMessage("이메일 형식을 다시 한번 확인해 주세요.");
    setIsUsername(false);
  } else {
    setUsernameMessage("알맞게 작성되었습니다 :)");
    setIsUsername(true);
  }
}, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[0-9a-zA-Z@$!%*#?&]{3,10}$/;

    //비밀번호는 3 ~ 10자 영문, 숫자 및 특수문자조합으로
    const passwordCurrent = passwordRef.current.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("비밀번호는 3 ~ 10자 영문, 숫자 및 특수문자조합으로");
      setIsPassword(false);
    } else {
      setPasswordMessage("알맞게 작성되었습니다 :)");
      setIsPassword(true);
    }
  }, []);

  // 엔터키 설정
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };
  
  return (
    <form className="login">
      <h3>로그인</h3>
      <div>
        <IdBox>
          <p>아이디</p>
          <br />
          <input
            type="email"
            placeholder="Username"
            ref={usernameRef}
            // 버튼 비활성화
            onChange={onChangeUsername}
            required
          />
          <Pone>
            {username.length > 0 && (
              <span className={`message ${isUsername ? "success" : "error"}`}>
                {usernameMessage}
              </span>
            )}
          </Pone>
        </IdBox>
        <PwdBox>
          <p>비밀번호</p>
          <br />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            // 버튼 비활성화
            onChange={onChangePassword}
            onKeyPress={onKeyPress}
            required
          />
          <Pone>
            {password.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
          </Pone>
        </PwdBox>
      </div>
      <Button
        onClick={() => {
          login();
        }}
        // 버튼 비활성화
        disabled={!(isUsername && isPassword && username && password)}
      >
        로그인
      </Button>
    </form>
  );
};

// const Wrap = styled.div``;
const IdBox = styled.div``;
const PwdBox = styled.div``;
const Button = styled.button`
  font-family: "Asap", sans-serif;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  width: 80px;
  border: 0;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: -5px;
  border-radius: 5px;
  /* background-color: #f45b69; */
  background-color: ${(props) => (props.disabled ? "#f8cbac" : "#f45b69")};
  -webkit-transition: background-color 300ms;
  -moz-transition: background-color 300ms;
  transition: background-color 300ms;
`;
const Pone = styled.p`
  color: #444;
  font-size: 13px;
`;
export default Login;
