# Proto.KIL Portfolio Content Review

이 문서는 포트폴리오에 표시되는 텍스트를 코드와 분리하여 검토하기 위한 원고입니다.

- 이 파일을 수정해도 웹사이트에 자동 반영되지는 않습니다.
- 문구 검토가 끝난 뒤 `index.html`과 `scripts/projects.js`에 반영합니다.
- 확인되지 않은 기간, 역할, 수치와 결과는 `TODO` 상태로 유지합니다.
- 공개 이름은 `Proto.KIL`을 사용합니다.

---

# 1. 사이트 기본 정보

## 브라우저 제목

Proto.KIL | Robotics Hardware Portfolio

## 사이트 설명 제안

설계부터 제작, 테스트와 개선까지 직접 수행하며 로봇의 완성도를 높여가는 Proto.KIL의 로봇 하드웨어 포트폴리오.

## 공개 이름

Proto.KIL

## 분야

- Mechanical Engineering
- Robotics Hardware
- Embedded Systems
- System Integration

---

# 2. 내비게이션과 공통 버튼

## 메뉴

- About
- Projects
- Case Study
- Skills
- Experience
- Contact

## 공통 버튼

- View Projects
- Contact
- Back to Top
- Back to Projects

## 접근성 문구

- 모바일 메뉴 열기
- 주요 메뉴
- 맨 위로 이동

---

# 3. Hero

## Eyebrow

Mechanical · Robotics · Embedded Systems

## 핵심 문장

설계부터 제작, 테스트와 개선까지 직접 수행하며 로봇의 완성도를 높여갑니다.

## 보조 문장

기계공학 기반의 설계 역량과 임베디드·비전·ROS 프로젝트 경험을 바탕으로, 아이디어를 CAD 모델과 하드웨어, 제어 로직, 테스트 결과까지 연결하는 엔지니어를 지향합니다.

## 핵심 요약

### Featured

**Basketball Shooting Robot**

OpenCV 기반 인식과 Arduino 제어를 결합한 대표 프로젝트

### Flow

**Design to Test**

CAD 설계, 센서 통합, 제어 로직, 디버깅까지 연결

### Stack

**Vision / ROS / LiDAR**

실제 로봇 플랫폼에서 설명 가능한 기술 중심

## 핵심 역량 태그

- Mechanical Design
- Robot Prototyping
- OpenCV
- Arduino
- ROS
- LiDAR Mapping
- Sensor Integration

## Hero 수치

- 6 — Documented Projects
- CAD — Mechanical Design
- ROS — Mapping / Control

## 빠른 포트폴리오 요약

- Selected Work — 3 engineering case studies
- Best Case — Vision-guided shooting robot
- Core Skills — CAD, embedded control, sensing

---

# 4. About

## 섹션 제목

기구 설계와 실전 구현 사이의 간극을 줄이는 Proto.KIL

## Profile Summary

Proto.KIL은 한국교통대학교 기계공학과에서 기계 설계와 로봇 시스템 구현을 중심으로 프로젝트를 수행해왔습니다. 특히 농구 슈팅 로봇, LiDAR 기반 맵핑 로봇, 라인트레이싱 로봇, 센서 기반 연구 경험을 통해 단순한 설계 결과물이 아니라 실제 환경에서 동작하는 시스템을 만드는 과정에 집중했습니다.

포트폴리오에서는 결과물보다 **문제 정의, 시행착오, 구조적 선택, 개선 과정**을 중심으로 정리했습니다.

## Engineering Direction

Proto.KIL의 관심 분야는 로봇 하드웨어, 기구 설계, 센서 통합, 자율주행 로봇 시스템입니다. 제품이 실제로 움직이기 위해 필요한 구조, 전장, 제어, 테스트 조건을 함께 고려하는 엔지니어를 지향합니다.

### 키워드

- Problem Definition
- Prototype
- Test & Debugging
- System Integration

---

# 5. 프로젝트 목록 섹션

## Featured Projects 제목

대표 프로젝트

## Featured Projects 설명

각 프로젝트는 단순한 결과물 소개가 아니라, 제작 이유와, 문제해결 과정을 중심으로 정리했습니다.

## 프로젝트 필터

- All
- Robotics
- Vision
- Mapping

## Case Study 제목

프로젝트 상세


## Other Projects 제목

추가 프로젝트

---

