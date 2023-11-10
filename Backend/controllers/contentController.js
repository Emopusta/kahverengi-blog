import asyncHandler from "../middleware/asyncHandler.js";
import Content from "../models/contentModel.js"

const create = asyncHandler(async (req, res) => {
  const { text, imagePath, priority } = req.body;
  const contentInputs = { text, imagePath, priority };
  const content = await Content.create(contentInputs);
  return res.status(201).json(content);


});


export { create };
