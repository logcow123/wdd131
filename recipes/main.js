import recipes from './recipes.mjs';

const searchButton = document.getElementById("user-search");
const searchBar = document.getElementById("user-input");

function getRandomInt(min, max) {
    min = Math.ceil(min); // rounds up
    max = Math.floor(max); // rounds down
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRecipe(recipesArray) {
    let recipe = recipesArray[getRandomInt(0, recipesArray.length - 1)];
    return recipe;
}

function tagGenerator(tags) {
    let htmlTags = ``;
    for (const tag of tags) {
        htmlTags = htmlTags + `<span>${tag}</span>`;
    }
    return htmlTags;
}

function ratingGenerator(rating){
    let htmlRatings = ``;
    const noStar = 5 - rating;
    for (let i = 0; i < rating; i++) {
        htmlRatings = htmlRatings + `<span aria-hidden="true" class="icon-star">⭐</span>`;
      }
    for (let i = 0; i < noStar; i++) {
        htmlRatings = htmlRatings + `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
      }
    return htmlRatings;
}

function recipeTemplate(info) {
    return `
    <div class="recipe">
            <img src="${info.image}">
            <div class="description">
                <div class="tags">
                    ${tagGenerator(info.tags)}
                </div>
                <div class="title-and-ratings">
                    <a class="recipe-link" href="https://www.allrecipes.com/recipe/12409/apple-crisp-ii/">${info.name}</a>
                </div>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${info.rating} out of 5 stars"
                >
                    ${ratingGenerator(info.rating)}
                <p class="large-screen-description">${info.description}</p>
                </span>
            </div>
        </div>
    `
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById('the-main-page');
    let recipeStrings = '';
    for (const recipe of recipeList) {
        recipeStrings += recipeTemplate(recipe);
    }
    recipeContainer.innerHTML = recipeStrings;
}

function init() {
    // get a random recipe
    const recipe = randomRecipe(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

function filterRecipes(query) {
    return recipes.filter(recipe => {
        // Check if the query is found in name, description, tags, or ingredients
        let inName = recipe.name.toLowerCase().includes(query);
        let inDescription = recipe.description.toLowerCase().includes(query);
        let inTags = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        let inIngredients = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));

        // Return true if any of the conditions match
        return inName || inDescription || inTags || inIngredients;
    });
}

searchButton.addEventListener("click", function(){
     // Get the user input from the input field and convert to lowercase
     let userInput = searchBar.value.toLowerCase().trim();

     // Filter recipes based on the user input
     let filteredRecipes = filterRecipes(userInput);
 
     // Sort recipes alphabetically by name
     filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
 
     // Render the filtered recipes
     renderRecipes(filteredRecipes);

});

init();