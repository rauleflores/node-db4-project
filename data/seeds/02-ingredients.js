exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "Rice", description: "Raw rice." },
    { name: "Water", description: "Like clear, flavorless soda." },
    { name: "Salt", description: "From the dried tears of your enemies." },
    { name: "Bread", description: "Made from the finest yeast." },
    {
      name: "Mayo",
      description: "Creamy egg-based sauce, for keeping your mouth moist.",
    },
    { name: "Ham", description: "Thinly sliced pork flesh." },
    { name: "Lettuce", description: "Green vegetable, mostly water." },
    { name: "Milk", description: "Liquid gold, comes from cows." },
    { name: "Cereal", description: "Dried cereal from a box." },
    {
      name: "Lemons",
      description:
        "Round yellow orbs, produce a sour substance. Do NOT get in eyes/cuts.",
    },
    { name: "Sugar", description: "White, powdery and sweet." },
    { name: "Butter", description: "Artery cloggin' goodness." },
  ]);
};
