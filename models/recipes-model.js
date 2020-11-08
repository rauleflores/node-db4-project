const db = require("../data/config");

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes").where("id", id).first();
}

function getShoppingList(recipe_id) {
  return db("recipes_ingredients as ri")
    .leftJoin("ingredients as in", "in.id", "ri.ingredient_id")
    .where("ri.recipe_id", recipe_id)
    .select("in.name", "ri.quantity", "ri.quantity_type");
}

function getInstructions(recipe_id) {
  return db("steps")
    .where("recipe_id", recipe_id)
    .select("directions")
    .orderBy("step");
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
};
