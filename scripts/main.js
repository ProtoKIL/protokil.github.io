function renderTagList(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function getOrderedProjects() {
  return [...portfolioProjects].sort((a, b) => a.number.localeCompare(b.number));
}

function renderHeroSlideshow() {
  const target = document.querySelector("#heroSlideshow");
  if (!target || !heroMedia.length) return;

  const slides = heroMedia
    .map((item, index) => `<img class="hero-slide${index === 0 ? " is-active" : ""}" src="${item.src}" alt="${item.alt}" />`)
    .join("");
  const controls = heroMedia.length > 1
    ? `<div class="hero-slide-controls" aria-label="Hero 이미지 선택">
        ${heroMedia.map((_, index) => `<button class="hero-slide-dot${index === 0 ? " is-active" : ""}" type="button" data-index="${index}" aria-label="${index + 1}번 이미지"></button>`).join("")}
      </div>`
    : "";

  target.innerHTML = slides + controls;

  if (heroMedia.length < 2) return;

  const slideElements = target.querySelectorAll(".hero-slide");
  const dots = target.querySelectorAll(".hero-slide-dot");
  let currentIndex = 0;
  let timer;

  const showSlide = (index) => {
    currentIndex = index;
    slideElements.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };

  const startSlideshow = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide((currentIndex + 1) % slideElements.length), 5000);
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.index));
      startSlideshow();
    });
  });

  target.addEventListener("mouseenter", () => window.clearInterval(timer));
  target.addEventListener("mouseleave", startSlideshow);
  startSlideshow();
}

function renderProjectCards() {
  const target = document.querySelector("#featuredProjects");
  if (!target) return;

  target.innerHTML = getOrderedProjects()
    .filter((project) => project.featured)
    .map((project) => {
      const category = project.categories.join(" ");
      const thumb = project.thumbnail
        ? `<div class="project-thumb image-thumb"><img src="${project.thumbnail.src}" alt="${project.thumbnail.alt}" /></div>`
        : `<div class="project-thumb">${project.title} Image / Render</div>`;

      return `
        <a class="card project-card project-list-card" data-category="${category}" href="#${project.id}" aria-label="${project.title} 상세 보기">
          ${thumb}
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-meta">${renderTagList(project.tags)}</div>
          </div>
        </a>
      `;
    })
    .join("");
}

function renderProjectMedia(project) {
  if (project.media && project.media.length) {
    const items = project.media
      .map((item, index) => {
        const active = index === 0 ? " is-active" : "";
        const extraClass = item.className ? ` ${item.className}` : "";

        if (item.type === "placeholder") {
          return `<div class="media-item media-placeholder${active}"><div>${item.text}</div></div>`;
        }

        if (item.type === "video") {
          const poster = item.poster ? ` poster="${item.poster}"` : "";
          return `
            <video class="media-item${active}" src="${item.src}" muted controls playsinline preload="metadata"${poster}></video>
          `;
        }

        return `<img class="media-item${extraClass}${active}" src="${item.src}" alt="${item.alt}" />`;
      })
      .join("");

    const thumbs = project.media
      .map((item, index) => `<button class="media-thumb${index === 0 ? " is-active" : ""}" type="button" data-index="${index}">${item.label}</button>`)
      .join("");

    return `
      <div class="media-showcase">
        <div class="media-stage">${items}</div>
        <div class="media-thumbs" aria-label="${project.title} 미디어 선택">${thumbs}</div>
      </div>
    `;
  }

  if (project.mediaPlaceholders && project.mediaPlaceholders.length) {
    const items = project.mediaPlaceholders
      .map((placeholder, index) => `
        <div class="media-item media-placeholder${index === 0 ? " is-active" : ""}">
          <div>${placeholder.text}</div>
        </div>
      `)
      .join("");

    const thumbs = project.mediaPlaceholders
      .map((placeholder, index) => `<button class="media-thumb${index === 0 ? " is-active" : ""}" type="button" data-index="${index}">${placeholder.title}</button>`)
      .join("");

    return `
      <div class="media-showcase">
        <div class="media-stage">${items}</div>
        <div class="media-thumbs" aria-label="${project.title} 미디어 선택">${thumbs}</div>
      </div>
    `;
  }

  return "";
}

