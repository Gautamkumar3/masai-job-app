const express = require("express");
const Post = require("../Schema/post.schema");

const app = express.Router();

app.post("/", async (req, res) => {
  const { name, city, location, role, level, position, language, contract } =
    req.body;
  if (
    (!name, !city, !location, !role, !level, !position, !language, !contract)
  ) {
    return res.statusCode(500).send("All fields are required");
  }
  try {
    let jobPost = new Post({ ...req.body });
    await jobPost.save();
    res.status(200).send(jobPost);
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

app.get("/", async (req, res) => {
  const { page = 1, limit = 10, q = "asc" } = req.query;
  try {
    const post = await Post.find()
      .sort({ createdAt: q == "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).send(post);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

app.get("/filterByRole", async (req, res) => {
  const { q } = req.query;
  console.log(q);
  try {
    const filterPost = await Post.find({ role: q });
    res.status(200).send(filterPost);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

app.get("/search", async (req, res) => {
  let keyword = {};
  if (req.query.q) {
    keyword = req.query.q;
  }
  console.log(keyword);
  try {
    const AllPost = await Post.find({
      language: { $regex: keyword, $options: "i" },
    });
    console.log(AllPost);
    return res.status(200).send(AllPost);
  } catch (er) {
    return res.status(403).send(er.message);
  }
});

module.exports = app;
