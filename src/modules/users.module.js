import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLenght: 3,
    maxLength: 100,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    match: /.*@.*\..*/,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
<<<<<<< HEAD
  role: {
=======
  phoneNumber: {
    type: Number,
    minLenght: 10,
  },
  description: {
    type: String,
    trim: true,
    minLenght: 3,
    maxLength: 200,
  },
  rfc: {
    type: String,
    trim: true,
    minLenght: 13,
  },
  address: {
>>>>>>> 6d238ba11ea6c2302bceae035a12e45840bb694e
    type: String,
    minLenght: 3,
    maxLength: 100,
  },
  imgLogo: {
    type: String,
  },
  role: {
    type: [String],
    enum: ["buyer", "seller"],
    default: "buyer",
  },
});

const User = mongoose.model("User", userSchema);

export { User };
