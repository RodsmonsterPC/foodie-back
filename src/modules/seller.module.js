import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minLenght: 3,
    maxLength: 100,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minLenght: 10,
  },

  email: {
    type: String,
    required: true,
    match: /.*@.*\..*/,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3,
    maxLength: 200,
  },

  rfc: {
    type: String,
    required: true,
    trim: true,
    minLenght: 13,
  },

  address: {
    type: String,
    required: true,
    maxLength: 100,
  },
  imgLogo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "seller",
  },
});

const Seller = mongoose.model("seller", sellerSchema);

export { Seller };
