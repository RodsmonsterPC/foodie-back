import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  category: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    trim: true,
    default: 1,
  },
});

const Product = mongoose.model("Product", productSchema);

export { Product };
