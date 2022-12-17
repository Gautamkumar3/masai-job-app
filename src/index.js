const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const PostRouter = require("./modal/post.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/post", PostRouter);

app.get("/", (req, res) => {
  res.send("Wecome");
});

app.listen(8080, async () => {
  await dbConnect();
  console.log("Server is running on port 8080");
});
