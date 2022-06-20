import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUserDB } from "../redux/modules/userSlice";

const Login = () => {
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

  // 버튼 비활성화
  const [username, setUsername] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const checkUsername = (e) => {
    setUsername(e.target.value);
  };
  const checkPwd = (e) => {
    setPwd(e.target.value);
  };

  return (
    <Wrap>
      <h1>로그인</h1>
      <div>
        <IdBox>
          <p>아이디</p>
          <br />
          <input
            type="email"
            ref={id_ref}
            // 버튼 비활성화
            onChange={checkUsername}
            required
          />
        </IdBox>
        <PwdBox>
          <p>비밀번호</p>
          <br />
          <input
            type="password"
            ref={pwd_ref}
            // 버튼 비활성화
            onChange={checkPwd}
            required
          />
        </PwdBox>
      </div>
      <Button
        onClick={() => {
          login();
        }}
        // 버튼 비활성화
        disabled={!username || !pwd}
      >
        로그인하기
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div``;
const IdBox = styled.div``;
const PwdBox = styled.div``;
const Button = styled.button`
background-color: ${(props) => (props.disabled ? "#f8cbac" : "#ff8a3a")};
`;

export default Login;