# 6. Project 01 — Basketball Shooting Robot

## 프로젝트 번호

Project 01

## 제목

Basketball Shooting Robot

## 카드 설명

임베디드 환경의 연산 한계를 분석하고 OpenCV 기반 경량 비전 파이프라인과 슈팅 기구를 통합한 로봇입니다.

## 간단한 설명

골대 인식, 거리 조절, 정렬 판단과 슈팅 동작을 하나의 로봇 시스템으로 연결한 프로젝트입니다.

## 기본 정보

| 항목 | 내용 |
|---|---|
| Period | 2024.07 - 2025.06 |
| Team | 2 members |
| Role | Team Lead · Mechanical Design · Computer Vision · System Integration · Motion Control |
| Type | Capstone Design |

## 태그

- OpenCV
- Raspberry Pi
- Arduino
- Servo Control
- Encoder / PID

## Project Story

약 1.2m 거리의 골대를 카메라로 인식하고, 로봇이 골대와 지정 거리로 정렬된 뒤 공을 발사하도록 구성했습니다.

초기에는 TensorFlow Lite와 YOLOv5를 검토했지만 Raspberry Pi에서 필요한 실시간성을 확보하기 어려워 OpenCV 기반 영상처리로 전환했습니다.

## Problem

작은 모터로 목표 거리까지 공을 보내야 했고, 제한된 Raspberry Pi 연산 성능에서 골대 위치를 안정적으로 판단해야 했습니다.

## Approach

슈팅 기구의 기계적 이득을 조정하고 HSV 마스크, Canny Edge, contour와 사각형 후보 검출을 조합했습니다. 중심 좌표가 허용 범위에서 20프레임 연속 유지될 때만 슈팅 신호를 발생하도록 조건을 추가했습니다.

## System Architecture

1. USB Camera
2. Raspberry Pi<br>OpenCV
3. Center & Distance Logic
4. Arduino Mega<br>Wheel Alignment
5. Shooting Motor<br>PID

카메라 입력 → 골대 형상 검출 → 위치 안정화 → Serial 명령 → Wheel Alignment → PID Shooting Control

## Engineering Challenges

1. YOLOv5 추론 속도가 낮아 실시간 주행과 제어가 불안정해지는 문제
2. 제한된 모터 출력으로 목표 거리와 높이까지 공을 보내야 하는 문제
3. 조명 변화와 중심 좌표 흔들림으로 슈팅 신호가 잘못 발생할 수 있는 문제

## Result & Lesson

하드웨어 제약이 있는 실시간 시스템에서는 가장 복잡한 알고리즘보다 전체 제어 주기를 안정적으로 유지하는 방법이 중요하다는 점을 확인했습니다.

테스트에서 약 60%의 슈팅 성공률을 확인했습니다.

**TODO:** 반복 테스트 횟수와 조건별 결과 정리 필요.

## Project Media

- Main — 농구 슈팅 로봇 대표 사진
- Assembly — 농구 슈팅 로봇 조립 구조
- Circuit — 농구 로봇 회로 구성
- Mechanism — 슈팅 메커니즘 상세
- Demo — 실제 작동 영상

---

# 7. Project 02 — Mountain Rescue Robot

## 프로젝트 번호

Project 02

## 제목

Mountain Rescue Robot

## 카드 설명

산악 환경에서 위험 요소와 조난자를 탐색하기 위해 복수 센서와 이동 플랫폼을 통합한 구조 로봇 프로젝트입니다.

## 간단한 설명

사람이 접근하기 어려운 산악 지형에서 탐지와 맵핑을 수행하기 위한 구조 로봇 시스템 프로젝트입니다.

## 기본 정보

| 항목 | 내용 |
|---|---|
| Period | TODO: 확인 필요 |
| Team | TODO: 확인 필요 |
| Role | TODO: 담당 범위 확인 필요 |
| Type | Rescue Robotics |

## 태그

- ROS
- LiDAR
- Depth Camera
- Sensor Integration

## Project Story

산악 환경은 경사, 장애물, 시야 차단과 비정형 지형 때문에 실내·평지용 이동 로봇보다 복합적인 센서 구성과 구조 안정성이 필요합니다.

LiDAR, Depth Camera, 열화상 센서와 이동 플랫폼이 서로 어떤 정보를 담당하고 어떻게 연결되는지를 중심으로 전체 시스템을 구성했습니다.

