# KW_OSS_Team2

## 광운대학교 컴퓨터정보공학부 2023-2학기 오픈소스소프트웨어설계및실습 2조

- 컴퓨터정보공학부 2020202054 이종혁
- 컴퓨터정보공학부 2020202065 박제영
- 컴퓨터정보공학부 2021202097 김희주

## 프로젝트 주제
### 학습 매니저 사이트

## [Project Summary]
현재까지의 프로젝트 진행상황은 다음과 같습니다.

- 대략적인 HTML 레이아웃 완성 및 페이지끼리의 연결 구현
- CSS를 통한 사이트 레이아웃 디자인 통일 및 개선 진행 중
(1차 디자인이 나왔으나, 더 간결하고 심플한 디자인으로 통일하기 위해 진행 중입니다.)
- 날짜 별 계획 설정 기능 구현 완료:
    추가 버튼 구현 완료
    수정 버튼 구현 완료
    삭제 버튼 구현 완료
    저장 버튼 시 수정/삭제/추가 버튼 비활성화 및 날짜 별로 변수 저장 완료
    -> 변수로 저장함으로써, 다른 페이지 기능 구현 시 입력 된 계획들을 활용 가능
- Main 페이지 구현 진행 중:
    Main 페이지를 어떻게 꾸밀 지 고민하다가, 학습 결과 확인 페이지과 다르게 "대략적인 진행상황"을 확인할 수 있도록 그래프를 띄우게 했습니다.
- 학습 시간 측정 기능 진행 중
- 학습 현황 비교 기능 진행 중

## [Project Schedule]
![스케쥴 사진](/image/schedule.png)

~ 11/30 학습 현황 비교 페이지 대략적 구현
        Main 페이지 구현
~ 11/31 전체적인 페이지 수정 작업
~ 12/03 전체적인 레이아웃 디자인 수정 및 통일
        시간 측정 기능 구현

## [Project Screenshot]
![계획 추가](/image/addplan.png)
원하는 날짜에 계획을 추가하는 기능 구현 완료
![계획 수정](/image/fixplan.png)
각 기능마다 계획을 수정하는 기능 구현 완료
![계획 삭제 전](/image/deleteplan1.png)
![계획 삭제 후](/image/deleteplan2.png)
각 기능마다 계획을 삭제하는 기능 구현 완료
![계획 저장](/image/saveplan.png)
저장 버튼이 눌리면 모든 추가/수정/삭제 버튼 비활성화 후
모든 계획을 변수에 저장 완료


![main페이지](/image/main.png)
구현 중인 Main페이지입니다. 학습 현황 페이지와는 다르게 "대략적인" 현황만 보여줍니다
(시간 측정 기능과 연계 예정)
![시간 측정](/image/recordtime.png)
시간 측정 기능입니다. 시간을 직접 측정해서 기록을 하거나,
직접 기록을 할 수 있는 기능도 구현 예정

![학습 현황](/image/studystatus.png)
그래프 작성을 위해 임의로 설정해둔 값이기 때문에 앞에 구현한 것과 연결 필요
학습 시간 비율 구현 예정

## [Individual Progress Status]
# 이종혁
- HTML 전체적인 레이아웃 및 흐름 구상 완료
- 각 페이지 별 HTML 구현 완료
- 학습 계획 추가, 수정 및 삭제 기능 구현 완료
- 학습 계획 저장을 통해 다른 페이지에서 활용할 수 있도록 변수로 저장 및 넘겨주기 완료
- CSS를 통한 페이지 전체적인 디자인 통일 및 개선 진행 중

# 박제영
- HTML 전체적인 레이아웃 및 흐름 구상 완료
- 각 페이지 별 HTML 구현 완료
- 학습 시간 측정 기능 진행 중 (타이머로 측정 방식, 직접 입력 방식)
- Main 페이지에 대략적인 진행 상황을 그래프로 나타내기 진행 중

# 김희주
- CSS로 페이지 디자인 1차 설정 완료 및 수정 진행 중
- 학습 현황 비교 기능 구현을 위한 차트 작성 및 진행 중