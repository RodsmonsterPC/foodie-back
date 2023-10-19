import express from "express";
import multer from "multer";

import {
  createProduct,
  getProducts,
  getProductByUserId,
  updateProduct,
  deleteProduct,
} from "../useCases/post.useCase.js";
import dataFile from "../middlewares/storageFile.middleware.js";

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
        products: productsFound,
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
      message: console.log(error.message),
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

router.post("/", dataFile, async (request, response) => {
  try {
    const newData = {};
    console.log(request.body);
    newData.name = request.body.name;
    newData.price = request.body.price;
    newData.description = request.body.description;
    newData.existence = request.body.existence;
    newData.category = request.body.category;
    newData.active = request.body.active;
    //http://localhost:8081/
    if (request.file)
      newData.file = `http://localhost:8081/${request.file.filename}`;
    console.log(newData.file);
    const newProduct = await createProduct(newData);

    response.json({
      success: true,
      data: {
        products: newProduct,
      },
    });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
