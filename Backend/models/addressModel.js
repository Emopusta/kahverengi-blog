import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    fullAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
