# ProtoKIL Portfolio Refactor

정적 GitHub Pages 포트폴리오를 다크모드 전용 구조로 정리한 버전입니다.

## 구조

```text
index.html
styles/main.css
scripts/projects.js
scripts/main.js
assets/
.nojekyll
```

## 수정 위치

- 디자인 수정: `styles/main.css`
- 프로젝트 카드/상세 내용/미디어 변경: `scripts/projects.js`
- 스크롤, 필터, 미디어 갤러리 동작: `scripts/main.js`
- About, Skills, Experience, Contact 같은 정적 섹션: `index.html`

## GitHub Pages 업로드

`index.html`, `styles/`, `scripts/`, `.nojekyll`, 기존 `assets/` 폴더를 저장소 root에 올리면 됩니다.
