const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const orderedProjects = [...portfolioProjects].sort((a, b) => a.number.localeCompare(b.number));

const skillGroups = [
  {
    title: "Mechanical / CAD",
    items: [
      ["Inventor", "CORE", "전체 어셈블리, 간섭 검토, 브라켓·센서 마운트와 동작 메커니즘 설계"],
      ["AutoCAD", "FAMILIAR", "CNC 외주 제작용 부품 도면과 치수·가공 정보 작성"],
      ["Prototyping", "CORE", "조립 결과를 모델에 반영하고 부품을 반복 개선"],
      ["Manufacturing", "APPLIED", "3D 프린팅과 외주 가공을 고려한 부품 설계"],
    ],
  },
  {
    title: "Robotics / Embedded",
    items: [
      ["Arduino", "CORE", "센서 입력, 모터·릴레이 제어, 시리얼 통신과 비차단 로직 구현"],
      ["System Integration", "CORE", "기구, 전원, 센서, 제어 보드와 소프트웨어 통합"],
      ["Raspberry Pi", "FAMILIAR", "카메라·OpenCV 실행 환경과 Arduino 연동 구성"],
      ["Jetson Nano", "APPLIED", "Mountain Detection Robot의 Jetson Orin Nano 기반 다중 센서 시스템 구성 경험"],
      ["Motion Control", "APPLIED", "서보·엔코더·PID를 정렬과 주행 동작에 적용"],
      ["EasyEDA", "FAMILIAR", "연구용 회로와 툴헤드 PCB 설계·외주 제작·테스트"],
    ],
  },
  {
    title: "Software / Vision / ROS",
    items: [
      ["Python", "APPLIED", "영상 처리, 조건 판단과 시리얼 연동 중심의 코드 작성"],
      ["OpenCV", "APPLIED", "HSV, Canny, contour와 중심 좌표 안정화 로직 구현"],
      ["YOLOv5", "FAMILIAR", "커스텀 학습과 임베디드 환경의 실시간 성능 한계 검토"],
      ["ROS / RViz", "FAMILIAR", "LiDAR 스캔, RViz 시각화와 cmd_vel 흐름 학습"],
      ["Sensor Fusion", "APPLIED", "LiDAR·Depth·Thermal·GPS 센서 역할 정의와 통합"],
    ],
  },
];

const experienceItems = [
  ["2024.02 — 2025.10", "Undergraduate Research Assistant", "광음향 가스센서의 락인앰프 전체 회로·PCB 설계, 외주·납땜·실험을 수행했습니다. 제1저자로 논문을 작성하고 2024·2025 추계 학술대회에서 포스터 발표했습니다."],
  ["2024.07 — 2025.06", "Capstone Design Project", "농구 골대 인식과 슈팅 메커니즘을 결합한 로봇을 설계·제작했습니다. 비전 인식, Arduino 제어, 서보 구동과 기구 설계를 하나의 시스템으로 통합했습니다."],
  ["2025.03 — 2025.12", "IDF Instructor", "교내 Idea Dream Factory 시설 관리 및 시작품 제작을 담당했습니다. 라인 트레이싱 로봇 청소기와 3D 프린터실 관제 시스템을 설계했습니다."],
  ["2025.06 — 2025.12", "Capstone Design Contest", "LiDAR, AI Depth Camera와 열화상 카메라를 결합한 산악 탐지 로봇 프로토타입에서 기계 설계와 하드웨어 통합을 담당했습니다. SLAM 기반 자율주행은 완성하지 못했습니다."],
];

const awardMedia = [
  ["assets/awards/award-1.PNG", "2025 창의적종합설계 프로그램 경진대회 대상"],
  ["assets/awards/award-2.PNG", "2025 창의적종합설계 경진대회 컨소시엄 예선 동상"],
  ["assets/awards/award-3.PNG", "2025 IDF 드림 메이커 해커톤 최우수상"],
  ["assets/awards/award-4.PNG", "2025 창의적 종합설계 경진대회 상장"],
];

const skillLevelScore = { CORE: 4, FAMILIAR: 3, APPLIED: 2 };

