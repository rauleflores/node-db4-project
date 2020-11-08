const express = require("express");
const recipesRouter = require("./routers/recipes-router");

const server = express();

server.use(express.json());
server.use("/recipes", recipesRouter);

server.get("/", async (req, res, next) => {
  try {
    res.json({
      message: "Hello, world!",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = server;
