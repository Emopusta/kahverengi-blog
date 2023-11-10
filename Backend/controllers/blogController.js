import asyncHandler from "../middleware/asyncHandler.js";
import Blog from "../models/blogModel.js"
import Content from "../models/contentModel.js";

const create = asyncHandler(async (req, res) => {
  const { address, contents, ...blogData } = req.body;

  const createdContents = await Promise.all(
    contents.map(async (content,index) => {
      const newContent = new Content(content);
      newContent.priority = index;
      return await newContent.save();
    })
  );

  const blogInputs = {name:blogData.name, description:blogData.description, contents:createdContents, address:address};
  console.log(blogInputs);
  const blog = await Blog.create(blogInputs);
  return res.status(201).json(blog);


});


export { create };
