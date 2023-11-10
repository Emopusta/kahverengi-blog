import asyncHandler from "../middleware/asyncHandler.js";
import Address from "../models/addressModel.js"

const create = asyncHandler(async (req, res) => {
  const { country, city, county } = req.body;
  const addressInputs = { country, city, county };
  const address = await Address.create(addressInputs);
  return res.status(201).json(address);
});


export { create };