function skillLevel(level) {
  const score = skillLevelScore[level] || 0;
  return `<div class="skill-level" aria-label="${level}, 4칸 중 ${score}칸"><span class="skill-meter" aria-hidden="true">${Array.from({ length: 4 }, (_, index) => `<i class="${index < score ? "is-filled" : ""}"></i>`).join("")}</span></div>`;
}

function pageChrome(pageNumber, title) {
  const page = String(pageNumber).padStart(2, "0");
  return `
    <div class="print-page-chrome"><img src="assets/hero/portfolio.png?print=${page}" alt="Portfolio — Kil Jong Heon, Mechanical Engineering"><span>${title}</span></div>
    <div class="print-page-chrome print-footer"><span>JONGHEON KIL · 2026</span><span>${page}</span></div>`;
}

function renderExperiencePeriod(period) {
  const [start, end] = period.split(" — ");
  return `<time class="experience-period"><span>${start}</span>${end ? `<i aria-hidden="true"></i><span>${end}</span>` : ""}</time>`;
}

function coverPage() {
  return `
    <section class="portfolio-page cover-page" id="cover" data-title="Cover" data-page-code="00 / COVER">
      ${pageChrome(1, "COVER")}
      <div class="cover-copy">
        <p class="page-kicker">MECHANICAL ENGINEERING · ROBOTICS HARDWARE</p>
        <h1>
          <span class="display-line">DESIGN.</span>
          <span class="display-line is-outline">BUILD.</span>
          <span class="display-line is-accent">MAKE IT MOVE.</span>
        </h1>
        <p class="cover-lead">기계공학 기반 설계 역량과 임베디드/비전/ROS 프로젝트 경험을 바탕으로,<br>아이디어를 CAD 모델과 하드웨어, 제어 로직, 테스트 결과까지 연결하는 엔지니어</p>
        <div class="cover-tags" aria-label="핵심 분야">
          <span>Mechanical Design</span><span>Robot Prototyping</span><span>System Integration</span><span>Test & Debugging</span>
        </div>
      </div>
    </section>`;
}

function profilePage(projectStartIndex) {
  return `
    <section class="portfolio-page profile-page" id="profile" data-title="Profile / Index" data-page-code="01 / PROFILE">
      ${pageChrome(2, "PROFILE / INDEX")}
      <div class="profile-head">
        <div>
          <p class="page-kicker">PROFILE / SELECTED WORK</p>
          <h2>부품을 그리는 데서 멈추지 않고,<br>작동 조건까지 설계합니다.</h2>
        </div>
        <p class="profile-summary">기계공학을 기반으로 기구 설계, 센서와 액추에이터, 임베디드 제어와 ROS 환경을 함께 다뤘습니다. 결과보다 문제 정의, 구조적 선택, 실패 원인과 설계 변경을 중심으로 프로젝트를 설명합니다.</p>
      </div>
      <div class="profile-body">
        <aside class="profile-note">
          <strong>ROBOTICS<br>HARDWARE<br>ENGINEER</strong>
          <p>한국교통대학교 기계공학과<br>Proto.KIL / Jongheon Kil</p>
        </aside>
        <div class="project-index">
          ${orderedProjects.map((project, index) => `
            <button class="index-card index-card-${project.id}" type="button" data-page-target="${projectStartIndex + index}" aria-label="${project.title} 페이지로 이동">
              <img src="${project.thumbnail.src}" alt="">
              <span class="index-card-copy"><span class="index-no">${project.number}</span><strong>${project.title}</strong></span>
            </button>`).join("")}
        </div>
      </div>
    </section>`;
}

const printMediaLabelsByProject = {
  mountain: ["Overview", "Result", "Modeling", "Assembly", "Camera", "Presentation"],
  basketball: ["Overview", "Result", "Camera Detection", "Modeling", "Assembly", "System"],
  printer: ["Modeling", "Electrical Assembly", "Calibration", "Parts", "Toolhead", "Toolhead PCB"],
  cleaning: ["Overview", "Result", "Cleaning", "System", "Concept Modeling", "Improved Modeling"],
  ros: ["Overview", "Running", "RViz", "Modeling", "Structure", "System"],
  lockin: ["Overview", "Bare PCB", "Testing", "Cell", "Chopper", "Signal Flow"]
};

