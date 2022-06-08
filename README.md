# Wikea

글로벌 홈퍼니싱 브랜드 IKEA의 **클론 프로젝트** 입니다.

![image](https://user-images.githubusercontent.com/63634174/147222946-28f05f50-9d94-44f7-bd8d-47e9bbb73048.png)

- 개발기간 :  2021.1 ~ 2021.2 (약 3주)
- 인원 : 3명 (프론트 2명, 프론트 + 백엔드 1명) 

## 관련 링크
#### 사이트 링크

[wIKEA](https://wikea.netlify.app/)

#### 클라이언트 깃헙 저장소 링크

[forCozi/ikea-clone-client](https://github.com/forCozi/ikea-clone-client)

#### 백앤드 서버 깃헙 저장소 링크

[forCozi/ikea-clone-server](https://github.com/forCozi/ikea-clone-server)

## 프로젝트 스택

#### 클라이언트

- JavaScript
- React
- Redux + redux-thunk
- styled-components

#### 백앤드 

- TypeScript
- puppeteer
- Node.js
- Express
- passport.js
- Sequelize
- MySQL

## 프로젝트 아키텍쳐

![developic V2 (1).png.png](https://res.craft.do/user/full/b1bfd0d5-f25f-9cb2-4956-fa895ea5961c/doc/124075C2-FDE8-4DBA-8070-67F4FEE980FE/F6FA16F7-9EF6-49F6-9779-E271F234BAAF_2/developic%20V2%201.png.png)

## 담당 구현 사항 

### 공통

- Redux, redux-thunk를 활용한 전역 상태 관리
- Styled-components를 활용한 레이아웃 및 스타일링
- 반응형 웹 구현

### 장바구니 페이지

- 유저 별 장바구니 상품 리스트 데이터 렌더링
- 수량 선택 탭을 활용해 상품 수량 변경 및 변경된 수량, 총액 출력
- 장바구니에서 위시리스트로 상품 이동, 삭제
- 주문 페이지로 상품 정보 전송 기능

### 리스트 페이지

- 카테고리 별 상품 리스트 데이터 렌더링
- 필터 별 이미지 변경 기능
- 옵션 별 상품 정렬 기능
- 더보기 버튼으로 추가 데이터 렌더링
- 장바구니에 상품 추가 기능
- 찜하기 기능

### 메인 페이지

- react-slick을 활용하여 슬라이드 배너(Carousel) 구현


## 구현 화면
### 메인 페이지

![banner-resize](https://user-images.githubusercontent.com/63634174/172617728-4fa73f47-2790-452c-a424-38e0be3201a7.gif)

- 진행중인 이벤트 및 프로모션을 출력하는 슬라이드 배너를 react-slick을 활용하여 Carousel 형태로 구현했다. 기본적으로 무한 반복되며 점 버튼을 클릭해 수동적으로 배너를 이동시킬 수 있다.

### 리스트 페이지
![list-resize2](https://user-images.githubusercontent.com/63634174/172617905-3eb44137-3458-4b85-b76e-5c39fe1bb5da.gif)

- 서버로 API 요청을 보내 각 카테고리에 해당하는 상품 데이터 목록을 렌더링한다.
- 더보기 버튼을 클릭해 추가 데이터를 로드할 수 있다.

![](https://images.velog.io/images/letthere/post/51576abd-25ec-4583-b85f-98640d857665/list3.gif)
-  필터 옵션으로 '제품'과 '디지털쇼룸' 클릭 시, 목록에서 불러오는 메인 이미지 데이터가 해당 옵션에 따라 변경된다. 
'제품' 옵션이 기본값이며, '디지털 쇼룸'에 해당하는 이미지가 없으면 '제품' 옵션 이미지를 보여주도록 조건 처리했다. 

![](https://images.velog.io/images/letthere/post/764cdc0e-93b3-4011-b720-153a9b58e82a/list2.gif)
- 마우스를 상품 위로 호버하면, 출력되는 이미지가 변경되고 장바구니&찜 아이콘이 나타나며, 상품에서 벗어나면 기존 상태로 돌아간다. 
- 로그인 한 유저의 경우, 위시리스트에 저장한 상품을 찜 아이콘 상태(비어있거나 채워짐)로 확인할 수 있다.
- 비어있는 찜 아이콘을 로그인 하지 않은 유저가 클릭할 경우 로그인 페이지로 이동하고, 로그인 한 유저가 클릭할 경우 아이콘이 채워진 상태로 변경되며 위시리스트에 상품이 추가된다.
- 채워진 찜 아이콘을 클릭하면, 위시리스트에 담긴 상품이 삭제된다. 

![ordering-resize](https://user-images.githubusercontent.com/63634174/172618216-0ab08994-6b5f-4244-8e9e-32ba51238a0c.gif)

- 리스트 페이지에서 출력하는 상품 목록을 특정 기준으로 정렬할 수 있도록 구현했다. 
- 기본값은 신제품이며, 낮은가격 순, 높은 가격 순, 이름 순, 고객평가 순, 가장 인기있는 순으로 세부 정렬 옵션 항목을 선택할 수 있다.


![](https://images.velog.io/images/letthere/post/911cc7e9-79a8-4fe0-bc6b-2888eff4a208/gocart.gif)
- 목록에서 상품 위로 호버 시 장바구니 버튼이 나타나고, 버튼을 클릭하면 해당 상품이 유저 장바구니에 추가된다. 


### 장바구니 페이지

![](https://images.velog.io/images/letthere/post/27ea1bae-091a-45f3-af06-80be474ef9ce/cart.gif)
- 유저의 로그인 상태를 확인하고, 로그인 한 유저의 경우 해당 유저의 장바구니에 담긴 상품 리스트를 렌더링한다. 

![](https://images.velog.io/images/letthere/post/d2161f08-a3e5-4d40-9547-1d12c4b63669/cartq.gif)
- 수량 선택 탭에서 원하는 수량을 선택해 장바구니에 담긴 상품의 수량을 변경할 수 있으며, 해당 삼품의 변경된 수량과 총액을 유저가 확인할 수 있고 변경된 정보를 서버에 업데이트 시킨다. 

![](https://images.velog.io/images/letthere/post/11d4e99f-da43-49a7-a73f-92f7d194783b/wishanddelete.gif)
- 장바구니의 상품을 위시리스트로 이동시키거나, 장바구니에서 삭제시킬 수 있다. 
- 알림 UI를 활용하여 유저가 해당 기능을 실행한 것을 확인할 수 있도록 구현했다.

![](https://images.velog.io/images/letthere/post/3e19202c-3faa-43b7-a9c2-3631b460d95d/pay.gif)
- 결제하기 버튼을 누르면 장바구니에 담긴 상품 정보를 가지고 주문 페이지로 넘어간다. 

### 반응형 웹 구현
![](https://images.velog.io/images/letthere/post/892cacd1-b492-44c7-b557-2ec9ef8a3c89/responsive2.gif)
- 모바일 기기를 지원하는 반응현 웹으로 구현했다.

-------

[프로젝트 회고](https://velog.io/@letthere/IKEA-CLONE-Project)


