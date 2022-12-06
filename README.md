# <h1 align="center">🚃 TripLog, <br/> 여행 계획부터 정산까지 하나로 끝내는 트립로그</h1>
- - -

## 💻 프로젝트

| 제작 의도 | 여행을 하는 순간뿐 아니라! 과정까지 기록을 남겨 브이로그같은 서비스를 구현하고자 트립로그라는 이름으로 제작하였습니다|
| :------------: | -----------------------------|
| 개발기간 | 2022년 10월 19일 ~ 11월 4일              |
| 플랫폼   | Web |
| 개발 인원  | 총 4명 (프론트엔드 2명, 백엔드 2명) |
| Page Link  |  <a>http://13.125.234.1:3000/</a>|<br/><br/>

- - -
## 🔨 개발 환경

| 환경     | 상세 스택                                     |
| ------------ | -------------------------------------------------- |
| `언어` | HTML, CSS, Javascript, Node.js, MongoDB                  |
| `프레임워크 & 라이브러리`   | React, Redux, React Bootstrap, React-Calendar, styled-component |
| `보조 프로그램`   |  Illustration, Figma, AWS |<br/><br/>

- - -
## 💁🏻‍♀️ ABOUT US

| [@thals0](https://github.com/thals0) | [@bokjunwoo](https://github.com/bokjunwoo) | [@lzns960](https://github.com/lzns960) | [@ddingyull](https://github.com/ddingyull) |
|:---:|:---:|:---:|:---:|
|<img width="340" alt="스크린샷 2022-12-01 오후 3 24 57" src="https://user-images.githubusercontent.com/101865071/204981733-8d398e47-8979-4b34-890b-82e8e0023074.png">|<img width="340" alt="스크린샷 2022-12-01 오후 3 28 19" src="https://user-images.githubusercontent.com/101865071/204981752-61a29b2d-5741-48c7-9660-3a85f63c0cef.png">|<img width="340" alt="스크린샷 2022-12-01 오후 3 26 34" src="https://user-images.githubusercontent.com/101865071/204981764-bddcd004-2947-4ae7-a6fd-6cf8e5fa1d7e.png">|<img width="340" alt="KakaoTalk_Photo_2022-12-01-15-33-17" src="https://user-images.githubusercontent.com/101865071/204982269-e0ef02e5-a0a3-4455-8de7-30d59f991f80.png">|
| `Main` <br/> `Web View` | `Sub Main` <br/> `List & Detail` <br/> `Mypage UI` | `Category Content View` <br/> `Search View` |`Category Content View` <br/> `Search View` |

<br/>

## 📁 유저 플로우
<p align="center"> <img width="700" alt="triplog흐름도" src="https://user-images.githubusercontent.com/105038512/204964052-4c1c0cae-13f1-4642-bde6-da5820969dde.png"></p>
<br/>


## <span style='background-color:#fff5b1'> 📍 구현한 핵심 기능</span><br/>
1. 지도로 동선을 보면서 일자별로 여행계획을짜고 친구에게 공유할 수 있는 기능<br/>
2. 체크리스트, 가계부처럼 부가적으로 일상에서 필요한 기능<br/>
3. 만개가 넘는 많은양의 데이터를 지역에 따라 소팅된 정보들에 접근하는 기능<br/><br/>

  
## <span style='background-color:#fff5b1'>📍 페이지별 상세 기능 </span><br/>

### [로그인 (로컬 / 카카오), 로그아웃, 회원가입]
<p align="center"><img width=700" alt="login" src="https://user-images.githubusercontent.com/105038512/200729190-44bc4714-1df0-4dab-bd04-c505660397bd.png"></p>

  • 백엔드에서 중복검사를 통해 같은 이메일로 중복 가입 불가
  
  • 로그인 정보를 미리 담아둬서 바로 로그인 가능
  
  • 로그인을 하면 로그아웃 하기 전까지 로그인 정보를 리덕스에 저장해서 
    페이지 이동마다 로그인 정보 가져와 사용 가능
    이를 통해 각 페이지 별로 isLogin 확인 할 수 있고,
    닉네임 정보 벡에 보내서 해당 유저의 정보만들 받을 수 있음
    
  • KakaoDveloper 앱 제작하여 카카오 로그인이 가능하도록 구현
  <br/><br/>

### [메인] 모든 지역으로 진입 가능한 메인 페이지
 <img width="1000" alt="main" src="https://user-images.githubusercontent.com/105038512/204967273-fc7120ad-950a-464f-89da-5c7538379300.png"><br/>
                                                                                                                       
### [서브메인] 각 지역별 메인 페이지 ( 지역 아이콘 선택에 따라 해당 지역의 데이터만 보여짐)
  • 각 지역의 메인페이지로 저희가 추천하는 여행지들을 추천받을 수 있도록 지역코드를 통해 변수로 받아 라우팅 될 수 있도록 구현<br/>
  • 단, 각 지역의 이름, 특색 이미지가 보여지되, 페이지가 분리되지 않도록 배열을 이용해 이미지를 구현<br/>

https://user-images.githubusercontent.com/105038512/200736502-84117ff0-5726-4bf9-9ab4-14661af94ac4.mov

<br/><br/>


### [여행 날짜 선택] 각 지역에서 원하는 날짜 선택 
  • 첫번째 클릭값과 두번째클립값, 그리고 그 기간을 하나씩 넣은 배열을 통해 컴포넌트 구현<br/>
<img width="1000" alt="캘린더" src="https://user-images.githubusercontent.com/105038512/200733020-8a5975f0-cabc-4267-a942-9418d83b9c04.png">
<br/><br/>



### [여행 계획 짜고 공유] 여행을 계획하는 페이지로 이동 
  • 나만의 여행일기장으로 느껴질 수 있도록 유저의 여행일자를 화면에 표시
  • 장소추가 눌렀을때 해당지역에 대해 여행지를 검색
   1) 지역코드를 통해 해당 지역의 api데이터만 가져와서 해당 지역 여행지를 보여줌
   2) 리듀서에 저장해놓은 지도좌표를 통해 좌표값으로 반복문으로  지도가 보여지도록 구현
   3) 이때, 추후에 날짜별로 각각 여행지를 추가하기 위해 리듀서에 "일자별 컴포넌트의 idx값, 카카오지도의 idx값" 저장하여 반복문으로 컴포넌트개수만큼 구현하였음 
   4) 클릭한 지역의 데이터를 리듀서에 배열로 담은 후 추가되는 item에 데이터를 불러와서 넣어줍니다 
      이때, 아까 저장해두었던 지도 idx또한 따로 저장해줘서 각각 좌표가 따로 찍힐 수 있도록 하였습니다.
   5) 계획을 완료하였다면 저장하기 버튼을 통해 저장
   6) 카카오톡으로도 공유도 할 수 있음<br/>

