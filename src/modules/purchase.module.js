import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minLenght: 3,
    maxLength: 100,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  file: {
    //
  },
  delivered: {
    type: Boolean,
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

export { Purchase };
