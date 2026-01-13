const express = require("express");
const axios = require("axios");

const router = express.Router();

/* GET home page. */
router.post("/", async function (req, res, next) {
  const payload = req.body;

  try {
    const response = await axios.request(payload);
    return res.json(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
