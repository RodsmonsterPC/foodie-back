import { Shopping } from "../modules/shopping.module.js";

const creatShopping = async (shoppingData) => {
  return Shopping.create(shoppingData);
};

const getShopping = async (filters) => {
  return Shopping.find(filters);
};

const getShoppingByUserId = async (userId) => {
  return Shopping.findById(userId);
};

const updateShopping = async (id, dataUpdate, options = {}) => {
  return Shopping.findByIdAndUpdate(id, dataUpdate, { new: true, ...options });
};

const deleteShopping = async (id) => {
  return Shopping.findByIdAndDelete(id);
};

export {
  creatShopping,
  getShopping,
  getShoppingByUserId,
  updateShopping,
  deleteShopping,
};
