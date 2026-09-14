const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = recipes.find(recipe => recipe.id === recipeId);

const recipeDetail = document.getElementById("recipeDetail");

if (!recipe) {
  recipeDetail.innerHTML = `
    <div class="recipe-not-found">
      <h1>レシピが見つかりません</h1>
      <a href="index.html">レシピ一覧に戻る</a>
    </div>
  `;
} else {
  recipeDetail.innerHTML = `
    <h1>${recipe.title}</h1>
  `;
}