function mediaThumbnail(item, project) {
  return item.type === "image" ? item.src : (item.thumbnail || item.src?.replace(/\.mp4$/i, "-thumb.jpg") || item.poster || project.thumbnail.src);
}

function renderMedia(project) {
  const media = project.media || project.mediaPlaceholders || [];
  if (!media.length) return '<div class="media-stage media-placeholder">MEDIA PENDING</div>';
  const items = media.map((item, index) => {
    const active = index === 0 ? " is-active" : "";
    if (item.type === "video") {
      const poster = item.poster ? ` poster="${item.poster}"` : "";
      return `<video class="media-item${active}" data-src="${item.src}"${poster} muted controls autoplay playsinline preload="metadata"></video>`;
    }
    if (item.type === "placeholder") return `<div class="media-item media-placeholder${active}">${item.text || "MEDIA PENDING"}</div>`;
    return `<img class="media-item${active}" src="${item.src}" alt="${item.alt || project.title}">`;
  }).join("");
  const buttons = media.map((item, index) => {
    const label = item.label || item.title || `Media ${index + 1}`;
    const thumbnail = mediaThumbnail(item, project);
    return `<button class="media-thumb${index === 0 ? " is-active" : ""}" type="button" data-media-index="${index}" aria-label="${label} 보기"><img src="${thumbnail}" alt="" loading="lazy"><span>${label}</span></button>`;
  }).join("");
  const filmstrip = `<div class="media-filmstrip" aria-label="${project.title} 미디어 선택"><div class="media-thumb-track">${buttons}</div></div>`;
  const printLabels = printMediaLabelsByProject[project.id];
  const printMedia = (printLabels
    ? printLabels.map((label) => media.find((item) => item.label === label)).filter(Boolean)
    : media.filter((item) => item.type === "image" || item.type === "video")).slice(0, 6);
  const printGallery = `<div class="print-media-grid">${printMedia.map((item) => `<figure class="print-media-tile"><img src="${mediaThumbnail(item, project)}" alt="${item.alt || `${project.title} · ${item.label}`}"><figcaption>${item.caption || item.label}${item.type === "video" ? " · VIDEO" : ""}</figcaption></figure>`).join("")}</div>`;
  return `<div class="media-showcase"><div class="media-stage">${items}</div>${filmstrip}${printGallery}</div>`;
}

