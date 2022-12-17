const mongoose = require("mongoose");

let PostSchema = mongoose.Schema(
  {
    company: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    role: {
      type: String,
      enum: ["Frontend", "Backend", "FullStack"],
      required: true,
    },
    position: {
      type: String,
      enum: [
        "Junior Frontend Developer",
        "Backend Developer",
        "FSD",
        "Junior Backend Developer",
      ],
      required: true,
    },
    level: {
      type: String,
      enum: ["Junior", "Senior"],
      required: true,
    },
    contract: {
      type: String,
      enum: ["Full Time", "Part Time"],
      required: true,
    },
    language: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
