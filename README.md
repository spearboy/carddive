# CARDIVE

## 소개
CARDIVE는 사용자가 다양한 신용카드를 비교하고 분석할 수 있도록 도와주는 혁신적인 플랫폼입니다. 이 플랫폼을 통해 사용자는 각 신용카드의 보상 프로그램, 연회비, 이자율, 혜택 등을 한눈에 확인할 수 있습니다. 또한, 사용자의 필요와 선호도에 맞춰 다양한 기준으로 신용카드를 필터링하고 정렬할 수 있는 기능을 제공합니다. 예를 들어, 여행 보상이 많은 카드, 연회비가 없는 카드, 또는 특정 가맹점에서 높은 적립률을 제공하는 카드를 손쉽게 찾아볼 수 있습니다. CARDIVE는 사용자들이 최적의 신용카드를 선택할 수 있도록 직관적이고 사용자 친화적인 인터페이스를 제공합니다. 신용카드 선택 과정에서 정보를 손쉽게 비교하고 분석하여, 사용자에게 가장 적합한 신용카드를 추천해드립니다.

## 조원
- 디자인: 박소현
- 개발: 이재혁, 조병현

## 과정
- 카드 데이터는 파이썬을 이용해 네이버 신용카드 사이트에서 수집했습니다.
- 디자인 컨셉은 신뢰를 주는 파란색을 주 컬러로 사용하였습니다.

## 주요 기능
- 신용카드 비교
- 카드 보상, 연회비, 이자율 등의 상세 정보 제공
- 사용자 맞춤형 필터링 및 정렬 기능

## 사이트 프리뷰
<img width="1678" alt="image" src="https://github.com/spearboy/carddive/assets/95023009/3c9c90ea-ad84-4fb2-a046-2ee8325a8c6e">   
<img width="1680" alt="image" src="https://github.com/spearboy/carddive/assets/95023009/3230b455-9f10-47f3-9e91-9cad922cff04">   
<img width="1675" alt="image" src="https://github.com/spearboy/carddive/assets/95023009/045d94cb-e5ec-4307-975a-8485264f20e0">

## 사용법
1. 사이트 접속: [CARDIVE](https://cardive.vercel.app/)
2. 카드 정보 확인 및 비교
3. 필터 및 정렬 기능을 사용하여 원하는 카드 찾기

## 기술 스택
- 프론트엔드: React
- 백엔드: Node.js
- 배포: Vercel


## 트러블 슈팅
- 파이썬이 크롤링에 실패했을때 마다 각종 레퍼런스를 통해 확인후 해결하였습니다.   
-- 파이썬을 이용한 데이터 크롤링 시 상세 페이지에 있는 정보를 가조오려 할 때 크롤링 프로세스가 정확한 데이터를 가져오지 못함.    
  ㄴ 이에대한 해결책으로 실제 사용자가 웹 페이지에서 데이터를 확인 하는 행동과 동일한 동작을 프로그램화 하여 파이썬으로 실행.    
     코드 구성 후 원하는 데이터 모두 자동으로 취득 가능헤졌음.

- 배포시 네트리파이에서 빌드 문제가 있어 버셀에서 배포 문제를 해결했습니다.
-- 배포시 네트리파이에서는 네버유즈 에러가 빌드에러로 연결되는 경우가 많이 있었습니다.
  ㄴ 이에 대한 해결 방안으로 우선 버셀에서 네버유즈 에러를 크리티컬한 에러로 보지 않아 수정했습니다.
 
