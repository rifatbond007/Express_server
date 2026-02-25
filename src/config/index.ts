import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const config = {
  connection_str: process.env.CONNECTION_STR,
  port: process.env.PORT,
};

export default config;