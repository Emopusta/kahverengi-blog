import asyncHandler from "../middleware/asyncHandler.js";
import Content from "../models/contentModel.js";

const create = asyncHandler(async (req, res) => {
  const { text, imagePath, priority } = req.body;

  const content = await Content.create({
    text,
    imagePath,
    priority,
  });

  return res.status(201).json(content);
});

export { create };
