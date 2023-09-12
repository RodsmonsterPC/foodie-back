import { Router } from "express";
import {createOrder,captureOrder,cancelPayment,} from "../controllers/payment.controller.js";
const router = Router();
router.post("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("calcel-order", cancelPayment);

export default router;
