import mongoose from "mongoose";

const shoppingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minLenght: 3,
    maxLength: 100,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  imgProduct: {
    type: String,
  },
  price: {
    type: Number,
  },
  id: {
    type: String,
  },
});

const Shopping = mongoose.model("Shopping", shoppingSchema);

export { Shopping };
