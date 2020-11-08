exports.seed = function (knex) {
  return knex("steps").insert([
    { recipe_id: 1, step: 1, directions: "Toast bread." },
    { recipe_id: 1, step: 4, directions: "Layer ham onto bottom bread." },
    { recipe_id: 1, step: 3, directions: "Apply mayo to both slices." },
    { recipe_id: 1, step: 5, directions: "Top ham with Lettuce" },
    { recipe_id: 1, step: 2, directions: "Place bottom bread on plate." },
    { recipe_id: 1, step: 7, directions: "Place top bread and enjoy." },
    { recipe_id: 1, step: 6, directions: "Add butter." },
    { recipe_id: 2, step: 1, directions: "Grab a bowl." },
    { recipe_id: 2, step: 2, directions: "Grab breakfast ceral box." },
    { recipe_id: 2, step: 3, directions: "Pour milk into bowl." },
    { recipe_id: 2, step: 4, directions: "Pour cereal into bowl." },
    { recipe_id: 2, step: 5, directions: "Add butter and enjoy." },
    { recipe_id: 3, step: 1, directions: "Squeeze lemons." },
    {
      recipe_id: 3,
      step: 2,
      directions: "Add lemon juice into a large cup with water.",
    },
    { recipe_id: 3, step: 3, directions: "Add sugar and salt." },
    {
      recipe_id: 3,
      step: 4,
      directions: "Add melted butter, serve warm and enjoy.",
    },
    { recipe_id: 4, step: 1, directions: "Place toast into toaster." },
    { recipe_id: 4, step: 2, directions: "Add butter and enjoy." },
    {
      recipe_id: 5,
      step: 1,
      directions: "Cook rice using raw rice, water and salt.",
    },
    {
      recipe_id: 5,
      step: 2,
      directions:
        "Add cooked rice into warm milk and cook for a few minutes. (Can add cinnamon here).",
    },
    { recipe_id: 5, step: 3, directions: "Add sugar and let cool." },
    {
      recipe_id: 5,
      step: 4,
      directions: "Re-heat, add butter, serve warm and enjoy.",
    },
  ]);
};
