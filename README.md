# ProtoKIL Portfolio Refactor

정적 GitHub Pages 포트폴리오를 다크모드 전용 구조로 정리한 버전입니다.

공개 화면에서는 본명 대신 `ProtoKIL`을 사용하며, 프로젝트 설명은 `CODEX_CONTEXT.md`에 확인된 사실을 기준으로 작성합니다. 확인되지 않은 기간, 역할, 수치와 성과는 `TODO`로 표시합니다.

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

- 현재 웹사이트 기준 원고: `content/CONTENT_BASELINE.md`
- 직접 수정하는 작업 원고: `content/CONTENT_DRAFT.md`
- 디자인 수정: `styles/main.css`
- 프로젝트 카드/상세 내용/미디어 변경: `scripts/projects.js`
- 스크롤, 필터, 미디어 갤러리 동작: `scripts/main.js`
- About, Skills, Experience, Contact 같은 정적 섹션: `index.html`

## 콘텐츠 검토 흐름

1. `content/CONTENT_DRAFT.md`에서 문구와 TODO를 수정합니다.
2. `CONTENT_BASELINE.md`와 DRAFT의 차이를 검토합니다.
3. 확정된 변경만 `index.html`과 `scripts/projects.js`에 반영합니다.
4. 웹사이트 검증 후 DRAFT를 새 BASELINE으로 승격합니다.

## GitHub Pages 업로드

`index.html`, `styles/`, `scripts/`, `.nojekyll`, 기존 `assets/` 폴더를 저장소 root에 올리면 됩니다.