## Problem

단일 센서나 평지용 이동 구조만으로는 산악 환경의 지형과 조난자 탐색 조건을 안정적으로 처리하기 어렵습니다.

## Approach

LiDAR 기반 맵핑, 깊이 정보와 열화상 탐지의 역할을 구분하고, 비정형 지형을 고려한 이동 플랫폼과 센서 통합 구조를 설계했습니다.

## System Architecture

1. Mobile Platform
2. LiDAR Mapping
3. Depth Camera
4. Thermal Sensor
5. Detection Logic

이동 플랫폼과 복수 센서의 역할을 분리한 뒤 탐색·탐지 흐름으로 통합

## Engineering Challenges

1. 비정형 지형에서 주행 안정성과 장애물 대응을 함께 고려해야 하는 문제
2. 서로 다른 센서의 좌표, 시야와 탐지 범위를 통합해야 하는 문제
3. 센서와 구동계가 추가될수록 중량, 전원과 기구 배치 제약이 커지는 문제

## Result & Lesson

**TODO:** 실제 구현 범위, 주행·탐지 결과와 개선 과정 확인 필요.

## Project Media

- System Overview — TODO: 전체 로봇 사진 또는 CAD 조립도와 센서 배치 자료 필요
- Field Validation — TODO: 산악 환경 주행, 맵핑 또는 탐지 결과 영상 필요

---

# 8. Project 03 — Custom ROS Mapping Robot

## 프로젝트 번호

Project 03

## 제목

Custom ROS Mapping Robot

## 카드 설명

직접 구성한 모터·LiDAR·전원 시스템을 ROS 명령과 연결한 모바일 맵핑 플랫폼입니다.

## 간단한 설명

상용 플랫폼이 아닌 커스텀 이동 로봇에서 Teleoperation, 모터 제어와 LiDAR 맵핑 흐름을 구성한 프로젝트입니다.

## 기본 정보

| 항목 | 내용 |
|---|---|
| Period | TODO: 확인 필요 |
| Team | TODO: 확인 필요 |
| Role | TODO: 담당 범위 확인 필요 |
| Type | ROS Mapping |

## 태그

- ROS
- YDLidar
- Serial
- Motor Control

## Project Story

YDLidar X4 Pro와 엔코더 모터를 사용한 커스텀 플랫폼에서 키보드 제어 명령을 받아 실제 바퀴 구동으로 전달하는 흐름을 구성했습니다.

ROS, RViz, 시리얼 통신과 Arduino 모터 제어가 연결되는 전체 데이터 흐름을 확인하는 데 집중했습니다.

## Problem

직접 제작한 이동 플랫폼에서 ROS 명령, 시리얼 통신, 모터 제어와 LiDAR 좌표계를 끊김 없이 연결해야 했습니다.

## Approach

Teleoperation과 cmd_vel 흐름을 Arduino 구동 제어로 전달하고, LiDAR 장착 높이와 Static TF 설정을 함께 검토했습니다.

## System Architecture

1. Keyboard Teleop
2. cmd_vel
3. ROS Node
4. Serial / Arduino
5. Motor Drive & LiDAR

Teleop → cmd_vel → ROS Node → Serial → Arduino 모터 제어 / LiDAR → RViz

## Engineering Challenges

1. 로봇 좌표계와 LiDAR 좌표계의 위치 관계를 정확히 설정해야 하는 문제
2. Ubuntu와 ROS 버전, 컴퓨팅 보드의 호환성을 검토해야 하는 문제
3. 소프트웨어 명령과 실제 모터 응답 사이의 차이를 조정해야 하는 문제

## Result & Lesson

**TODO:** 최종 ROS 버전, SLAM 패키지, 완성 지도와 반복 주행 결과 확인 필요.

## Project Media

- Robot Platform — TODO: LiDAR 장착 위치와 구동계가 보이는 실제 플랫폼 사진 필요
- RViz / Mapping Result — TODO: 실제 지도 결과, TF 구성 또는 주행 시연 자료 필요

---

# 9. Project 04 — Line-Tracing Cleaning Robot

## 프로젝트 번호

Project 04

## 제목

Line-Tracing Cleaning Robot

## 카드 설명

다중 컬러 센서와 엔코더 모터를 이용해 여러 색상의 경로를 순환하며 청소하도록 구성한 로봇입니다.

## 간단한 설명

