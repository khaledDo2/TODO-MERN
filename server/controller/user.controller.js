//Import User Model
User = require("../model/user.model");

exports.all = function (req, res) {
  User.get(function (err, user) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got User Successfully!",
      data: user,
    });
  });
};

//For creating new User
exports.add = async (req, res) => {
  var user = new User();

  user.name = req.body.name ? req.body.name : user.name;
  user.phone = req.body.phone;
  
  //Save and check error
  user.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New user Added!",
      data: user,
    });
  });
};

// Show
exports.show = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "User Details",
      data: user,
    });
  });
};

// Update
exports.update = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return res.status(404).json({
        err,
        message: "Not found!",
      });
    }

    user.name = req.body.name ? req.body.name : user.name;
    user.phone = req.body.phone;
    //save and check errors
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          data: user,
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

// Delete
exports.delete = function (req, res) {
  User.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "User Deleted",
      });
    }
  );
};
