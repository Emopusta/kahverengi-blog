import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    priority: {
      type: Number,
      required: true,
      unique: true,
    },
    imagePath: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
