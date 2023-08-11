import dbConnect from "./src/lib/db.js";
import { server } from "./src/server.js";

dbConnect()
  .then(() => {
    server.listen(8081, () => {
      console.log("server listening on port 8081");
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });
