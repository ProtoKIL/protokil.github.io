function renderTagList(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function renderProjectCards() {
  const target = document.querySelector("#featuredProjects");
  if (!target) return;

  target.innerHTML = portfolioProjects
    .filter((project) => project.featured)
    .map((project) => {
      const category = project.categories.join(" ");
      const thumb = project.thumbnail
        ? `<div class="project-thumb image-thumb"><img src="${project.thumbnail.src}" alt="${project.thumbnail.alt}" /></div>`
        : `<div class="project-thumb">${project.title} Image / Render</div>`;

      return `
        <article class="card project-card" data-category="${category}">
          ${thumb}
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-meta">${renderTagList(project.tags)}</div>
            <a class="btn btn-secondary" href="#${project.id}">Read Case Study</a>
          </div>
        </article>
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

        if (item.type === "video") {
          return `
            <video class="media-item${active}" src="${item.src}" muted controls playsinline preload="metadata" poster="${item.poster || ""}"></video>
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

  if (project.mediaPlaceholder) {
    return `
      <div class="media-placeholder">
        <div>
          <strong>${project.mediaPlaceholder.title}</strong><br />
          ${project.mediaPlaceholder.text}
        </div>
      </div>
    `;
  }

  return "";
}

function renderProjectDetails() {
  const target = document.querySelector("#projectDetails");
  if (!target) return;

  target.innerHTML = portfolioProjects
    .map((project) => {
      const info = project.info
        ? `
          <div class="project-info">
            ${project.info.map((item) => `<div class="info-item"><span>${item.label}</span><b>${item.value}</b></div>`).join("")}
          </div>
        `
        : "";

      const storyParagraphs = project.story.map((paragraph) => `<p>${paragraph}</p>`).join("");
      const media = renderProjectMedia(project);

      const problemApproach = project.problem || project.approach
        ? `
          <div class="grid-2 mt-24">
            ${project.problem ? `<div class="story-box"><h3>Problem</h3><p>${project.problem}</p></div>` : ""}
            ${project.approach ? `<div class="story-box"><h3>Approach</h3><p>${project.approach}</p></div>` : ""}
          </div>
        `
        : "";

      const architecture = project.architecture
        ? `
          <div class="story-box mt-24">
            <h3>${project.id === "ros" ? "Data Flow" : project.id === "mountain" ? "System Concept" : "System Architecture"}</h3>
            <div class="architecture" aria-label="시스템 구조">
              ${project.architecture.map((node) => `<div class="arch-node">${node}</div>`).join("")}
            </div>
            ${project.architectureNote ? `<p class="arrow-note">${project.architectureNote}</p>` : ""}
          </div>
        `
        : "";

      const challenges = project.challenges
        ? `
          <div class="grid-2 mt-24">
            <div class="story-box">
              <h3>Engineering Challenges</h3>
              <ul class="challenge-list">
                ${project.challenges.map((challenge, index) => `<li><b>Challenge ${index + 1}.</b> ${challenge}</li>`).join("")}
              </ul>
            </div>
            <div class="story-box">
              <h3>Result & Lesson</h3>
              <p>${project.resultLesson || ""}</p>
            </div>
          </div>
        `
        : "";

      return `
        <article id="${project.id}" class="project-detail">
          <div class="project-heading">
            <div>
              <div class="eyebrow">${project.number}</div>
              <h2>${project.title}</h2>
              <p class="lead">${project.lead}</p>
            </div>
            <a class="btn btn-primary" href="${project.id === "basketball" ? "#top" : "#projects"}">${project.id === "basketball" ? "Back to Top" : "Back to Projects"}</a>
          </div>

          ${info}

          <div class="story-grid mt-28">
            ${project.id === "mountain" ? `<div class="story-box"><h3>Context</h3>${storyParagraphs}</div>${media}` : `${media}<div class="story-box"><h3>Project Story</h3>${storyParagraphs}</div>`}
          </div>

          ${problemApproach}
          ${architecture}
          ${challenges}
        </article>
      `;
    })
    .join("");
}

function renderOtherProjects() {
  const target = document.querySelector("#otherProjects");
  if (!target) return;

  target.innerHTML = otherProjects
    .map((project) => `
      <article class="card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-meta">${renderTagList(project.tags)}</div>
      </article>
    `)
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
  const projectCards = document.querySelectorAll(".project-card[data-category]");

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
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards();
  renderProjectDetails();
  renderOtherProjects();
  initNavigation();
  initProjectFilters();
  initMediaShowcase();
});
