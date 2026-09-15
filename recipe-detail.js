/* =================================
   RECIPE DETAIL
================================= */

const params = new URLSearchParams(
  window.location.search
);

const recipeId = params.get("id");

const recipe = recipes.find(
  recipe => recipe.id === recipeId
);

const recipeDetail =
  document.getElementById("recipeDetail");


/* =================================
   RECIPE PARTS
================================= */

function getRecipePart(partId){

  return recipeParts.find(
    part => part.id === partId
  );

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
   INGREDIENT MAP
================================= */

function makeIngredientMap(recipe){

  const map = new Map();

  recipe.ingredients.forEach(item => {
    map.set(item[0],item[1]);
  });

  return map;

}


/* =================================
   CLICKABLE INGREDIENTS
================================= */

function makeClickableIngredients(
  text,
  ingredientMap,
  usedIngredients
){

  let result = text;

  const names =
    Array.from(ingredientMap.keys())
      .sort((a,b) => b.length - a.length);


  names.forEach(name => {

    if(usedIngredients.has(name)){
      return;
    }


    const safeName =
      escapeHtml(name);

    const index =
      result.indexOf(safeName);


    if(index === -1){
      return;
    }


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
        <span class="cooking-ingredient">

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
   RELATED RECIPES
================================= */

function getRelatedRecipes(current){

  const sideDishPool =
    recipes.filter(recipe => {

      if(recipe === current){
        return false;
      }

      return recipe.tags.some(tag =>
        [
          "副菜",
          "サラダ",
          "野菜",
          "おかず"
        ].includes(tag)
      );

    });


  return [...sideDishPool]
    .sort(() => Math.random() - .5)
    .slice(0,3);

}


/* =================================
   RECIPE NOT FOUND
================================= */

if(!recipe){

  recipeDetail.innerHTML = `
    <div class="recipe-not-found">

      <h1>
        レシピが見つかりません
      </h1>

      <a href="index.html">
        レシピ一覧に戻る
      </a>

    </div>
  `;


}else{

  /* =================================
     PREPARE STEPS
  ================================= */

  const ingredientMap =
    makeIngredientMap(recipe);

  const usedIngredients =
    new Set();

  const stepsHtml =
    recipe.steps
      .map((step,index) => {

        const clickable =
          makeClickableIngredients(
            escapeHtml(step),
            ingredientMap,
            usedIngredients
          );


        return `
          <div class="step">

            <div class="step-number">
              ${String(index + 1).padStart(2,"0")}
            </div>

            <div class="step-text">
              ${clickable}
            </div>

          </div>
        `;

      })
      .join("");


  /* =================================
     RELATED
  ================================= */

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

            ${related.map(item => `

              <a
                class="more-card"
                href="recipe.html?id=${encodeURIComponent(item.id)}"
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
                      .map(
                        tag => "#" + escapeHtml(tag)
                      )
                      .join(" ")
                    }

                  </div>

                </div>

              </a>

            `).join("")}

          </div>

        </section>
      `
      : "";
      
      /* =================================
   RECIPE PARTS HTML
================================= */

const recipePartsHtml =
  recipe.parts?.map(partId => {

    const part =
      getRecipePart(partId);

    if(!part){
      return "";
    }

    return `
      <button
        class="recipe-part-button"
        type="button"
        data-part-id="${escapeHtml(part.id)}"
      >
        ${escapeHtml(part.name)}
      </button>
    `;

  }).join("") || "";


  /* =================================
     RENDER
  ================================= */

  recipeDetail.innerHTML = `

    <div class="modal-top">

      <div class="modal-image">

        <img
          src="${recipe.image}"
          alt="${escapeHtml(recipe.name)}"
        >

      </div>


      <div class="modal-intro">

        <h1 class="modal-title">
          ${escapeHtml(recipe.name)}
        </h1>


        <div class="modal-tags">

          ${recipe.tags.map(tag => `

            <button
              class="modal-tag"
              type="button"
              data-tag="${escapeHtml(tag)}"
            >
              #${escapeHtml(tag)}

            </button>

          `).join("")}

        </div>
        
        ${recipePartsHtml}

      </div>

    </div>


    <section class="modal-section">

      <h2 class="modal-section-title">
        材料 / INGREDIENTS
      </h2>


      <div class="ingredients-list">

        ${recipe.ingredients.map(item => `

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

      <h2 class="modal-section-title">
        つくりかた / HOW TO COOK
      </h2>


      <div class="steps">

        ${stepsHtml}

      </div>

    </section>


    ${relatedHtml}

  `;


  /* =================================
     RECIPE DETAIL ANIMATION
  ================================= */

  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      recipeDetail.classList.add(
        "recipe-detail-loaded"
      );

    });

  });


  /* =================================
     INGREDIENT TAP
  ================================= */

  recipeDetail
    .querySelectorAll(".cooking-ingredient")
    .forEach(element => {

      element.addEventListener(
        "click",
        event => {

          event.stopPropagation();


          const bubble =
            element.querySelector(
              ".ingredient-bubble"
            );


          recipeDetail
            .querySelectorAll(".ingredient-bubble")
            .forEach(item => {

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


  /* =================================
     TAGS
  ================================= */

  recipeDetail
    .querySelectorAll(".modal-tag")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const tag =
            button.dataset.tag;

          window.location.href =
            "index.html?tag=" +
            encodeURIComponent(tag);

        }
      );

    });

}