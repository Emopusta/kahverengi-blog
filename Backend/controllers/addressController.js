import asyncHandler from "../middleware/asyncHandler.js";
import Address from "../models/addressModel.js";

const create = asyncHandler(async (req, res) => {
  const { country, city, county } = req.body;

  const address = await Address.create({
    country,
    city,
    county,
  });

  return res.status(201).json(address);
});

export { create };