색상 라인을 따라 이동하고 각 경로의 끝에서 방향을 전환해 다음 청소 구간으로 이동하는 로봇 프로젝트입니다.

## 기본 정보

| 항목 | 내용 |
|---|---|
| Period | TODO: 확인 필요 |
| Team | TODO: 확인 필요 |
| Role | TODO: 담당 범위 확인 필요 |
| Type | Embedded Robotics |

## 태그

- Arduino Mega
- TCS34725
- TCA9548A
- State Machine

## Project Story

Red, Blue, Light Green, Green 라인을 구분하고 갈색 바닥과의 차이를 이용해 지정된 청소 경로를 반복하도록 구성했습니다.

여러 컬러 센서를 동시에 사용하면서 주행, U턴과 청소 동작이 이어지는 상태 흐름을 설계했습니다.

## Problem

동일 I2C 주소를 사용하는 컬러 센서 3개를 연결하고, 센서별 편차를 보정하면서 복수 경로를 반복 주행해야 했습니다.

## Approach

TCA9548A I2C 멀티플렉서로 센서를 분리하고, 엔코더 모터와 경로 상태머신을 결합해 라인 추종과 U턴을 구성했습니다.

## System Architecture

1. Color Sensors
2. TCA9548A
3. Arduino Mega
4. Motor Driver
5. Encoder Motors / Cleaning Unit

색상 감지 → 경로 상태 판단 → 모터 제어 → 종단 감지 → U턴 및 다음 경로 이동

## Engineering Challenges

1. 동일 주소의 I2C 센서를 동시에 사용해야 하는 문제
2. 센서 개체 편차와 바닥색에 따른 인식 차이를 보정해야 하는 문제
3. 라인 추종과 U턴, 청소 동작을 하나의 상태 흐름으로 연결해야 하는 문제

## Result & Lesson

**TODO:** 색상 기준값, 반복 주행 성공률과 개선 과정 확인 필요.

## Project Media

- Sensor Layout — TODO: 컬러 센서 3개의 배치와 하부 구조 사진 필요
- Route Validation — TODO: 다중 색상 라인 반복 주행 영상 필요

---

# 10. Project 05 — Photoacoustic Gas Sensor Research

## 프로젝트 번호

Project 05

## 제목

Photoacoustic Gas Sensor Research

## 카드 설명

VOCs를 ppb 수준에서 검출하기 위한 PAS 센서 구조와 Lock-in Amplifier 기반 신호 처리 연구입니다.

## 간단한 설명

미세 광음향 신호를 검출하기 위한 센서 구조와 아날로그 신호 처리 회로를 연구한 학부 연구 프로젝트입니다.

## 기본 정보

| 항목 | 내용 |
|---|---|
| Period | TODO: 확인 필요 |
| Team | TODO: 확인 필요 |
| Role | TODO: 담당 범위 확인 필요 |
| Type | Undergraduate Research |

## 태그

- PAS
- Lock-in Amplifier
- Signal Processing

## Project Story

VOCs를 ppb 수준에서 검출하기 위한 NDIR 및 Photoacoustic Spectroscopy 기반 센서 연구에 참여했습니다.

센서 구조뿐 아니라 Pre-amplifier, Band-pass Filter, Lock-in Amplifier와 위상 제어를 포함한 신호 처리 흐름을 다뤘습니다.

## Problem

미세 광음향 신호에서 잡음을 줄이고 기준 신호와 측정 신호의 위상을 맞춰 유효 성분을 분리해야 했습니다.

## Approach

전치 증폭, 대역 통과 필터, 위상 조절과 Phase Sensitive Detector를 연결한 Lock-in Amplifier 구조를 연구했습니다.

## System Architecture

1. NDIR / PAS Cell
2. Pre-amplifier
3. Band-pass Filter
4. Phase Control
5. Lock-in Detection

광음향 신호 → 증폭 및 필터링 → 기준 위상 정렬 → 동기 검출 → 결과 분석

## Engineering Challenges

1. 미세 신호가 회로 잡음과 환경 변화에 묻히는 문제
2. 필터 대역과 위상 조건이 측정 결과에 직접 영향을 주는 문제
3. 기계·광학 센서 구조와 전자 신호 처리 조건을 함께 조정해야 하는 문제

## Result & Lesson

**TODO:** 확정된 연구 성과, 본인 담당 범위와 실험 결과 확인 필요.

