import express from "express";
import cors from "cors";
import { testConnection } from "./db/index.js";
import productsRouter from "./services/products/index.js";
import models from "./services/products/index.js"

const server = express();

const { PORT = 3001 } = process.env;

server.use(cors());

server.use(express.json());
server.use("/products", productsRouter);

server.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
  await testConnection();
  /* await connectDB() */
});

server.on("error", (error) => {
  console.log("Server has stopped", error);
});
