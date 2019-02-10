const mongoose = require("mongoose");

const Course = mongoose.model("Course", {
  name: String,
  description: String,
  category: Object,
  user: Object,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now }
});

module.exports = Course;
