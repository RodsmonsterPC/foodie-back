import { Seller } from "../modules/seller.module.js";

const creatSeller = async (sellerData) => {
  return Seller.create(sellerData);
};

const getSeller = async (filters) => {
  return Seller.find(filters);
};

const getSellerByUserId = async (userId) => {
  return Seller.findById(userId);
};

const updateSeller = async (id, dataUpdate, options = {}) => {
  return Seller.findByIdAndUpdate(id, dataUpdate, { new: true, ...options });
};

const deleteSeller = async (id) => {
  return Seller.findByIdAndDelete(id);
};

export {
  creatSeller,
  getSeller,
  getSellerByUserId,
  updateSeller,
  deleteSeller,
};
