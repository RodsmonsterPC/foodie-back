import bcrypt from "../lib/bcrypt.js";

import jwt from "../lib/jwt.js";

import { User } from "../modules/users.module.js";

const login = async (email, password) => {
  const userFound = await User.findOne({ email });

  if (!userFound) throw new Error("Invalid credentials");

  const isPasswordValid = await bcrypt.compare(password, userFound.password);

  if (!isPasswordValid) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: userFound._id });

  return token;
};
// https://nextjs.org/docs/app/api-reference/functions/use-router
export { login };