## Project Media

- Experiment Setup — TODO: PAS 센서 및 측정 장비 구성 사진 필요
- Signal Evidence — TODO: 필터 전후 파형 또는 위상 측정 결과 필요

---

# 11. Project 06 — DIY Delta 3D Printer

## 프로젝트 번호

Project 06

## 제목

DIY Delta 3D Printer

## 카드 설명

프레임, 베드, 전장, 냉각과 펌웨어를 직접 선정하고 통합한 델타 구조 3D 프린터입니다.

## 간단한 설명

기성품 조립을 넘어 주요 구조와 전장 부품을 직접 선정하고 통합한 델타 3D 프린터 프로젝트입니다.

## 기본 정보

| 항목 | 내용 |
|---|---|
| Period | TODO: 확인 필요 |
| Team | Personal Build |
| Role | TODO: 담당 범위 확인 필요 |
| Type | Machine Design |

## 태그

- Klipper
- TMC2209
- 24V System
- Mechanical Build

## Project Story

Ø310mm 빌드 베드, 24V 전원, MKS Gen V2.1 보드, TMC2209 드라이버와 Klipper 기반 시스템을 구성했습니다.

베드 체결, 전원 용량, 배선, 냉각과 델타 기구 보정을 개별 부품이 아닌 하나의 장비 시스템으로 검토했습니다.

## Problem

열팽창, 원형 베드 체결, 24V 고전류 배선과 델타 기구의 기하학적 보정을 함께 고려해야 했습니다.

## Approach

6061 알루미늄 캐리어와 6점 지지 베드 구조를 검토하고, TMC2209와 Klipper/Mainsail 기반 제어 구성을 선택했습니다.

## System Architecture

1. Delta Frame
2. Heated Bed
3. MKS Gen V2.1
4. TMC2209 / Motors
5. Klipper / Mainsail

기구 프레임과 베드 → 24V 전원 및 구동계 → 펌웨어와 보정 환경 통합

## Engineering Challenges

1. 가열 과정의 열팽창을 고려해 베드를 안정적으로 체결해야 하는 문제
2. 약 14.6A급 24V 부하를 고려한 배선과 전원 구성이 필요한 문제
3. 델타 구조의 기하학적 오차와 베드 평면을 보정해야 하는 문제

## Result & Lesson

**TODO:** 출력 정밀도, 반복 출력 결과와 열 안정성 검증 자료 필요.

## Project Media

- Mechanical Build — TODO: 프레임, 델타 암과 베드 조립 사진 필요
- Print Validation — TODO: 캘리브레이션 결과와 실제 출력물 사진 필요

---

# 12. Project Evidence 안내

## 섹션 제목

프로젝트마다 최소 두 종류의 근거 자료를 배치합니다.

## 설명

완성 사진 한 장만으로는 설계 판단과 문제 해결 과정을 설명하기 어렵습니다. 각 프로젝트에는 전체 구조와 실제 검증을 서로 다른 미디어로 보여주는 방식을 권장합니다.

## 미디어 유형

- System Overview — 전체 로봇 / CAD 조립도
- Design Evidence — 회로 / 센서 배치 / 메커니즘
- Validation Evidence — 작동 영상 / 측정 결과 / 실패 비교

## 미디어 작성 원칙

프로젝트마다 최소 두 개의 미디어를 사용하되 같은 장면을 반복하지 않습니다. 하나는 시스템 구성을, 다른 하나는 작동 또는 검증 결과를 설명하며 자료가 없는 경우 TODO로 표시합니다.

---

# 13. Skills

## 섹션 제목

사용 기술 및 도구

## 설명

숙련도는 과장된 상·중·하가 아니라, 프로젝트에서 실제로 사용했고 면접에서 설명 가능한 범위를 기준으로 표시했습니다.

## 숙련도 기준

### Familiar

참고 자료 기반으로 이해·수정 가능

### Applied

프로젝트에 직접 적용하고 설명 가능

### Core

핵심 구현·구조 선택·한계 설명 가능

## Mechanical / CAD

### Inventor — Applied

로봇 구조물, 링크, 브라켓, 조립 구조 설계 및 GLB 추출용 모델 정리.

### AutoCAD — Familiar

2D 도면 확인, 치수 정리, 간단한 형상 수정 중심으로 사용.

### 3D Modeling — Applied

