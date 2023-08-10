import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minLenght: 3,
    maxLength: 100,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    minLenght: 3,
    maxLength: 100,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  existence: {
    type: Number,
    required: true,
    trim: true,
  },
  file: {
    //
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("product", productSchema);

export { Product };
