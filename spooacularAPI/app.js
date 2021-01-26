document.addEventListener("DOMContentLoaded",function(){
    console.log('onload');

    let url = "https://api.spoonacular.com/recipes/random/?apiKey=83a429ba69264a15bc127811bbd4b9b4";

    fetch(url)
    .then (response => {
        return response.json();
    })
    .then(data => {
        
        let recipe = data.recipes[0]
        let title = recipe.title
        let imageUrl = recipe.image
        let ingrediants = recipe.extendedIngredients
        let summary = recipe.summary
        let instructions = recipe.instructions
        let recipeHTML = `
        <h1>${title}</h1>
        <img src="${imageUrl}"/>
        `;
        document.querySelector('.summary').innerHTML = `<p>${summary}</p>`;
        document.querySelector('.instructions').innerHTML = `
            <h2>Instructions</h2>
            ${instructions}
        `;

        let output = '';

        ingrediants.forEach(ingredient => {
            output += `<li>${ingredient.name}: ${ingredient.amount} ${ingredient.unit} </li>`
        });

        document.querySelector('.list').innerHTML = output;

    });




});
