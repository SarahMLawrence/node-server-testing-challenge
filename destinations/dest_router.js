const express = require("express");
const Destinations = require("./dest_model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Destinations.find());
  } catch (err) {
    next(err);
  }
});



module.exports = router;
