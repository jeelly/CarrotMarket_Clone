import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../css/SignStyle.css"

const SignUp = () => {
  const navigate = useNavigate();

  //Ref 값 가져오기
  const usernameRef = React.useRef(null);
  const nicknameRef = React.useRef(null);
  const pwdRef = React.useRef(null);
  const rePwdRef = React.useRef(null);
  const selectRef = React.useRef(null);

  //아이디, 이메일, 비밀번호, 비밀번호 확인
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");

  // 유효성 검사
  const [isUsername, setIsUsername] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isRePwd, setIsRePwd] = useState(false);

  //오류메시지 상태저장
  const [usernameMsg, setUsernameMsg] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [rePwdMsg, setRePwdMsg] = useState("");

  const onSubmit = async () => {

    let users = {
      username: username,
      nickname: nickname,
      password: pwd,
      region: selectRef.current.value,
    };

    await axios
      .post("http://whitewise.shop/user/signup", users)
      .then((response) => {
        window.alert("회원가입 성공!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error)
        window.alert(error.response.data.message);
      });
    }
    
    // 아이디
    const onChangeUsername = useCallback((e) => {
      const usernameRegex =
        /([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
      const usernameCurrent = usernameRef.current.value;
      setUsername(usernameCurrent);
  
      if (!usernameRegex.test(usernameCurrent)) {
        setUsernameMsg("이메일 형식을 다시 한번 확인해 주세요.");
        setIsUsername(false);
      } else {
        setUsernameMsg("알맞게 작성되었습니다 :)");
        setIsUsername(true);
      }
    }, []);

    // 닉네임
  const onChangeNickname = useCallback((e) => {
    const nicknameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{3,10}$/;
    //닉네임은 3~8자 한글,영어,숫자
    const nicknameCurrent = nicknameRef.current.value;
    setNickname(nicknameCurrent);

    if (!nicknameRegex.test(nicknameCurrent)) {
      setNicknameMsg("닉네임은 3~8자 한글,영어,숫자");
      setIsNickname(false);
    } else {
      setNicknameMsg("알맞게 작성되었습니다 :)");
      setIsNickname(true);
    }
  }, []);

// 비밀번호
const onChangePwd = useCallback((e) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[0-9a-zA-Z@$!%*#?&]{3,10}$/;
  //비밀번호는 3 ~ 10자 영문, 숫자 및 특수문자조합으로
  const passwordCurrent = pwdRef.current.value;
  setPwd(passwordCurrent);

  if (!passwordRegex.test(passwordCurrent)) {
    setPwdMsg("비밀번호는 3 ~ 10자 영문, 숫자 및 특수문자조합으로");
    setIsPwd(false);
  } else {
    setPwdMsg("알맞게 작성되었습니다 :)");
    setIsPwd(true);
  }
}, []);

// 비밀번호 확인
const onChangeRePwd = useCallback(
  (e) => {
    const passwordConfirmCurrent = rePwdRef.current.value;
    setRePwd(passwordConfirmCurrent);

    if (pwd === passwordConfirmCurrent) {
      setRePwdMsg("비밀번호를 똑같이 입력했어요 :)");
      setIsRePwd(true);
    } else {
      setRePwdMsg("비밀번호를 다시 한번 확인해 주세요.");
      setIsRePwd(false);
    }
  },
  [pwd]
);

  // 엔터키 설정
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Signup">
    <Wrap>
      <SignupText>SIGN UP</SignupText>
      <div>
        <IdBox>
        <Label htmlFor="email">ID</Label>
          <br />
          <Input
            type="email"
            id="email"
            ref={usernameRef}
            onChange={onChangeUsername}
            required
          />
          <Pone>
            {username.length > 0 && (
              <span className={`message ${isUsername ? "success" : "error"}`}>
                {usernameMsg}
              </span>
            )}
          </Pone>
        </IdBox>
        <NicknameBox>
        <Label htmlFor="nickname">NICKNAME</Label>
          <br />
          <Input
            id="nickname"
            type="nickname"
            ref={nicknameRef}
            onChange={onChangeNickname}
            required
          />
             <Pone>
            {nickname.length > 0 && (
              <span className={`message ${isNickname ? "success" : "error"}`}>
                {nicknameMsg}
              </span>
            )}
          </Pone>
        </NicknameBox>
        <PwdBox>
        <Label htmlFor="password">PASSWORD</Label>
          <br />
          <Input
          id="password"
            type="password"
            ref={pwdRef}
            onChange={onChangePwd}
            required
          />
          <Pone>
            {pwd.length > 0 && (
              <span className={`message ${isPwd ? "success" : "error"}`}>
                {pwdMsg}
              </span>
            )}
          </Pone>
        </PwdBox>
        <PwdCkBox>
        <Label htmlFor="repwd">PASSWORD CHECK</Label>
          <br />
          <Input
          id="repwd"
            type="password"
            ref={rePwdRef}
            onChange={onChangeRePwd}
            onKeyPress={onKeyPress}
            required
          />
          <Pone>
            {rePwd.length > 0 && (
              <span className={`message ${isRePwd ? "success" : "error"}`}>
                {rePwdMsg}
              </span>
            )}
          </Pone>
        </PwdCkBox>
        <RegionBox>
        <Label htmlFor="region">REGION</Label>
              <br/>
          <Select name="areaSelect" ref={selectRef}>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충북">충북</option>
            <option value="충남">충남</option>
            <option value="경북">경북</option>
            <option value="경남">경남</option>
            <option value="전북">전북</option>
            <option value="전남">전남</option>
            <option value="제주">제주</option>
          </Select>
        </RegionBox>
      </div>
      <SignUpBtn
        onClick={onSubmit}
        disabled={
          !username || 
          !nickname || 
          !pwd ||
          !rePwd ||
          !isUsername ||
          !isNickname ||
          !isPwd ||
          !isRePwd
        }  
      >
        JOIN
      </SignUpBtn>
    </Wrap>
    </div>
  );
};

const Wrap = styled.div``;
const SignupText = styled.h1`
margin-bottom:30px;
`;

const Label = styled.label`
font-size:15px;
font-weight:700;
`;
const IdBox = styled.div`
margin-bottom:15px;
`;
const NicknameBox = styled.div`
margin-bottom:15px;
`;
const PwdBox = styled.div`
margin-bottom:15px;
`;
const PwdCkBox = styled.div`
margin-bottom:15px;
`;
const Pone = styled.p`
  color: #444;
  font-size: 13px;
  font-weight: 5;
  font-weight:700;
  .message.error { 
    color: #f70017; 
    }
  .message.success{
    color: #1d901d;
  }
`;
const Input = styled.input`
  border-radius:5px;
  border:1px solid #222;
  height:20px;
  margin-top:10px;
`;
const Select = styled.select`
border-radius:3px;
width:52px;
height:22px;
font-size:13px;
margin-top:7px;
margin-bottom:30px;
`;
const SignUpBtn = styled.button`
font-weight:700;
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

const RegionBox = styled.div``;

export default SignUp;
