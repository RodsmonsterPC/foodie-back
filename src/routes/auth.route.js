import express from "express";
import { login } from "../useCases/auth.useCase.js";

const router = express.Router();

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email,password)
    const token = await login(email, password);
    console.log(token)
    response.json({
      success: true,
      message: "Login success",
      data: {
        token,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
