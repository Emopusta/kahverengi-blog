import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    Country: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    County: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
