import express, { response } from "express";

import {
  creatSeller,
  getSeller,
  getSellerByUserId,
  deleteSeller,
  updateSeller,
} from "../useCases/seller.useCase.js";

const router = express.Router();

router.get("/", async (request, respose) => {
  try {
    let { name, email } = request.query;

    if (name) filters = { ...filters, name };
    if (email) filters = { ...filters, email };

    const sellerFound = await getSeller(filters);

    response.json({
      success: true,
      data: {
        sellers: sellerFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get all sellers",
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const sellerFound = await getSellerByUserId(id);

    response.json({
      success: true,
      data: {
        seller: sellerFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get seller",
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    let updateData = request.body;

    const sellerUpdate = await updateSeller(id, updateData);

    response.json({
      success: true,
      data: {
        sellers: sellerUpdate,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at update data",
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const sellerDelete = await deleteSeller(id);

    response.json({
      success: true,
      data: {
        seller: sellerDelete,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: true,
      message: "Error at delete seller",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    let newData = request.body;

    const newSeller = await creatSeller(newData);

    response.json({
      success: true,
      data: {
        seller: newSeller,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at create Seller",
    });
  }
});

export default router;
