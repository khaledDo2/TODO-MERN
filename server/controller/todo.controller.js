//Import todo Model
Todo = require("../model/todo.model");

// For creating new Todo
exports.add = async (req, res) => {
  var todo = new Todo();

  todo.user_id = req.body.user_id ? req.body.user_id : todo.user_id;
  todo.content = req.body.content ? req.body.content : todo.content;
  //Save and check error
  todo.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New user Added!",
      data: todo,
    });
  });
};

// Show Todo
exports.show = function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) res.send(err);
    res.json({
      message: "todo Details",
      data: todo,
    });
  });
};

// Update Todo
exports.update = function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) {
      return res.status(404).json({
        err,
        message: "Not found!",
      });
    }

    todo.user_id = req.body.user_id ? req.body.user_id : todo.user_id;
    todo.content = req.body.content ? req.body.content : todo.content;
    //save and check errors
    todo
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          data: todo,
          message: "Updated Successfully!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Not updated!",
        });
      });
  });
};

// Delete Todo
exports.delete = function (req, res) {
  Todo.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Todo Deleted",
      });
    }
  );
};
