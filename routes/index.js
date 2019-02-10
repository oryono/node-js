const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
});

router.get("/courses/:id", (req, res) => {
  //
});

router.post("/courses", (req, res) => {
  course = new Course();
  course.name = req.body.name;
  course.description = req.body.description;
  course.save();
  res.send(course);
});

router.put("/courses/:id", (req, res) => {
  //
});

router.delete("/courses/:id", (req, res) => {});

module.exports = router;
