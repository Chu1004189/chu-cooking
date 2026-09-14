/* =================================
   OPENING CONTROL
================================= */

const opening = document.getElementById("opening");

if (sessionStorage.getItem("openingPlayed")) {
  opening.style.display = "none";
} else {
  sessionStorage.setItem("openingPlayed", "true");
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
const modal = document.getElementById("recipeModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const tagRecipeGrid = document.getElementById("tagRecipeGrid");
const tagPageTitle = document.getElementById("tagPageTitle");


/* =================================
   TAGS
================================= */

function getAllTags(){

  const tags = new Set();

  recipes.forEach(recipe=>{
    recipe.tags.forEach(tag=>tags.add(tag));
  });

  return ["すべて", ...Array.from(tags)];

}


function renderTags(){

  tagList.innerHTML = "";

  getAllTags().forEach(tag=>{

    const button = document.createElement("button");

    button.className = "tag-button";
    button.type = "button";
    button.textContent = "#" + tag;

    button.addEventListener("click",()=>{

      const url =
        "index.html?tag=" +
        encodeURIComponent(tag);

      window.location.href = url;

    });

    tagList.appendChild(button);

  });

}


/* =================================
   FILTER
================================= */

function getFilteredRecipes(){

  const keyword =
    searchInput.value.trim().toLowerCase();

  return recipes.filter(recipe=>{

    const ingredientText =
      recipe.ingredients
        .map(item=>item[0] + " " + item[1])
        .join(" ");

    const searchable = (
      recipe.name +
      " " +
      recipe.searchText +
      " " +
      recipe.tags.join(" ") +
      " " +
      ingredientText
    ).toLowerCase();

    return !keyword || searchable.includes(keyword);

  });

}


/* =================================
   CARD
================================= */

function createRecipeCard(recipe){

  const card =
    document.createElement("article");

  card.className = "recipe-card";

  card.innerHTML = `
    <div class="recipe-image">
      <img
        src="${recipe.image}"
        alt="${escapeHtml(recipe.name)}"
        loading="lazy"
      >
    </div>

    <div class="recipe-info">

      <h3 class="recipe-title">
        ${escapeHtml(recipe.name)}
      </h3>

      <div class="recipe-tags">
        ${recipe.tags.map(tag=>`
          <span class="recipe-tag">
            #${escapeHtml(tag)}
          </span>
        `).join("")}
      </div>

    </div>
  `;

  card.addEventListener("click",()=>{
  window.location.href =
    "recipe.html?id=" +
    encodeURIComponent(recipe.id);
});

  return card;

}


/* =================================
   MAIN RECIPE LIST
================================= */

function renderRecipes(){

  const filtered =
    getFilteredRecipes();

  const totalPages =
    Math.max(
      1,
      Math.ceil(filtered.length / perPage)
    );

  if(currentPage > totalPages){
    currentPage = totalPages;
  }

  const start =
    (currentPage - 1) * perPage;

  const visible =
    filtered.slice(start,start + perPage);

  recipeGrid.innerHTML = "";

  if(!visible.length){

    recipeGrid.innerHTML = `
      <div class="empty">
        該当するレシピがありません。
      </div>
    `;

  }else{

    visible.forEach(recipe=>{
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

function renderPagination(totalPages){

  pagination.innerHTML = "";

  if(totalPages <= 1){
    return;
  }

  for(let page=1; page<=totalPages; page++){

    const button =
      document.createElement("button");

    button.type = "button";
    button.textContent = page;

    if(page === currentPage){
      button.classList.add("active");
      button.setAttribute(
        "aria-current",
        "page"
      );
    }

    button.addEventListener("click",()=>{

      currentPage = page;

      renderRecipes();

      document.getElementById("recipes")
        .scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

    });

    pagination.appendChild(button);

  }

}


/* =================================
   TAG PAGE
================================= */

function getTagFromUrl(){

  const params =
    new URLSearchParams(
      window.location.search
    );

  return params.get("tag");

}


function getTagRecipes(tag){

  if(!tag || tag === "すべて"){
    return recipes;
  }

  return recipes.filter(recipe=>
    recipe.tags.includes(tag)
  );

}


function renderTagPage(){

  const tag =
    getTagFromUrl();

  if(!tag){
    return;
  }

  document.body.classList.add(
    "tag-page-mode"
  );

  document.title =
    "CHU dot COOKING | #" + tag;

  tagPageTitle.innerHTML =
    "#" + escapeHtml(tag);


  const matched =
    getTagRecipes(tag);

  tagRecipeGrid.innerHTML = "";

  if(!matched.length){

    tagRecipeGrid.innerHTML = `
      <div class="empty">
        このタグのレシピはありません。
      </div>
    `;

    return;
  }

  matched.forEach(recipe=>{
    tagRecipeGrid.appendChild(
      createRecipeCard(recipe)
    );
  });

}


/* =================================
   INGREDIENT MAP
================================= */

function makeIngredientMap(recipe){

  const map = new Map();

  recipe.ingredients.forEach(item=>{
    map.set(item[0],item[1]);
  });

  return map;

}


/* =================================
   CLICKABLE INGREDIENTS
   各材料につき最初の1回だけ
================================= */

function makeClickableIngredients(
  text,
  ingredientMap,
  usedIngredients
){

  let result = text;

  const names =
    Array.from(ingredientMap.keys())
      .sort((a,b)=>b.length-a.length);

  names.forEach(name=>{

    if(usedIngredients.has(name)){
      return;
    }

    const index =
      result.indexOf(
        escapeHtml(name)
      );

    if(index === -1){
      return;
    }

    const safeName =
      escapeHtml(name);

    const amount =
      ingredientMap.get(name);

    const before =
      result.slice(0,index);

    const after =
      result.slice(
        index + safeName.length
      );

    result =
      before +
      `
        <span
          class="cooking-ingredient"
          data-ingredient="${safeName}"
        >
          ${safeName}
          <span
            class="ingredient-bubble"
            style="display:none;"
          >
            ${escapeHtml(amount)}
          </span>
        </span>
      ` +
      after;

    usedIngredients.add(name);

  });

  return result;

}


/* =================================
   ESCAPE
================================= */

function escapeHtml(value){

  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* =================================
   RELATED RECIPES
   副菜系からランダム3品
================================= */

function getRelatedRecipes(current){

  const sideDishPool =
    recipes.filter(recipe=>{

      if(recipe === current){
        return false;
      }

      return recipe.tags.some(tag=>
        [
          "副菜",
          "サラダ",
          "野菜",
          "おかず"
        ].includes(tag)
      );

    });


  const shuffled =
    [...sideDishPool]
      .sort(()=>Math.random() - .5);

  return shuffled.slice(0,3);

}


/* =================================
   MODAL
================================= */

function openRecipe(recipe){

  const ingredientMap =
    makeIngredientMap(recipe);

  const usedIngredients =
    new Set();


  const stepsHtml =
    recipe.steps.map((step,index)=>{

      const clickable =
        makeClickableIngredients(
          escapeHtml(step),
          ingredientMap,
          usedIngredients
        );

      return `
        <div class="step">

          <div class="step-number">
            ${String(index+1).padStart(2,"0")}
          </div>

          <div class="step-text">
            ${clickable}
          </div>

        </div>
      `;

    }).join("");


  const related =
    getRelatedRecipes(recipe);


  const relatedHtml =
    related.length
      ? `
        <section class="more-recipes">

          <div class="more-heading">

            <small>
              MORE RECIPES
            </small>

            <h3>
              こんなのもどう？
            </h3>

          </div>

          <div class="more-grid">

            ${related.map((item,index)=>`

              <article
                class="more-card"
                data-related-index="${index}"
              >

                <div class="more-card-image">
                  <img
                    src="${item.image}"
                    alt="${escapeHtml(item.name)}"
                    loading="lazy"
                  >
                </div>

                <div class="more-card-info">

                  <div class="more-card-title">
                    ${escapeHtml(item.name)}
                  </div>

                  <div class="more-card-tags">
                    ${item.tags
                      .map(tag=>"#"+escapeHtml(tag))
                      .join(" ")
                    }
                  </div>

                </div>

              </article>

            `).join("")}

          </div>

        </section>
      `
      : "";


  modalContent.innerHTML = `

    <div class="modal-top">

      <div class="modal-image">

        <img
          src="${recipe.image}"
          alt="${escapeHtml(recipe.name)}"
        >

      </div>

      <div class="modal-intro">

        <h2 class="modal-title">
          ${escapeHtml(recipe.name)}
        </h2>

        <div class="modal-tags">

          ${recipe.tags.map(tag=>`

            <button
              class="modal-tag"
              type="button"
              data-tag="${escapeHtml(tag)}"
            >
              #${escapeHtml(tag)}
            </button>

          `).join("")}

        </div>

      </div>

    </div>


    <section class="modal-section">

      <h3 class="modal-section-title">
        材料 / INGREDIENTS
      </h3>

      <div class="ingredients-list">

        ${recipe.ingredients.map(item=>`

          <div class="ingredient-item">

            <span class="ingredient-name">
              ${escapeHtml(item[0])}
            </span>

            <span class="ingredient-amount">
              ${escapeHtml(item[1])}
            </span>

          </div>

        `).join("")}

      </div>

    </section>


    <section class="modal-section">

      <h3 class="modal-section-title">
        つくりかた / HOW TO COOK
      </h3>

      <div class="steps">
        ${stepsHtml}
      </div>

    </section>

    ${relatedHtml}

  `;


  modal.classList.remove("closing");
  modal.classList.add("show");

  modal.querySelector(".modal-box").scrollTop = 0;

  document.body.style.overflow = "hidden";


  /* 材料タップ */

  modalContent
    .querySelectorAll(".cooking-ingredient")
    .forEach(element=>{

      element.addEventListener(
        "click",
        event=>{

          event.stopPropagation();

          const bubble =
            element.querySelector(
              ".ingredient-bubble"
            );

          modalContent
            .querySelectorAll(
              ".ingredient-bubble"
            )
            .forEach(item=>{

              if(item !== bubble){
                item.style.display = "none";
              }

            });


          bubble.style.display =
            bubble.style.display === "none"
              ? "block"
              : "none";

        }
      );

    });


  /* タグ */

  modalContent
    .querySelectorAll(".modal-tag")
    .forEach(button=>{

      button.addEventListener("click",()=>{

        const tag =
          button.dataset.tag;

        window.location.href =
          "index.html?tag=" +
          encodeURIComponent(tag);

      });

    });


  /* 関連レシピ */

  modalContent
    .querySelectorAll(".more-card")
    .forEach(card=>{

      card.addEventListener("click",()=>{

        const index =
          Number(
            card.dataset.relatedIndex
          );

        if(related[index]){
          openRecipe(
            related[index]
          );
        }

      });

    });

}


/* =================================
   CLOSE MODAL
================================= */

function closeModal(){

  if(!modal.classList.contains("show")){
    return;
  }

  modal.classList.add("closing");

  setTimeout(()=>{

    modal.classList.remove(
      "show",
      "closing"
    );

    document.body.style.overflow = "";

  },250);

}


/* =================================
   HEADER NAV
   ページ遷移・履歴追加なし
================================= */

const navLinks =
  document.querySelectorAll(
    ".header-nav a"
  );

navLinks.forEach(link=>{

  link.addEventListener(
    "click",
    event=>{

      event.preventDefault();

      const targetId =
        link.getAttribute("href");

      const isTagPage =
        document.body.classList.contains(
          "tag-page-mode"
        );

      if(isTagPage){

        window.location.href =
          "index.html" + targetId;

        return;

      }

      const target =
        document.querySelector(
          targetId
        );

      if(target){

        target.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }

    }
  );

});


/* ロゴもトップへ */

document
  .querySelector(".header-logo")
  .addEventListener("click",event=>{

    event.preventDefault();

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  });


/* =================================
   MODAL EVENTS
================================= */

modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener(
  "click",
  event=>{

    if(event.target === modal){
      closeModal();
    }

  }
);


document.addEventListener(
  "keydown",
  event=>{

    if(event.key === "Escape"){
      closeModal();
    }

  }
);


/* =================================
   SEARCH
================================= */

searchInput.addEventListener(
  "input",
  ()=>{

    currentPage = 1;

    renderRecipes();

  }
);


/* =================================
   NAV ACTIVE
================================= */

const sections =
  document.querySelectorAll(
    "#home,#about,#recipes,#mood"
  );


function updateActiveNav(){

  const scrollPosition =
    window.scrollY + 180;

  let activeId = "home";

  sections.forEach(section=>{

    if(
      scrollPosition >=
      section.offsetTop
    ){
      activeId = section.id;
    }

  });

  navLinks.forEach(link=>{

    link.classList.toggle(
      "active",
      link.dataset.nav === activeId
    );

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav,
  {passive:true}
);


/* =================================
   INIT
================================= */

renderTags();
renderRecipes();
renderTagPage();
updateActiveNav();
