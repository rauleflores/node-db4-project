exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Ham Sandwich" },
    { name: "Breakfast Cereal" },
    { name: "Sweet Lemonade" },
    { name: "Toast" },
    { name: "Rice Pudding" },
  ]);
};
