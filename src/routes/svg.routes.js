const express = require("express");

const router = express.Router();

router.get("/wave", (req, res) => {
  res.set("Content-Type", "image/svg+xml");

  res.send(`
    <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" fill="none" stroke="black"/>
    </svg>
  `);
});

module.exports = router;