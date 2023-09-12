import dbConnect from "./src/lib/db.js";
import { server } from "./src/server.js";
import paymentRoutes from "./src/routes/payment.routes.js";
import { PORT } from "./src/config.js";
import express from "express";

const app = express();
app.use(paymentRoutes);
app.listen(PORT);
console.log("Server port", PORT);

dbConnect()
  .then(() => {
    server.listen(8081, () => {
      console.log("server listening on port 8081");
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });
