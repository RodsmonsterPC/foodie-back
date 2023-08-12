import express from "express";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import sellerRouter from "./routes/seller.route.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
server.use("/posts", postRouter);
server.use("/users", userRouter);
server.use("/sellers", sellerRouter);

export { server };
