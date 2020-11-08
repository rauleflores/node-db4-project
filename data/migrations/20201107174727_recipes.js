exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("id");
      table.text("name").notNull().unique();
    })
    .createTable("ingredients", (table) => {
      table.increments("id");
      table.text("name").notNull().unique();
      table.text("description", 128);
    })
    .createTable("steps", (table) => {
      table.integer("recipe_id").notNull().references("id").inTable("recipes");
      table.integer("step").notNull();
      table.text("directions").notNull();
    })
    .createTable("recipes_ingredients", (table) => {
      table
        .integer("recipe_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("recipe");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("ingredients");
      table.float("quantity").notNull();
      table.text("quantity_type", 8).notNull();
      table.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTable("recipes_ingredients")
    .dropTable("steps")
    .dropTable("ingredients")
    .dropTable("recipes");
};
