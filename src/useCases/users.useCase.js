import { User } from "../modules/users.module";

const createUser = async (userData) => {
  const { email, password } = userData;
  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new Error("El correo ya existe");
  }

  return User.create({ ...userData });
};

const getUsers = async (filters = {}) => {
  return User.findById(filters);
};

const getUserById = async (id) => {
  return User.findById(id);
};

const updateUser = async (id, dataUpdate, options = {}) => {
  return User.findByIdAndUpdate(id, dataUpdate, { new: true }, ...options);
};

const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};

export { createUser, getUsers, getUserById, updateUser, deleteUser };
