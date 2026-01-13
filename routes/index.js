const express = require("express");
const axios = require("axios");

const router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  const payload = req.body;
  console.log(payload);
  try {
    axios.request(payload);
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