제작 가능한 구조를 고려한 모델링, 부품 배치, 간섭 검토 경험.

### Mechanism Design — Applied

서보 링크 구조, 슈팅 메커니즘, 센서 마운트 등 로봇 기구 설계 중심.

## Robotics / Embedded

### Arduino — Core

센서 입력, 모터 제어, 릴레이, 시리얼 통신, millis 기반 비차단 로직 구현.

### Servo Control — Applied

PCA9685 기반 다중 서보 제어 및 슈팅·정렬 동작 구현 경험.

### Encoder Motor — Applied

엔코더 모터 연결, 속도 피드백, PID 제어 구조 구성 경험.

### Serial Communication — Applied

Raspberry Pi·PC와 Arduino 간 명령 전달, Shoot 트리거, cmd_vel 전달 구조 구현.

## Software / Vision / ROS

### Python — Applied

OpenCV 처리, 카메라 입력, 조건 판단, 시리얼 연동 중심의 프로젝트 코드 작성.

### OpenCV — Applied

HSV, Canny, contour, 사각형 후보 검출, 중심 좌표 안정화 로직 구현.

### YOLOv5 — Familiar

커스텀 데이터 학습과 추론 테스트 경험. 임베디드 성능 한계를 분석한 경험 중심.

### ROS / RViz — Familiar

LiDAR 맵핑, RViz 시각화, cmd_vel 흐름 이해 및 커스텀 플랫폼 연동 학습.

---

# 14. Experience

## 섹션 제목

연구 및 프로젝트 경험

## Research

### Undergraduate Research Assistant

VOCs ppb 단위 감지를 위한 Photoacoustic Gas Sensor 구조 및 신호 처리 회로 연구에 참여했습니다. PAS 센서 구조, Lock-in Amplifier, 위상 조절 및 필터링 구조를 중심으로 학습하고 실험했습니다.

## Capstone

### Capstone Design Project

농구 골대 인식과 슈팅 메커니즘을 결합한 농구 슈팅 로봇을 설계하고 제작했습니다. 비전 인식, Arduino 제어, 서보 구동, 기구 설계를 통합했습니다.

## ROS / Mapping

### Autonomous Robot / Mapping Project

LiDAR와 ROS 기반 맵핑, 엔코더 모터 제어, 시리얼 통신 구조를 활용한 자율주행 로봇 플랫폼을 구성했습니다.

---

# 15. Contact

## 섹션 제목

Proto.KIL은 실제 제약 안에서 움직이는 해결책을 설계합니다.

## 설명

프로젝트 자료, 시연 영상, CAD 이미지와 코드 설명은 공개 가능한 범위를 확인한 뒤 추가합니다.

## 공개 정보

- Public name: Proto.KIL
- Location: Korea
- Email: TODO — 공개 연락처 확인 필요

---

# 16. Footer

© 2026 Proto.KIL. Robotics Hardware Portfolio.

---

# 17. 우선 확인이 필요한 TODO

## 공통

- [ ] 공개 이메일 주소
- [ ] 프로젝트별 정확한 기간
- [ ] 프로젝트별 팀 구성
- [ ] 프로젝트별 Proto.KIL의 담당 범위

## Basketball Shooting Robot

- [ ] 슈팅 성공률
- [ ] 반복 테스트 횟수
- [ ] 테스트 환경별 인식 결과

## Mountain Rescue Robot

- [ ] 실제 구현 범위
- [ ] 로봇 크기와 중량
- [ ] 구동 방식과 모터
- [ ] 배터리 사양
- [ ] 주행·탐지 결과

## Custom ROS Mapping Robot

- [ ] 최종 ROS 버전
- [ ] 사용한 SLAM 패키지
- [ ] 완성 지도
- [ ] 반복 주행 결과

## Line-Tracing Cleaning Robot

- [ ] 색상별 기준값
- [ ] 반복 주행 성공률
- [ ] 센서 배치 사진과 작동 영상

## Photoacoustic Gas Sensor Research

- [ ] 본인 담당 범위
- [ ] 확정된 실험 조건
- [ ] 실험 결과와 파형
- [ ] 공개 가능한 연구 성과

## DIY Delta 3D Printer

- [ ] 출력 정밀도
- [ ] 반복 출력 결과
- [ ] 열 안정성 검증
- [ ] 전체 조립 및 출력물 사진
