import Express from "express";
import models from "../../db/models/index.js";

const { Product } = models;

const router = Express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Product.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  export default router