function projectPage(project, pageNumber) {
  const info = Object.fromEntries(project.info.map((item) => [item.label, item.value]));
  const engineering = projectEngineering[project.id];
  return `
    <section class="portfolio-page project-page" id="page-${project.id}" data-title="${project.title}" data-page-code="${project.number.toUpperCase()}">
      ${pageChrome(pageNumber, project.title)}
      <div class="project-media-column">
        <div class="project-heading-row">
          <span class="project-meta-number">${project.number.replace("Project ", "")}</span>
          <div class="project-heading-copy"><span class="project-category">${project.categories.join(" / ")}</span><h2 class="project-title">${project.title}</h2></div>
        </div>
        <p class="project-lead">${project.lead}</p>
        <div class="project-meta-grid">
          <div class="project-meta-item"><span class="meta-label">PERIOD</span><strong>${info.Period || "—"}</strong></div>
          <div class="project-meta-item"><span class="meta-label">TEAM</span><strong>${info.Team || "—"}</strong></div>
          <div class="project-meta-item"><span class="meta-label">TYPE</span><strong>${info.Type || "—"}</strong></div>
        </div>
        ${renderMedia(project)}
        <div class="media-caption"><span>PROJECT EVIDENCE / IMAGE · VIDEO · CAD</span><span>${(project.media || []).length} MEDIA</span></div>
      </div>
      <div class="project-copy-column">
        <div class="project-narrative">
          <article class="narrative-block role"><span class="panel-label">01 / ROLE</span><p>${engineering.role}</p></article>
          <article class="narrative-block problem"><span class="panel-label">02 / PROBLEM</span><p>${project.problem}</p><ul>${project.challenges.map((item) => `<li>${item}</li>`).join("")}</ul></article>
          <article class="narrative-block decisions"><span class="panel-label">03 / BUILD DECISIONS</span><p>${engineering.decisions}</p></article>
          <article class="narrative-block system"><span class="panel-label">04 / SYSTEM</span><div class="system-layers">${engineering.system.map(([layer, description]) => `<div><b>${layer}</b><span>${description}</span></div>`).join("")}</div></article>
          <article class="narrative-block parts"><span class="panel-label">05 / KEY COMPONENT DECISIONS</span><div class="component-decisions">${engineering.components.map(([part, reason, source]) => `<div><b>${source ? `<a href="${source}" target="_blank" rel="noopener noreferrer" title="제조사 데이터시트">${part} ↗</a>` : part}</b><p>${reason}</p></div>`).join("")}</div></article>
          <article class="narrative-block tools"><span class="panel-label">06 / TOOLS</span><div class="tool-deliverables">${engineering.tools.map(([tool, output]) => `<div><b>${tool}</b><span>${output}</span></div>`).join("")}</div></article>
          <article class="narrative-block result"><span class="panel-label">07 / RESULT</span><div class="result-copy">${project.result}</div>${project.publication ? `<a class="project-publication" href="${project.publication.url}" target="_blank" rel="noopener noreferrer">${project.publication.label}</a>` : ""}${project.relatedBuild ? `<p class="related-build">${project.relatedBuild}</p>` : ""}</article>
          <article class="narrative-block lesson"><span class="panel-label">08 / TROUBLESHOOTING & IMPROVEMENT</span><div class="result-copy">${engineering.improvement}</div></article>
        </div>
      </div>
    </section>`;
}

function skillsPage(pageNumber) {
  return `
    <section class="portfolio-page section-page" id="skills" data-title="Skills" data-page-code="07 / SKILLS">
      ${pageChrome(pageNumber, "SKILLS")}
      <div class="section-page-head"><div><p class="page-kicker">SKILLS</p><h2>사용 기술 및 도구</h2></div></div>
      <div class="skill-matrix">
        ${skillGroups.map((group) => `<article class="skill-column"><h3>${group.title}</h3>${[...group.items].sort((a, b) => skillLevelScore[b[1]] - skillLevelScore[a[1]]).map(([name, level, note]) => `<div class="skill-row"><div><strong>${name}</strong>${skillLevel(level)}</div><p>${note}</p></div>`).join("")}</article>`).join("")}
      </div>
    </section>`;
}

function experiencePage(pageNumber) {
  return `
    <section class="portfolio-page section-page" id="experience" data-title="Experience / Awards" data-page-code="08 / EXPERIENCE &amp; AWARDS">
      ${pageChrome(pageNumber, "EXPERIENCE / AWARDS")}
      <div class="section-page-head"><div><p class="page-kicker">EXPERIENCE / AWARDS</p><h2>활동 사항 및 수상 경력</h2></div><p>기구 설계, 연구, 로봇 시스템 통합 과정과 프로젝트의 외부 성과를 함께 정리했습니다.</p></div>
      <div class="experience-awards-grid">
        <div class="experience-list">${experienceItems.map(([period, title, copy], index) => `<article class="experience-item${index === 0 ? " has-publication" : ""}">${renderExperiencePeriod(period)}<div class="experience-copy"><h3>${title}</h3><p>${copy}</p>${index === 0 ? `<a class="publication-inline" href="https://www.dcollection.net/handler/chains/200000975334" target="_blank" rel="noopener noreferrer"><span><small>PUBLICATION / 2025</small><strong>광음향 분광법 가스센서 신호처리를 위한 락인앰프 설계-I</strong><em>한국교통대학교 논문집 제60집 · 제1저자</em></span><b>논문 원문 보기 ↗</b></a>` : ""}</div></article>`).join("")}</div>
        <aside class="awards-panel" aria-label="주요 수상 경력"><span class="panel-label">AWARDS / 2025</span><div class="awards-grid-compact">${awardMedia.map(([src, caption], index) => `<figure class="award-item"><img src="${src}" alt="${caption}"><figcaption><b>${String(index + 1).padStart(2, "0")}</b><span>${caption}</span></figcaption></figure>`).join("")}</div></aside>
      </div>
    </section>`;
}

