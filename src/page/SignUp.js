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
        window.alert(error.response.data.errormessage);
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
    <form className="Signup">
    <Wrap>
      <h1>회원가입</h1>
      <div>
        <IdBox>
        <label htmlFor="email">아이디</label>
          <br />
          <input
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
        <label htmlFor="nickname">닉네임</label>
          <br />
          <input
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
        <label htmlFor="password">비밀번호</label>
          <br />
          <input
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
        <label htmlFor="repwd">비밀번호 확인</label>
          <br />
          <input
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
        <label htmlFor="region">지역 선택</label>
              <br/>
          <select name="areaSelect" ref={selectRef}>
            <option value="seoul">서울</option>
            <option value="gyeonggi-do">경기</option>
            <option value="gangwon-do">강원</option>
            <option value="chungcheongbug-do">충북</option>
            <option value="chungcheongnam-do">충남</option>
            <option value="gyeongsangbug-do">경북</option>
            <option value="gyeongsangnam-do">경남</option>
            <option value="jeonlabug-do">전북</option>
            <option value="jeonlanam-do">전남</option>
            <option value="jeju-do">제주</option>
          </select>
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
        회원가입
      </SignUpBtn>
    </Wrap>
    </form>
  );
};

const Wrap = styled.div``;
const IdBox = styled.div``;
const NicknameBox = styled.div``;
const PwdBox = styled.div``;
const Pone = styled.p`
  color: #444;
  font-size: 13px;
`;
const SignUpBtn = styled.button`
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
const PwdCkBox = styled.div``;
const RegionBox = styled.div``;

export default SignUp;
