import axios from "axios";

//인스턴스 생성
const instance = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: "http://whitewise.shop",
  headers: { "Content-Type": "application/json" },
});
//토큰값
const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiaWF0IjoxNjU1Nzc1Njk5LCJleHAiOjE2NTYzODA0OTl9.Rm6XrFUKEDjRS_waIcde5tJPvIE-b-Yaq7GBzSNY148";
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`; 


// instance.defaults.headers.common["Authorization"] = `Bearer 임시토큰`; 

export default instance;