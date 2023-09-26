import express from "express";
import "dotenv/config";
import * as paypal from "../controllers/payment.controller.js";
const route = express();
route.use(express.json());

route.post("/my-server/create-paypal-order", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { product } = req.body;
    const { jsonResponse, httpStatusCode } = await paypal.createOrder(product);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

route.post("/my-server/capture-paypal-order", async (req, res) => {
  try {
    const { orderID } = req.body;
    console.log(orderID);
    const { jsonResponse, httpStatusCode } = await paypal.captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});
