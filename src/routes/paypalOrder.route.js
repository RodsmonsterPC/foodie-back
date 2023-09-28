import express from "express";
import { createOrder } from "../controllers/payment.controller.js";
const route = express.Router()

route.post("/my-server/create-paypal-order", async (req, res) => {
    
    try {
      // use the cart information passed from the front-end to calculate the order amount detals
      const {product} = req.body;
      const { jsonResponse, httpStatusCode } = await createOrder(product);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to create order." });
    }
  });

  export default route