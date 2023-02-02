# GAEthering 프로젝트 프론트엔드 팀

> 🥲 서버비용의 문제로 서버 배포가 중단되었습니다.

## 구현 화면

### 회원가입

- 이메일 인증

  - 이메일로 발송된 UUID로 생성된 무작위 코드를 입력하여야 합니다.
  - 이메일 인증을 완료하지 않으면 다음으로 넘어갈 수 없습니다.
    ![회원가입-이메일인증](./readme/1.%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9D%B4%EB%A9%94%EC%9D%BC%EC%9D%B8%EC%A6%9D.gif)

- 회원가입 과정
  - 각 항목마다 validation을 진행하며 통과하지 못하면 다음 단계로 갈 수 없습니다.
    ![회원가입-과정](./readme/2.%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-rhkwjd.gif)

### 프로필

- 반려동물 추가
  ![프로필-반려동물-추가](./readme/3.%ED%94%84%EB%A1%9C%ED%95%84-add-pet.gif)

- 반려동물 수정
  ![프로필-반려동물-수정](./readme/4.%ED%94%84%EB%A1%9C%ED%95%84-edit-pet.gif)

### 게시판(동네정보, 질문게시판)

- 게시판 목록에서는 내용의 일부와 대표이미지만 볼 수 있습니다.
- **더보기**나 게시글 제목을 클릭하면 상세내용을 확인할 수 있습니다.

- 댓글 작성
  ![게시판-댓글-작성](./readme/5.%EA%B2%8C%EC%8B%9C%ED%8C%90_comment.gif)

- 게시글 작성
  - 게시글에는 최대 3개의 이미지를 등록할 수 있습니다.
  - 이미지는 삭제가 가능합니다.
    ![게시판-게시글-작성](./readme/6.%EA%B2%8C%EC%8B%9C%ED%8C%90-add.gif)

### 로그인, 로그아웃

- 로그인 시 잘못된 내용을 유저가 쉽게 파악할 수 있도록 하였습니다.
  ![로그인](./readme/7.log-in.gif)
  ![로그아웃](./readme/8.log-out.gif)

### 채팅(산책모임) 기능

- 채팅방 만들기

  - 채팅방을 만들 때 원하는 산책시간을 지정할 수 있습니다.
    ![채팅-채팅방-만들기](./readme/9.%EC%B1%84%ED%8C%85%EB%B0%A9-add.gif)

- 여러 유저간의 원활한 채팅이 가능합니다.
  ![채팅-채팅하기](./readme/10.%EC%B1%84%ED%8C%85%EB%B0%A9-chat.gif)

### 반응형 UI

- 반응형 UI를 적용하여 모바일에서도 사용이 가능합니다.
  ![반응형UI](./readme/11.%EB%B0%98%EC%9D%91%ED%98%95.gif)

---

## 설계 사항

### UI Prototype [🔗Figma🎨](https://www.figma.com/file/AHNY7fBcHgAllLdICGGoO9/GAEthering?node-id=0%3A1&t=WEimQyz3wO5P4bN4-1)

![Figma](./readme/Figma.png)

### 컴포넌트 구조 설계

- 원활한 협업을 위해 컴포넌트를 미리 구조화하여 설계하였습니다.
  ![컴포넌트](./readme/Components.png)

### 폴더 구조

```bash
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂Chat
 ┃ ┣ 📂ChatRoom
 ┃ ┣ 📂Community
 ┃ ┣ 📂Form
 ┃ ┣ 📂NavBar
 ┃ ┣ 📂Profile
 ┃ ┣ 📂Root
 ┃ ┣ 📂SignUp
 ┃ ┗ 📂widgets
 ┣ 📂data
 ┣ 📂Hooks
 ┣ 📂pages
 ┣ 📂themes
 ┗ 📂util
```

| 폴더 이름  | 용도    |
| ---------- | ------- |
| api        | somting |
| assets     | somting |
| components | somting |
| data       | somting |
| hooks      | somting |
| pages      | somting |
| themes     | somting |
| utls       | somting |
