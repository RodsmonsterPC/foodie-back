import express from "express";
import sellerFile from "../middlewares/sellerFiles.middleware.js";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../useCases/users.useCase.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const { name, email } = request.query;

    let filters = {};

    if (name) filters = { ...filters, name };
    if (email) filters = { ...filters, email };

    const usersFound = await getUsers(filters);

    response.json({
      success: true,
      data: {
        users: usersFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get All users",
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const usersFound = await getUserById(id);
    response.json({
      success: true,
      data: {
        users: usersFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get users",
    });
  }
});

router.patch("/:id", sellerFile, async (request, response) => {
  try {
    const id = request.params.id;
    const newData = {};
    newData.name = request.body.name;
    newData.phoneNumber = request.body.phoneNumber;
    newData.description = request.body.description;
    newData.email = request.body.email;
    newData.rfc = request.body.rfc;
    newData.address = request.body.address;
    newData.shopping = request.body.shopping;
    newData.role = "seller";

    if (request.file)
      newData.imgLogo = `http://localhost:8081/${request.file.filename}`;

    const userUpdated = await updateUser(id, newData);

    response.json({
      success: true,
      data: {
        users: userUpdated,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const deletedUser = await deleteUser(id);
    response.json({
      success: true,
      data: {
        Users: deletedUser,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at delete user",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newData = request.body;

    const newUser = await createUser(newData);
    response.json({
      success: true,
      data: {
        Users: newUser,
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
