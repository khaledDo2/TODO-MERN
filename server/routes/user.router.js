const controller = require("../controller/user.controller");
// const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get("/api/users", controller.all);
  app.post("/api/users", controller.add);
  app.get("/api/users/:id", controller.show);
  app.patch("/api/users/:id", controller.update);
  app.put("/api/users/:id", controller.update);
  app.delete("/api/users/:id", controller.delete);
};
