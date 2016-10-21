'use strict';

function addIngredient(recipe, ingredient_name, amount) {
  recipe[`${ingredient_name}`] = amount
  return recipe
}


function removeIngredient(recipe, ingredient) {
  delete recipe[`${ingredient}`]
  return recipe
}


function updateIngredient(recipe, ingredient, amount) {
  recipe[`${ingredient}`] = amount
  return recipe
}


function readRecipe(recipe) {
  for ( var a in recipe) {
    console.log(`this recipe calls for ${recipe[a]} of ${a}`)
  }
}
