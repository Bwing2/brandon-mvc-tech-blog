const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("userRoutes is working.");
});

module.exports = router;
