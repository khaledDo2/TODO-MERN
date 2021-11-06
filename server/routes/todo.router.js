const controller = require("../controller/todo.controller");
// const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/todo", controller.add);
  app.get("/api/todo/:id", controller.show);
  app.put("/api/todo/:id", controller.update);
  app.delete("/api/todo/:id", controller.delete);
};
