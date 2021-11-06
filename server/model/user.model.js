var mongoose = require("mongoose");
//schema
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export User Model to MongoDB
var User = (module.exports = mongoose.model("User", userSchema));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