function contactPage(pageNumber) {
  return `
    <section class="portfolio-page contact-page" id="contact" data-title="Contact" data-page-code="09 / CONTACT">
      ${pageChrome(pageNumber, "CONTACT")}
      <div><p class="page-kicker">CONTACT / PROTO.KIL</p><h2>현실의 제약 안에서<br><span>움직이는 답</span>을 설계합니다.</h2></div>
      <div><div class="contact-card"><div class="contact-row"><span class="contact-label">NAME</span><strong>Jongheon Kil</strong></div><div class="contact-row"><span class="contact-label">FIELD</span><strong>Robotics Hardware<br>Mechanical Design</strong></div><div class="contact-row"><span class="contact-label">LOCATION</span><strong>Korea</strong></div><div class="contact-row"><span class="contact-label">EMAIL</span><a href="mailto:samkil0823@gmail.com">samkil0823@gmail.com</a></div></div><p class="contact-note">프로젝트 자료, 시연 영상, CAD 이미지와 코드 설명은 공개 가능한 범위에서 제공하겠습니다.</p></div>
    </section>`;
}

const track = $("#portfolioTrack");
const projectStartIndex = 2;
const pageMarkup = [
  coverPage(),
  profilePage(projectStartIndex),
  ...orderedProjects.map((project, index) => projectPage(project, index + 3)),
  skillsPage(orderedProjects.length + 3),
  experiencePage(orderedProjects.length + 4),
  contactPage(orderedProjects.length + 5),
];

track.innerHTML = pageMarkup.join("");

const pages = $$(".portfolio-page", track);
const pageNav = $("#pageNav");
let currentIndex = 0;
let wheelLocked = false;
let touchStartX = 0;
let touchStartY = 0;

pageNav.innerHTML = pages.map((page, index) => `<button class="page-dot${index === 0 ? " is-active" : ""}" type="button" data-page-target="${index}" aria-label="${page.dataset.title} 페이지로 이동"><span>${String(index + 1).padStart(2, "0")}</span><span class="page-dot-label">${page.dataset.title}</span></button>`).join("");
$("#totalPages").textContent = String(pages.length).padStart(2, "0");

function pauseInactiveMedia() {
  $$("video", track).forEach((video) => video.pause());
}

function prepareActiveVideo(page) {
  const video = $("video.media-item.is-active", page);
  if (!video) return;
  if (!video.src && video.dataset.src) {
    video.src = video.dataset.src;
    video.load();
  }
  video.play().catch(() => {});
}

function goToPage(index, options = {}) {
  const nextIndex = Math.max(0, Math.min(pages.length - 1, index));
  if (nextIndex === currentIndex && !options.force) return;
  currentIndex = nextIndex;
  track.style.transform = `translate3d(${-currentIndex * 100}vw, 0, 0)`;
  pages.forEach((page, pageIndex) => {
    const isCurrent = pageIndex === currentIndex;
    page.setAttribute("aria-hidden", isCurrent ? "false" : "true");
    page.inert = !isCurrent;
  });
  $$(".page-dot", pageNav).forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === currentIndex));
  $("#currentPage").textContent = String(currentIndex + 1).padStart(2, "0");
  $("#currentSection").textContent = pages[currentIndex].dataset.title;
  $("#previousPage").disabled = currentIndex === 0;
  $("#nextPage").disabled = currentIndex === pages.length - 1;
  pauseInactiveMedia();
  prepareActiveVideo(pages[currentIndex]);
  if (!options.fromHistory) history.replaceState(null, "", `#${currentIndex + 1}`);
}

