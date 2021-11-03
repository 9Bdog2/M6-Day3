import express from "express";

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
}).post(async (req,res,next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})
