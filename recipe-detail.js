/* =================================
   RECIPE DETAIL
================================= */

const params = new URLSearchParams(
  window.location.search
);

const recipeId = params.get("id");

const recipe = recipes.find(
  item => item.id === recipeId
);

const recipeDetail =
  document.getElementById("recipeDetail");


/* =================================
   HELPERS
================================= */

function getRecipePart(partId) {
  return recipeParts.find(
    part => part.id === partId
  );
}


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function makeIngredientMap(currentRecipe) {
  return new Map(
    currentRecipe.ingredients.map(
      ([name, amount]) => [name, amount]
    )
  );
}


function getRecipePartByIngredient(
  ingredientName,
  currentRecipe
) {
  if (!currentRecipe.parts?.length) {
    return null;
  }

  return currentRecipe.parts
    .map(getRecipePart)
    .find(
      part =>
        part &&
        part.name === ingredientName
    ) || null;
}


/* =================================
   CLICKABLE INGREDIENTS
================================= */

function makeClickableIngredients(
  text,
  ingredientMap,
  usedIngredients
) {
  const names =
    Array.from(ingredientMap.keys())
      .sort(
        (a, b) => b.length - a.length
      );

  if (!names.length) {
    return escapeHtml(text);
  }

  const escapedText =
    escapeHtml(text);

  const pattern =
    names
      .map(name =>
        name.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )
      )
      .join("|");

  const regex =
    new RegExp(`(${pattern})`, "g");

  return escapedText
    .split(regex)
    .map((part, index) => {

      if (index % 2 === 0) {
        return part;
      }

      if (usedIngredients.has(part)) {
        return part;
      }

      usedIngredients.add(part);

      const amount =
        ingredientMap.get(part);

      return `
        <span class="cooking-ingredient">
          ${part}
          <span class="ingredient-bubble">
            ${escapeHtml(amount)}
          </span>
        </span>
      `;
    })
    .join("");
}


/* =================================
   RELATED RECIPES
================================= */

function getRelatedRecipes(currentRecipe) {
  const relatedTags = [
    "副菜",
    "サラダ",
    "野菜",
    "おかず"
  ];

  const candidates =
    recipes.filter(item => {

      if (item.id === currentRecipe.id) {
        return false;
      }

      return item.tags.some(tag =>
        relatedTags.includes(tag)
      );
    });

  return [...candidates]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}


/* =================================
   PART POPUP
================================= */

function openRecipePartPopup(
  part,
  usageAmount
) {
  const ingredientsHtml =
    part.ingredients
      .map(item => `
        <div class="part-ingredient">

          <span>
            ${escapeHtml(item[0])}
          </span>

          <span>
            ${escapeHtml(item[1])}
          </span>

        </div>
      `)
      .join("");

  const stepsHtml =
    part.steps
      .map((step, index) => `
        <div class="part-step">

          <span class="part-step-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span>
            ${escapeHtml(step)}
          </span>

        </div>
      `)
      .join("");

  const popup =
    document.createElement("div");

  popup.className =
    "recipe-part-popup";

  popup.innerHTML = `

    <div
      class="recipe-part-popup-inner"
      role="dialog"
      aria-modal="true"
      aria-label="${escapeHtml(part.name)}"
    >

      <button
        class="recipe-part-popup-close"
        type="button"
        aria-label="閉じる"
      >
        ×
      </button>


      <div class="recipe-part-popup-heading">

        <small>
          PARTS RECIPE
        </small>

        <h2>
          ${escapeHtml(part.name)}
        </h2>

      </div>


      <div class="part-recipe-meta">

        <div class="part-recipe-meta-item">

          <span>
            できあがり
          </span>

          <strong>
            ${escapeHtml(part.yieldAmount)}
            ${escapeHtml(part.yieldUnit)}
          </strong>

        </div>


        <div class="part-recipe-meta-item">

          <span>
            このレシピで使用
          </span>

          <strong>
            ${escapeHtml(usageAmount)}
          </strong>

        </div>

      </div>


      <section>

        <h3>
          材料 / INGREDIENTS
        </h3>

        <div class="part-ingredients">
          ${ingredientsHtml}
        </div>

      </section>


      <section>

        <h3>
          つくりかた / HOW TO COOK
        </h3>

        <div class="part-steps">
          ${stepsHtml}
        </div>

      </section>

    </div>
  `;

  document.body.appendChild(popup);

  requestAnimationFrame(() => {
    popup.classList.add("is-open");
  });


  const closePopup = () => {
    popup.classList.remove("is-open");

    setTimeout(() => {
      popup.remove();
    }, 250);
  };


  popup
    .querySelector(".recipe-part-popup-close")
    .addEventListener(
      "click",
      closePopup
    );


  popup.addEventListener(
    "click",
    event => {
      if (event.target === popup) {
        closePopup();
      }
    }
  );


  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Escape" &&
        document.body.contains(popup)
      ) {
        closePopup();
      }
    },
    { once: true }
  );
}


