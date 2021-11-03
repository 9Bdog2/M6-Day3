import express from "express";
import cors from "cors";

const server = express();

const { PORT = 3001 } = process.env;

server.use(cors());

server.use(express.json());

server.listen(PORT, async () => {
  console.log(`Serveris listening on port ${PORT}`);
});

server.on("error", (error) => {
  console.log("Server has stopped", error);
});
