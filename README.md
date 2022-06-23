![header](https://capsule-render.vercel.app/api?type=slice&color=gradient&height=200&section=header&text=당근마켓클론&fontSize=90&animation=fadeIn&fontAlignY=38&desc=%20&descAlignY=62&descAlign=62)

<br>

## 프로젝트명: 당근마켓 클론 

<br>

#### 지난주 미니 프로젝트의 복습 느낌으로 진행하였습니다. <br><br>✨

<br>


# ✏️ 당근마켓 클론코딩 - 9조 클론프로젝트

## 제작기간
### 2022년 6월 16일 ~ 2022년 6월 23일

<br>
## ✨API 설계✨


| 분류 | 완선 여부 | 담당자 | 기능 | Method | URL | Request(Client -> Server) | Response(Server -> Client) | 메모|
| :--- | :------- |:----- |:---- |:------ |:--- |:------------------------- |:-------------------------- |:---|
| 회원관리| ☑ | 지송이 | 회원가입 | POST | user/signup ||||
| 회원관리| ☑ | 지송이 | 로그인 | POST | user/login ||||
| 메인/게시글| ☑ | 김영호 | 지역글 조회 (비로그인) | GET | /post/all/region ||||
| 메인/게시글| ☑ | 김영호 | 인기글 조회 (비로그인 시) | GET | /post/top/all/region ||||
| 메인/게시글| ☑ | 김영호 | 인기글 조회 (로그인 시) | GET | /post/top/{region} ||||
| 메인/게시글| ☑ | 김영호 | 지역글 조회 (로그인 시) | GET /post/{region} ||||
| 메인/게시글| ☑ | 김영호 | 글 상세조회 | GET | /post/detail/{postID} ||||
| 게시글 | ☑ | 지송이  | 글 쓰기 | POST | /post ||||
| 게시글| ☑ | 김영호 | 글 수정 | PATCH  | / post/{postId} ||||
| 게시글| ☑ | 김영호 | 글 삭제 | DELETE | /post/{postId} ||||
| 게시글| ☑ | 지송이 | 이미지 업로드 | POST | /image  ||||
| 좋아요| ☑ | 김영호 | 좋아요 등록, 취소 | POST | /like/{postId} ||||
| 좋아요| ☑ | 김영호 | 좋아요 체크 | GET | /like/{postId} ||||
| 좋아요| ㅁ | 김영호 | 유저가 좋아요 누른 글 목록 조회 | GET | /like/all ||||


<br>
##  🖥️ 당근마켓 Page View

### 프로젝트 시연 사진

1. 메인 페이지/로그인 전
 
![image](https://user-images.githubusercontent.com/83892440/175311248-254627aa-8958-4dfd-9ae4-06b6bb77db03.png)

1-1. 메인 페이지/로그인 후

![image](https://user-images.githubusercontent.com/83892440/175313688-33b767de-86bb-4a70-8ece-c8a892ce8762.png)

2. 회원가입 페이지(벨리데이션 미충족시 버튼 비활성화)

![image](https://user-images.githubusercontent.com/83892440/175311856-653c18a8-92b0-4414-a605-bcf28bfed65c.png)

3. 로그인 페이지

![image](https://user-images.githubusercontent.com/83892440/175311982-cbeed6ca-5640-4562-875f-02ef3bbd2478.png)


4. 게시물 전체 조회 페이지 (좋아요 순대로 정렬)

![image](https://user-images.githubusercontent.com/83892440/175312134-c21fe104-bbd2-4f73-9497-0a669145eada.png)

5. 게시물 상세 페이지/타유저 게시물

![image](https://user-images.githubusercontent.com/83892440/175312265-9072d038-77eb-40f4-bbd1-1b1ff99b840d.png)

5-1. 게시물 상세 페이지/ 본인 게시물(좋아요, 수정, 삭제 구현)

![image](https://user-images.githubusercontent.com/83892440/175313128-b8d5738c-8f3b-4d4a-907c-5d8e637c2257.png)

6. 게시물 작성 페이지(가격 천단위 콤마, 슬라이더 구현)

![image](https://user-images.githubusercontent.com/83892440/175312796-3038c5e4-a577-4156-ba9a-8dc1cd03dd5d.png)

7. 게시물 수정 페이지

![image](https://user-images.githubusercontent.com/83892440/175313394-175ca7cb-504e-45a8-8189-27f38e2d152b.png)

## 프로젝트 시연 영상

https://www.youtube.com/watch?v=lweHhvWAbQc
<br>

### 🥇 Developers

**Front-end**
  - 팀원: 김영호(인기글 조회, 전체글 조회, 지역글 조회, 게시물 삭제, 좋아요) / 팀원: 지송이(회원가입, 로그인, 게시글 작성 페이지)
  - 추가 기능: 
    - 무한스크롤 기능
    - 사진 업로드 기능(다중 선택, 슬라이드)

<br>

## 트러블 슈팅
FE :
1. state에 값이 있는데 새로고침을 하면
- Uncaught TypeError: cannot read properties of undefined 오류가 발생합니다.
- 이유를 찾아보니 처음 렌더링 전에 useState값을 불러오는데 undefined값을 먼저 불러와서 해당 에러가 뜨는것으로 확인이 됐고 
- 앞에 [리스트 객체] && 를 두어서 리스트 객체가 온전히 불러와졌을 때 데이터가 뿌려지는 코드가 진행되게 수정했다.
2. 로그인, 로그아웃 시 헤더의 버튼이 렌더링 안됨
- 리덕스의 intialState에 true, false 값을 app.js 에 전역으로 뿌려줬더니 해결됐다.
3. 가격 데이터를 서버에 보낼때 설정했던 콤마가 지워지지 않고 출력되는 오류
- 정규식을 사용해서 콤마를 제거했다

<br>

## 시간이 남았다면 해보고싶었던 기능

- 로그인한 유저의 좋아요 목록으로 장바구니 구현
- 중고거래 클론이다보니 웹소켓을 이용한 채팅기능 구현
- OAuth를 사용해서 소셜 로그인 구현

- **Back-end** :  [https://github.com/whitewise95/clone_coding_project_9_teams](https://github.com/whitewise95/clone_coding_project_9_teams)
  - 백현명 / 김건 / 심규홍

<br>

## 🚀 Tech Stack

- **Front-end Tech Stack**
  - React
  - Redux
  - Axios
   
- **Front-end Library**

| 라이브러리명            | 내용                                    | 참고 |
| :-------------------- | :-------------------------------------- | :--- |
| styled-components     | 스타일관리                               |      |
| axios                 | 서버통신                                |      |
| react-router-dom      | 렌더링                                  |      |
| react-redux           |  상태관리                               |      |
| @reduxjs/toolkit      |  Redux를 더 쉽게 사용                   |      |
| react-slick           |  슬라이드                               |      |
| moment                |  시간이 포함된 데이터                    |      |
| intersection-observer |   옵저버                                |      |
| fortawesome           |    아이콘 툴킷                          |      |

<br>

## 💬 Front-end
> 이번 프로젝트는 주특기 주차를 마치고 처음으로 프론트엔드와 백엔드로 나눠서 진행한 프로젝트 입니다.
> 이번 프로젝트는 다음 주 실전 프로젝트 시작전에 배운 걸 정리하고자 진행한 프로젝트입니다.
> CRUD기능의 구현에 집중하였고, 좋아요, 무한스크롤등 추가 기능도 구현 하였습니다.
> 기능 구현을 끝낸 후 타당한 이유가 있는 새로운 기술스택 및 디자인패턴을 도입하려 노력했습니다.
> 리액트의 장점을 활용하고 싶어서 컴포넌트를 작은 단위로 쪼개서 재사용하려고 노력했습니다.
> 
![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=footer)
