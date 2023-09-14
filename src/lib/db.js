import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
console.log(URL)
// const URL = `mongodb+srv://kodeawars-foodie:mesm990211@proyecto-foodie.iyfsthw.mongodb.net/foodiee`

const connect = () => {
  return mongoose.connect(URL);
};

export default connect;
