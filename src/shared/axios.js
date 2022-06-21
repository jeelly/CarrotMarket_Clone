import axios from "axios";

//인스턴스 생성
const instance = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: "http://whitewise.shop",
  headers: { "Content-Type": "application/json" },
});

const token = localStorage.getItem("token")
//토큰값
// const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiaWF0IjoxNjU1Nzc3NzQ4LCJleHAiOjE2NTYzODI1NDh9.ayhqiBkC6oJeaxz23RCW6gC2c6woL-b5omrVNDt0yto";
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`; 


// instance.defaults.headers.common["Authorization"] = `Bearer 임시토큰`; 

export default instance;