function renderProjectDetails() {
  const target = document.querySelector("#projectDetails");
  if (!target) return;

  target.innerHTML = getOrderedProjects()
    .map((project) => {
      const infoByLabel = Object.fromEntries(project.info.map((item) => [item.label, item.value]));
      const roleItems = infoByLabel.Role.split(" · ");
      const info = `
        <div class="project-info">
          <div class="info-card info-summary-card">
            ${["Period", "Team", "Type"].map((label) => `
              <div class="info-row"><span>${label}</span><b>${infoByLabel[label]}</b></div>
            `).join("")}
          </div>
          <div class="info-card role-card">
            <span class="info-card-label">Role</span>
            <div class="role-list">${roleItems.map((role) => `<b>${role}</b>`).join("")}</div>
          </div>
        </div>
      `;
      const storyParagraphs = project.story.map((paragraph) => `<p>${paragraph}</p>`).join("");
      const media = renderProjectMedia(project);

      return `
        <article id="${project.id}" class="project-detail">
          <div class="project-heading">
            <div>
              <div class="eyebrow">${project.number}</div>
              <h2>${project.title}</h2>
              <p class="lead">${project.lead}</p>
            </div>
            <a class="btn btn-primary" href="#projects">Back to Projects</a>
          </div>

          ${info}

          <div class="story-box mt-28">
            <h3>Project Story</h3>
            ${storyParagraphs}
          </div>

          <div class="grid-2 mt-24">
            <div class="story-box">
              <h3>Problem</h3>
              <p>${project.problem}</p>
              <ul class="problem-points">
                ${project.challenges.map((challenge) => `<li>${challenge}</li>`).join("")}
              </ul>
            </div>
            <div class="story-box"><h3>Approach</h3><p>${project.approach}</p></div>
          </div>

          <div class="story-box mt-24">
            <h3>System Architecture</h3>
            <div class="architecture${project.architectureFlow ? " has-flow" : ""}" aria-label="${project.title} 시스템 구조">
              ${project.architecture.map((node) => `
                <div class="arch-node">
                  <b>${node.title}</b>
                  <span>${node.subtitle}</span>
                  <small>${node.description}</small>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="story-box mt-24 result-card">
            <h3>Result & Lesson</h3>
            <p>${project.resultLesson}</p>
          </div>

          <div class="mt-24">
            <h3>Project Media</h3>
            ${media}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderOtherProjects() {
  const target = document.querySelector("#otherProjects");
  if (!target) return;

  target.innerHTML = getOrderedProjects()
    .filter((project) => !project.featured)
    .map((project) => {
      const category = project.categories.join(" ");
      return `
      <a class="card other-project-card project-list-card" data-category="${category}" href="#${project.id}" aria-label="${project.title} 상세 보기">
        <h3>${project.title}</h3>
        <p>${project.shortSummary || project.summary}</p>
        <div class="project-meta">${renderTagList(project.tags)}</div>
      </a>
    `;
    })
    .join("");
}

function initNavigation() {
  const navToggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  const scrollProgress = document.querySelector("#scrollProgress");
  const backToTop = document.querySelector("#backToTop");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.checked = false;
    });
  });

  function updateScrollUI() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;

    backToTop.classList.toggle("is-visible", scrollTop > 520);

    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (scrollTop >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === `#${currentSectionId}`);
    });
  }

  window.addEventListener("scroll", updateScrollUI);
  window.addEventListener("load", updateScrollUI);
  updateScrollUI();
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-list-card[data-category]");
  const projectGroups = document.querySelectorAll("[data-project-group]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      projectCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
      });

      projectGroups.forEach((group) => {
        group.hidden = !group.querySelector(".project-list-card:not(.is-hidden)");
      });
    });
  });
}

function initMediaShowcase() {
  document.querySelectorAll(".media-showcase").forEach((showcase) => {
    const items = showcase.querySelectorAll(".media-item");
    const thumbs = showcase.querySelectorAll(".media-thumb");

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const index = Number(thumb.dataset.index);

        items.forEach((item) => {
          item.classList.remove("is-active");

          if (item.tagName.toLowerCase() === "video") {
            item.pause();
            item.currentTime = 0;
          }
        });

        thumbs.forEach((btn) => btn.classList.remove("is-active"));

        const selectedItem = items[index];
        selectedItem.classList.add("is-active");
        thumb.classList.add("is-active");

        if (selectedItem.tagName.toLowerCase() === "video") {
          selectedItem.load();
          selectedItem.play().catch(() => {
            // 자동 재생이 차단되면 기본 비디오 컨트롤로 재생할 수 있습니다.
          });
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeroSlideshow();
  renderProjectCards();
  renderProjectDetails();
  renderOtherProjects();
  initNavigation();
  initProjectFilters();
  initMediaShowcase();
});
