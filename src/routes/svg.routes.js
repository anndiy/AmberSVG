const express = require("express");
const generateWave = require("../generators/wave");

const router = express.Router();

router.get("/wave", (req, res) => {
  const svg = generateWave(req.query);

  res.set("Content-Type", "image/svg+xml");
  res.set("Cache-Control", "public, max-age=86400");

  res.send(svg);
});

module.exports = router;