https://user-images.githubusercontent.com/105038512/200736340-20a3dfc4-236b-48b1-afa3-956a8b275787.mov
                                                                     
### [나만의 체크리스트]
<img width="1000" alt="checklist" src="https://user-images.githubusercontent.com/105038512/204967491-d8d44727-aca9-4bc7-9c62-3e019eb74cbc.png">
• Redux에 저장된 유저 정보로 DB에서 해당 유저의 체크리스트 불러옴<br/>
• React useState 사용하여 check여부 확인 후 mongnDB에 저장<br/>
• 아이템 추가하기, 삭제하기 또한 useState 활용하여 DB에 저장<br/>
• useEffect를 활용하여 추가, 삭제, 체크시 바로 체크리스트에 반영되도록 함 (랜더링)<br/>
• react bootstrap으로 ui 구현<br/><br/>

### [가계부]
 
• React-Calendar 라이브러리로 날짜 선택<br/>
• 내용, 금액 입력 후 등록시 가계부에 등록 완료<br/>
• 정산 할 인원이 늘어나면 명당 계산 금액 계산<br/>
• 가계부 초기화 가능<br/><br/>
                                                                                                                                              
### [여행지 목록 페이지]
<img width="1000" alt="list" src="https://user-images.githubusercontent.com/105038512/204967887-90e177c1-154b-4746-b3b4-3a66f7452c6f.png"><br/>
• 각 지역 별 sorting 후 지역안에서도 관광, 문화, 음식, 숙소, 쇼핑의 카테고리로 다시 한 번 sorting (지역코드, 카테고리 아이디를 변수로 활용)<br/><br/>
                                                                                                                                              
### [디테일 페이지]
• useState, •useEffect를 활용한 좋아요 및 조회수 구현<br/>
• axios를 활용하여 서버와 연결<br/>
• 리뷰 업데이트를 redux에 저장하여 리뷰가 생성 혹은 삭제 될 때마다 페이지 재랜더링<br/><br/>
                                                                                                                                         
### [마이 페이지]페이지에서 활동한 내용은 마이페이지에서 확인할 수 있음
                                                                                                                                                                                                                                                                              
• Redux를 활용하여 로그인 확인 후 axios를 통해 DB에서 해당 유저 정보 반환<br/>
• 여행 조회, 나만의 체크리스트, 가계부, 내가 쓴 리뷰 등 조회 가능<br/>
• 체크리스트, 가계부는 업데이트 가능<br/>
• 재랜더링 되지 않도록 기본적인 nav는 고정하고 데이터에 따라서만 랜더될 수 있도록 tab을 활용하여 구현<br/>
                                                                                                                                         
https://user-images.githubusercontent.com/105038512/200736310-1550330e-407d-47ec-ac9d-c90737e3bec6.mov
   








