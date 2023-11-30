import express, { response } from "express";

import {
  creatShopping,
  getShopping,
  getShoppingByUserId,
  deleteShopping,
  updateShopping,
} from "../useCases/shopping.useCase.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const { name, email } = request.query;

    let filters = {};
    if (name) filters = { ...filters, name };
    if (email) filters = { ...filters, email };

    const shoppingFound = await getShopping(filters);

    response.json({
      success: true,
      data: {
        Shoppings: shoppingFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: console.log(error.message),
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const shoppingFound = await getShoppingByUserId(id);

    response.json({
      success: true,
      data: {
        Shopping: shoppingFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get shopping",
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    let updateData = request.body;

    const shoppingUpdate = await updateShopping(id, updateData);

    response.json({
      success: true,
      data: {
        Shoppings: shoppingUpdate,
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

    const shoppingDelete = await deleteShopping(id);

    response.json({
      success: true,
      data: {
        Shopping: shoppingDelete,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: true,
      message: "Error at delete shopping",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    let newData = request.body;
    if (request.file) newData.profilePicture = request.file.path;
    const newShopping = await creatShopping(newData);

    response.json({
      success: true,
      data: {
        Shopping: newShopping,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at create Shopping",
    });
  }
});

export default router;
