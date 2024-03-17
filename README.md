# [아루] WEB 프론트엔드 개발자(Lv1) 과제

### 요청 내용
1. Api 서버로부터 콘텐츠 목록을 불러와 화면에 표시합니다.
    - 목록 아이템 항목: 콘텐츠 타이틀, 좋아요 버튼, 좋아요 수
2. 목록 내 아이템을 선택하면 콘텐츠 상세 페이지로 이동합니다.
    - 콘텐츠 상세 페이지 항목: 콘텐츠 타이틀, 콘텐츠 본문, 좋아요 버튼, 좋아요 수
3. 좋아요 버튼 클릭 시 API를 통해 서버에 값을 업데이트 합니다.
    - 좋아요 버튼은 누를 때마다 좋아요 수의 카운트가 올라갑니다.
4. 상세 페이지 내에서의 좋아요 버튼 클릭 시 목록 내 아이템에도 좋아요 수 값이 업데이트가 되어야 합니다.


### 시연 영상
- 목록 아이템 조회
- 콘텐츠 상세 페이지
- 좋아요 기능(+ 업데이트 동기화)  
![Arooo _ 목록 - Chrome 2024-03-17 22-18-11](https://github.com/yngjnhykk/Arooo-project/assets/143480840/745a42de-5d97-4ac4-a626-bbc031dedf38)


### 사용 방법

- front 폴더를 내려받아 npm i 로 패키지 설치 후, npm run dev 로 로컬환경에서 실행.
- back 은 AWS 로 배포를 진행해 따로 내려받지 않아도 됩니다.
(아직 Node.js 는 익숙하지 않아 아직 서버상태가 불안정할 수 있습니다.) 