/* =================================
   NOT FOUND
================================= */

if (!recipe) {

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

} else {

  /* =================================
     PREPARE STEPS
  ================================= */

  const ingredientMap =
    makeIngredientMap(recipe);

  const usedIngredients =
    new Set();


  const stepsHtml =
    recipe.steps
      .map((step, index) => {

        const clickable =
          makeClickableIngredients(
            step,
            ingredientMap,
            usedIngredients
          );

        return `
          <div class="step">

            <div class="step-number">
              ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="step-text">
              ${clickable}
            </div>

          </div>
        `;
      })
      .join("");


  /* =================================
     RELATED RECIPES
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
                    src="${escapeHtml(item.image)}"
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
                        tag =>
                          "#" + escapeHtml(tag)
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
     INGREDIENTS
  ================================= */

  const ingredientsHtml =
    recipe.ingredients
      .map(item => {

        const part =
          getRecipePartByIngredient(
            item[0],
            recipe
          );

        return `
          <div
            class="ingredient-item${part ? " recipe-part-ingredient" : ""}"
            ${part
              ? `data-part-id="${escapeHtml(part.id)}"`
              : ""
            }
          >

            <span class="ingredient-name">

              ${escapeHtml(item[0])}

            </span>

            <span class="ingredient-amount">
              ${escapeHtml(item[1])}
            </span>

          </div>
        `;
      })
      .join("");


  /* =================================
     RENDER
  ================================= */

  recipeDetail.innerHTML = `

    <div class="modal-top">

      <div class="modal-image">

        <img
          src="${escapeHtml(recipe.image)}"
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

      </div>

    </div>


    <section class="modal-section">

      <div class="recipe-section-heading">

        <h2 class="modal-section-title">
          材料 / INGREDIENTS
        </h2>

        <div class="recipe-servings">
          ${escapeHtml(recipe.servings)}人前
        </div>

      </div>


      <div class="ingredients-list">

        ${ingredientsHtml}

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
     DETAIL ANIMATION
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
            .querySelectorAll(
              ".ingredient-bubble"
            )
            .forEach(item => {

              if (item !== bubble) {
                item.classList.remove("is-visible");
              }

            });

          bubble.classList.toggle(
            "is-visible"
          );

        }
      );

    });


  /* =================================
     PART RECIPE TAP
  ================================= */

  recipeDetail
    .querySelectorAll(
      ".recipe-part-ingredient"
    )
    .forEach(element => {

      element.addEventListener(
        "click",
        () => {

          const partId =
            element.dataset.partId;

          const part =
            getRecipePart(partId);

          if (!part) {
            return;
          }

          const ingredientAmount =
            recipe.ingredients.find(
              item => item[0] === part.name
            )?.[1] || "";

          openRecipePartPopup(
            part,
            ingredientAmount
          );

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