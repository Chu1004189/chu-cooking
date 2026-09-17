/* =================================
   OPENING
================================= */

const opening = document.getElementById("opening");

if (opening) {
  if (sessionStorage.getItem("openingPlayed")) {
    opening.style.display = "none";
  } else {
    sessionStorage.setItem("openingPlayed", "true");
  }
}


/* =================================
   STATE
================================= */

const perPage = 15;
let currentPage = 1;


/* =================================
   ELEMENTS
================================= */

const recipeGrid = document.getElementById("recipeGrid");
const pagination = document.getElementById("pagination");
const tagList = document.getElementById("tagList");
const searchInput = document.getElementById("searchInput");
const tagRecipeGrid = document.getElementById("tagRecipeGrid");
const tagPageTitle = document.getElementById("tagPageTitle");


/* =================================
   TAGS
================================= */

function getAllTags() {
  const tags = new Set();

  recipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      tags.add(tag);
    });
  });

  return [
    "すべて",
    ...Array.from(tags)
  ];
}


function renderTags() {
  if (!tagList) {
    return;
  }

  tagList.innerHTML = "";

  getAllTags().forEach(tag => {
    const button = document.createElement("button");

    button.className = "tag-button";
    button.type = "button";
    button.textContent = "#" + tag;

    button.addEventListener("click", () => {
      window.location.href =
        "index.html?tag=" + encodeURIComponent(tag);
    });

    tagList.appendChild(button);
  });
}


/* =================================
   SEARCH
================================= */

function getFilteredRecipes() {
  if (!searchInput) {
    return recipes;
  }

  const keyword = searchInput.value
    .trim()
    .toLowerCase();

  return recipes.filter(recipe => {
    const ingredientText = recipe.ingredients
      .map(item => `${item[0]} ${item[1]}`)
      .join(" ");

    const searchable = [
      recipe.name,
      recipe.searchText || "",
      recipe.tags.join(" "),
      ingredientText
    ]
      .join(" ")
      .toLowerCase();

    return !keyword || searchable.includes(keyword);
  });
}


/* =================================
   RECIPE CARD
================================= */

function createRecipeCard(recipe) {
  const card = document.createElement("article");

  card.className = "recipe-card";

  card.innerHTML = `
    <div class="recipe-image">
      <img
        src="${escapeHtml(recipe.image)}"
        alt="${escapeHtml(recipe.name)}"
        loading="lazy"
      >
    </div>

    <div class="recipe-info">

      <h3 class="recipe-title">
        ${escapeHtml(recipe.name)}
      </h3>

      <div class="recipe-tags">
        ${recipe.tags.map(tag => `
          <span class="recipe-tag">
            #${escapeHtml(tag)}
          </span>
        `).join("")}
      </div>

    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href =
      "recipe.html?id=" + encodeURIComponent(recipe.id);
  });

  return card;
}


/* =================================
   RECIPE LIST
================================= */

function renderRecipes() {
  if (!recipeGrid || !pagination) {
    return;
  }

  const filtered = getFilteredRecipes();

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / perPage)
  );

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const start = (currentPage - 1) * perPage;
  const visible = filtered.slice(start, start + perPage);

  recipeGrid.innerHTML = "";

  if (!visible.length) {
    recipeGrid.innerHTML = `
      <div class="empty">
        該当するレシピがありません。
      </div>
    `;
  } else {
    visible.forEach(recipe => {
      recipeGrid.appendChild(
        createRecipeCard(recipe)
      );
    });
  }

  renderPagination(totalPages);
}


/* =================================
   PAGINATION
================================= */

function renderPagination(totalPages) {
  if (!pagination) {
    return;
  }

  pagination.innerHTML = "";

  if (totalPages <= 1) {
    return;
  }

  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = page;

    if (page === currentPage) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }

    button.addEventListener("click", () => {
      currentPage = page;

      renderRecipes();

      document
        .getElementById("recipes")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    });

    pagination.appendChild(button);
  }
}


/* =================================
   TAG PAGE
================================= */

function getTagFromUrl() {
  const params = new URLSearchParams(
    window.location.search
  );

  return params.get("tag");
}


function getTagRecipes(tag) {
  if (!tag || tag === "すべて") {
    return recipes;
  }

  return recipes.filter(recipe =>
    recipe.tags.includes(tag)
  );
}


function renderTagPage() {
  if (!tagRecipeGrid || !tagPageTitle) {
    return;
  }

  const tag = getTagFromUrl();

  if (!tag) {
    return;
  }

  document.body.classList.add("tag-page-mode");

  document.title =
    "CHU dot COOKING | #" + tag;

  tagPageTitle.innerHTML =
    "#" + escapeHtml(tag);

  const matched = getTagRecipes(tag);

  tagRecipeGrid.innerHTML = "";

  if (!matched.length) {
    tagRecipeGrid.innerHTML = `
      <div class="empty">
        このタグのレシピはありません。
      </div>
    `;

    return;
  }

  matched.forEach(recipe => {
    tagRecipeGrid.appendChild(
      createRecipeCard(recipe)
    );
  });
}


/* =================================
   HEADER NAVIGATION
================================= */

const navLinks =
  document.querySelectorAll(".header-nav a");


navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId =
      link.getAttribute("href");

    const isTagPage =
      document.body.classList.contains("tag-page-mode");

    if (isTagPage) {
      window.location.href =
        "index.html" + targetId;

      return;
    }

    const target =
      document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =================================
   LOGO
================================= */

const headerLogo =
  document.querySelector(".header-logo");


if (headerLogo) {
  headerLogo.addEventListener("click", event => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =================================
   SEARCH EVENT
================================= */

if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderRecipes();
  });
}


/* =================================
   ACTIVE NAV
================================= */

const sections =
  document.querySelectorAll(
    "#home, #about, #recipes, #mood"
  );


function updateActiveNav() {
  const scrollPosition =
    window.scrollY + 180;

  let activeId = "home";

  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop) {
      activeId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.dataset.nav === activeId
    );
  });
}


window.addEventListener(
  "scroll",
  updateActiveNav,
  { passive: true }
);


/* =================================
   ESCAPE HTML
================================= */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =================================
   INIT
================================= */

renderTags();
renderRecipes();
renderTagPage();
updateActiveNav();