document.addEventListener("click", (event) => {
  const pageTarget = event.target.closest("[data-page-target]");
  if (pageTarget) goToPage(Number(pageTarget.dataset.pageTarget));

  const mediaButton = event.target.closest("[data-media-index]");
  if (!mediaButton) return;
  const showcase = mediaButton.closest(".media-showcase");
  const index = Number(mediaButton.dataset.mediaIndex);
  $$(".media-item", showcase).forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === index);
    if (item instanceof HTMLVideoElement && itemIndex !== index) item.pause();
  });
  $$(".media-thumb", showcase).forEach((button) => button.classList.toggle("is-active", Number(button.dataset.mediaIndex) === index));
  prepareActiveVideo(showcase.closest(".portfolio-page"));
});

$("#previousPage").addEventListener("click", () => goToPage(currentIndex - 1));
$("#nextPage").addEventListener("click", () => goToPage(currentIndex + 1));
$("#headerPrintPortfolio").addEventListener("click", () => window.print());

const fullscreenButton = $("#headerFullscreen");
const fullscreenIcon = $("#fullscreenIcon");
const fullscreenTarget = document.documentElement;

function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function updateFullscreenControl() {
  const isActive = Boolean(getFullscreenElement());
  const label = isActive ? "전체화면 종료" : "전체화면으로 보기";
  fullscreenButton.setAttribute("aria-label", label);
  fullscreenButton.setAttribute("aria-pressed", String(isActive));
  fullscreenButton.title = label;
  fullscreenIcon.src = isActive ? "assets/icons/fullscreen-exit.svg" : "assets/icons/fullscreen-enter.svg";
}

async function toggleFullscreen() {
  try {
    if (getFullscreenElement()) {
      if (document.exitFullscreen) await document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    } else if (fullscreenTarget.requestFullscreen) {
      await fullscreenTarget.requestFullscreen({ navigationUI: "hide" });
    } else if (fullscreenTarget.webkitRequestFullscreen) {
      fullscreenTarget.webkitRequestFullscreen();
    }
  } catch {
    // 브라우저나 임베드 환경이 전체화면을 제한하면 현재 화면을 유지합니다.
  }
  updateFullscreenControl();
}

const fullscreenSupported = Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled || fullscreenTarget.webkitRequestFullscreen);
fullscreenButton.hidden = !fullscreenSupported;
fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenControl);
document.addEventListener("webkitfullscreenchange", updateFullscreenControl);
updateFullscreenControl();

window.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); goToPage(currentIndex + 1); }
  if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); goToPage(currentIndex - 1); }
  if (event.key === "Home") { event.preventDefault(); goToPage(0); }
  if (event.key === "End") { event.preventDefault(); goToPage(pages.length - 1); }
});

window.addEventListener("wheel", (event) => {
  const mediaTrack = event.target.closest(".media-thumb-track");
  if (mediaTrack && mediaTrack.scrollWidth > mediaTrack.clientWidth) {
    event.preventDefault();
    mediaTrack.scrollLeft += event.deltaX || event.deltaY;
    return;
  }
  if (wheelLocked || Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY)) < 18) return;
  event.preventDefault();
  wheelLocked = true;
  goToPage(currentIndex + (event.deltaX + event.deltaY > 0 ? 1 : -1));
  window.setTimeout(() => { wheelLocked = false; }, 650);
}, { passive: false });

window.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
}, { passive: true });

window.addEventListener("touchend", (event) => {
  const deltaX = touchStartX - event.changedTouches[0].screenX;
  const deltaY = touchStartY - event.changedTouches[0].screenY;
  if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) goToPage(currentIndex + (deltaX > 0 ? 1 : -1));
}, { passive: true });

function preparePrintLayout() {
  pauseInactiveMedia();
  track.style.transform = "none";
  pages.forEach((page) => {
    page.inert = false;
    page.setAttribute("aria-hidden", "false");
  });
}

function restoreScreenLayout() {
  goToPage(currentIndex, { force: true, fromHistory: true });
}

window.addEventListener("beforeprint", preparePrintLayout);
window.addEventListener("afterprint", restoreScreenLayout);

const initialPageNumber = Number(window.location.hash.replace("#", ""));
const initialHashIndex = Number.isInteger(initialPageNumber) ? initialPageNumber - 1 : 0;
goToPage(initialHashIndex >= 0 && initialHashIndex < pages.length ? initialHashIndex : 0, { force: true });
