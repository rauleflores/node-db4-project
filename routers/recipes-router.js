const express = require("express");
const rm = require("../models/recipes-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await rm.getRecipes();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const recipes = await rm.getRecipesById(req.params.id);
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/shoppinglist", async (req, res, next) => {
  try {
    const list = await rm.getShoppingList(req.params.id);
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/instructions", async (req, res, next) => {
  try {
    const steps = await rm.getInstructions(req.params.id);
    res.json(steps);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
