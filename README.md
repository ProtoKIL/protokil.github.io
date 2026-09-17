# Kil Jong Heon — Robotics Hardware Portfolio

Public portfolio: https://protokil.github.io/

가로 화면 기반 독립 페이지 포트폴리오입니다. 6개 프로젝트, 기술·도구, 활동·수상 경력을 담았습니다.

## 구조

```text
index.html
styles/main.css
styles/deck.css
scripts/projects.js
scripts/engineering.js
scripts/main.js
assets/
.nojekyll
```

## 수정 위치

- 디자인과 A4 가로 인쇄: `styles/deck.css`
- 프로젝트 설명과 미디어: `scripts/projects.js`
- 엔지니어링 항목과 Lock-in Amplifier PCB: `scripts/engineering.js`
- 페이지 전환, 필름스트립, 전체화면, 인쇄 및 정적 섹션: `scripts/main.js`
- 공통 머리글·꼬리글: `index.html`

## 보기와 인쇄

전체화면 버튼으로 감상할 수 있습니다. 인쇄 버튼 또는 Ctrl+P로 모든 페이지를 출력합니다. 프로젝트 인쇄 미디어는 2열×3행이며 이미지를 크롭하지 않습니다.

## GitHub Pages 업로드

`index.html`, `styles/`, `scripts/`, `.nojekyll`, 기존 `assets/` 폴더를 저장소 root에 올리면 됩니다.

`main` 브랜치의 루트를 배포합니다. 이전 버전은 `backup/portfolio-before-deck-20260917` 브랜치에 보존되어 있습니다.

웹용 압축 영상을 사용하며 대용량 원본 영상, 로컬 개인 메모와 호스팅 인증 정보는 배포하지 않습니다.
