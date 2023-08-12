import express from "express";

import {
  createProduct,
  getProducts,
  getProductByUserId,
  updateProduct,
  deleteProduct,
} from "../useCases/post.useCase.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const { name, email } = request.query;

    let filters = {};

    if (name) filters = { ...filters, name };
    if (email) filters = { ...filters, email };

    const productFound = await getProducts(filters);

    response.json({
      success: true,
      data: {
        product: productFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get All products",
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const productsFound = await getProductByUserId(id);
    response.json({
      success: true,
      data: {
        productss: productsFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get products",
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    let updateData = request.body;

    const productUpdated = await updateProduct(id, updateData);
    response.json({
      success: true,
      data: {
        products: productUpdated,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at update product",
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const deletedProduct = await deleteProduct(id);
    response.json({
      success: true,
      data: {
        products: deletedProduct,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at delete product",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newData = request.body;

    const newProduct = await createProduct(newData);
    response.json({
      success: true,
      data: {
        products: newProduct,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
