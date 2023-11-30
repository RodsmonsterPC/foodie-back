import express from "express";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import shoppingRouter from "./routes/shopping.route.js";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import paypalOrder from "./routes/paypalOrder.route.js";
import paypalId from "./routes/paypalID.route.js";

const server = express();
server.use(express.json());
server.use(cors());
server.use("/posts", postRouter);
server.use("/users", userRouter);
server.use("/shopping", shoppingRouter);
server.use("/auth", authRouter);
server.use("/", paypalOrder);
server.use("/", paypalId);
server.use(express.static("uploads"));
server.use(express.static("sellerUploads"));

export { server };
