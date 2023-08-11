import { Product } from "../modules/post.module.js";

const createProduct = async (productData) => {
  return Product.create(productData);
};

const getProducts = async (filters) => {
  return Product.find(filters);
};

const getProductByUserId = async (userId) => {
  return Product.findById(userId);
};

const updateProduct = async (id, dataUpdate, options = {}) => {
  return Product.findByIdAndUpdate(id, dataUpdate, { new: true, ...options });
};

const deleteProduct = async (id) => {
  return Product.findByIdAndDelete(id);
};

export {
  createProduct,
  getProducts,
  getProductByUserId,
  updateProduct,
  deleteProduct,
};
