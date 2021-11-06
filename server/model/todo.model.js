var mongoose = require("mongoose");
//schema
var todoSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export Todo Model to MongoDB
var Todo = (module.exports = mongoose.model("Todo", todoSchema));
module.exports.get = function (callback, limit) {
  Todo.find(callback).limit(limit);
};
